/* HARDWARE LAB 交互逻辑（平面组装台版） */

const $ = (id) => document.getElementById(id);

const state = {
  device: null,
  nodes: [],
  step: 0,
  done: false
};

/* ---------- SVG 渲染 ---------- */

function deviceTransforms(device) {
  const n = device.parts.length;
  return device.parts.map((p, i) => ({
    finalY: p.finalY !== undefined ? p.finalY : 0,
    explodedY: p.explodedY !== undefined ? p.explodedY : (i - (n - 1) / 2) * device.gap
  }));
}

function buildDeviceSVG(device, { assembled = false, interactive = false } = {}) {
  const tf = deviceTransforms(device);
  const order = device.parts
    .map((p, i) => ({ p, i }))
    .sort((a, b) => (a.p.z ?? a.i) - (b.p.z ?? b.i));

  const groups = order.map(({ p, i }) => {
    const y = assembled ? tf[i].finalY : tf[i].explodedY;
    const cls = interactive ? `part" data-idx="${i}"` : "";
    return `<g class="${cls}" style="transform: translate(0px, ${y}px)">${p.svg}</g>`;
  });

  return `<svg viewBox="${device.viewBox}" xmlns="http://www.w3.org/2000/svg">${groups.join("")}</svg>`;
}

/* ---------- 统计 & 时间线 & 设备库 ---------- */

function renderStats() {
  const parts = DEVICES.reduce((s, d) => s + d.parts.length, 0);
  const years = DEVICES.map(d => d.year);
  $("stat-devices").textContent = DEVICES.length;
  $("stat-parts").textContent = parts;
  $("stat-years").textContent = Math.max(...years) - Math.min(...years);
}

function renderHero() {
  const gb = DEVICES.find(d => d.id === "gameboy") || DEVICES[0];
  $("hero-device").innerHTML = buildDeviceSVG(gb, { assembled: true });
}

function renderTimeline() {
  const track = $("timeline-track");
  track.innerHTML = DEVICES.map(d => `
    <div class="tl-item" data-id="${d.id}" tabindex="0">
      <div class="tl-year">${d.year}</div>
      <div class="tl-name">${d.name}</div>
      <div class="tl-note">${d.note}</div>
    </div>`).join("");
  track.querySelectorAll(".tl-item").forEach(el =>
    el.addEventListener("click", () => {
      selectDevice(el.dataset.id);
      $("workbench").scrollIntoView({ behavior: "smooth" });
    })
  );
}

function renderGallery() {
  const grid = $("gallery-grid");
  grid.innerHTML = DEVICES.map(d => `
    <div class="device-card" data-id="${d.id}">
      ${buildDeviceSVG(d, { assembled: true })}
      <span class="dc-cat">${d.category}</span>
      <div class="dc-name">${d.name}</div>
      <div class="dc-meta">${d.brand} · ${d.year} · ${d.parts.length} 个零件</div>
      <div class="dc-go">进入组装台 →</div>
    </div>`).join("");
  grid.querySelectorAll(".device-card").forEach(el =>
    el.addEventListener("click", () => {
      selectDevice(el.dataset.id);
      $("workbench").scrollIntoView({ behavior: "smooth" });
    })
  );
}

/* ---------- 组装台 ---------- */

function selectDevice(id) {
  const device = DEVICES.find(d => d.id === id);
  if (!device) return;
  state.device = device;
  state.nodes = [];
  state.step = 0;
  state.done = false;

  $("wb-name").textContent = `${device.name}（${device.year}）`;
  $("wb-meta").textContent = `${device.brand} · ${device.category} · 共 ${device.parts.length} 个零件 · ${device.note}`;
  hideComplete();

  const stage = $("wb-stage");
  stage.innerHTML = buildDeviceSVG(device, { interactive: true });
  const svg = stage.querySelector("svg");

  state.nodes = device.parts.map((_, i) => svg.querySelector(`[data-idx="${i}"]`));

  state.nodes.forEach((el, i) => {
    el.addEventListener("click", () => {
      if (state.done) return;
      if (i === state.step) {
        assemblePart(i);
      } else if (i > state.step) {
        toast(`请先安装：${device.parts[state.step].label}`);
        el.animate(
          [{ transform: el.style.transform }, { transform: `${el.style.transform} translateX(4px)` }, { transform: el.style.transform }],
          { duration: 300 }
        );
      }
    });
  });

  renderTray();
  updateProgress();
  updateHint();
}

function assemblePart(i) {
  const device = state.device;
  const node = state.nodes[i];
  node.style.transform = `translate(0px, ${deviceTransforms(device)[i].finalY}px)`;
  node.classList.remove("next");
  node.classList.add("done");
  state.step++;

  renderTray();
  updateProgress();

  if (state.step >= device.parts.length) {
    state.done = true;
    showComplete();
  } else {
    updateHint();
    state.nodes[state.step].classList.add("next");
  }
}

function renderTray() {
  const tray = $("wb-tray");
  const device = state.device;
  if (!device) return;
  tray.innerHTML = device.parts.map((p, i) => {
    let cls = "tray-chip";
    if (i < state.step) cls += " done";
    else if (i === state.step && !state.done) cls += " next";
    return `<span class="${cls}" data-idx="${i}">${p.label}</span>`;
  }).join("");
  tray.querySelectorAll(".tray-chip.next").forEach(el =>
    el.addEventListener("click", () => assemblePart(Number(el.dataset.idx)))
  );
}

function updateHint() {
  const device = state.device;
  const p = device.parts[state.step];
  $("wb-hint").textContent = `第 ${state.step + 1} / ${device.parts.length} 步 · 安装「${p.label}」— ${p.desc}`;
  state.nodes[state.step]?.classList.add("next");
}

function updateProgress() {
  const pct = Math.round((state.step / state.device.parts.length) * 100);
  $("wb-progress-bar").style.width = pct + "%";
  $("wb-progress-text").textContent = pct + "%";
}

/* ---------- 完成与重置 ---------- */

let completeTimer = null;
function hideComplete() {
  clearTimeout(completeTimer);
  $("wb-complete").hidden = true;
}

function showComplete() {
  const device = state.device;
  $("wb-hint").textContent = "全部零件已安装完毕！";
  $("complete-title").textContent = `${device.name} 组装完成！`;
  $("complete-facts").innerHTML = device.facts.map(f => `<li>${f}</li>`).join("");
  confetti();
  clearTimeout(completeTimer);
  completeTimer = setTimeout(() => {
    $("wb-complete").hidden = false;
    $("wb-complete").scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, 900);
}

function resetDevice() {
  if (!state.device) return;
  const device = state.device;
  const tf = deviceTransforms(device);
  state.step = 0;
  state.done = false;
  state.nodes.forEach((el, i) => {
    el.style.transform = `translate(0px, ${tf[i].explodedY}px)`;
    el.classList.remove("done", "next");
  });
  hideComplete();
  renderTray();
  updateProgress();
  updateHint();
}

function autoAssemble() {
  if (!state.device || state.done) return;
  const remaining = state.step;
  for (let k = remaining; k < state.device.parts.length; k++) {
    setTimeout(() => {
      if (!state.done && k === state.step) assemblePart(k);
    }, (k - remaining) * 500);
  }
}

/* ---------- 反馈 ---------- */

let toastTimer = null;
function toast(msg) {
  document.querySelector(".toast")?.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  document.body.appendChild(el);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.remove(), 1800);
}

function confetti() {
  const dark = document.documentElement.getAttribute("data-theme") === "dark";
  const colors = dark
    ? ["#FF3D00", "#FAFAFA", "#737373", "#FF7A45", "#262626"]
    : ["#D42E00", "#0A0A0A", "#FF7A45", "#737373"];
  for (let i = 0; i < 46; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.style.left = Math.random() * 100 + "vw";
    el.style.width = el.style.height = (5 + Math.random() * 7) + "px";
    el.style.background = colors[i % colors.length];
    el.style.animationDuration = (1.8 + Math.random() * 1.6) + "s";
    el.style.animationDelay = Math.random() * 0.5 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4200);
  }
}

/* ---------- init ---------- */

$("btn-reset").addEventListener("click", resetDevice);
$("btn-again").addEventListener("click", resetDevice);
$("btn-close-complete").addEventListener("click", hideComplete);
$("btn-auto").addEventListener("click", autoAssemble);

$("theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("hl-theme", next); } catch (e) {}
});

renderStats();
renderHero();
renderTimeline();
renderGallery();
selectDevice(DEVICES[0].id);
