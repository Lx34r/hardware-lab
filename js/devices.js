/* 历代游戏硬件数据 + SVG 插画（示意性扁平风格重绘） */

const DEVICES = [
  {
    id: "famicom",
    name: "Famicom 红白机",
    year: 1983,
    category: "家用主机",
    brand: "Nintendo",
    note: "第三世代的开山之作",
    facts: [
      "1983 年发售，十字键 + AB 按键的手柄范式由此确立",
      "国内因红白配色被亲切地称为「红白机」",
      "全球销量约 6191 万台，卡带生态一直延续到 90 年代"
    ],
    viewBox: "0 0 460 420",
    gap: 48,
    parts: [
      {
        label: "底壳",
        desc: "米白机身与标志性的红色前带",
        svg: `
          <rect x="30" y="212" width="400" height="80" rx="12" fill="#ece7d9" stroke="#c8c1ac" stroke-width="2"/>
          <rect x="36" y="238" width="388" height="28" rx="6" fill="#d3402f"/>
          <rect x="52" y="284" width="40" height="10" rx="3" fill="#b9b19a"/>
          <rect x="368" y="284" width="40" height="10" rx="3" fill="#b9b19a"/>
          <circle cx="230" cy="275" r="10" fill="none" stroke="#b9b19a" stroke-width="2"/>`
      },
      {
        label: "主板",
        desc: "6502 内核与 PPU 图像处理器",
        svg: `
          <rect x="66" y="164" width="328" height="60" rx="6" fill="#2f7d46" stroke="#1e5730" stroke-width="2"/>
          <rect x="84" y="176" width="60" height="34" rx="3" fill="#1e5730"/>
          <rect x="156" y="176" width="44" height="22" rx="3" fill="#1e5730"/>
          <rect x="210" y="176" width="44" height="22" rx="3" fill="#1e5730"/>
          <rect x="270" y="170" width="90" height="30" rx="3" fill="#3d3f49"/>
          <rect x="120" y="216" width="120" height="8" rx="3" fill="#c9a53c"/>`
      },
      {
        label: "卡带仓",
        desc: "顶置 60 针卡带插槽",
        svg: `
          <rect x="94" y="148" width="244" height="38" rx="8" fill="#3a3d46" stroke="#26282f" stroke-width="2"/>
          <rect x="104" y="163" width="224" height="10" rx="2" fill="#1f2127"/>`
      },
      {
        label: "上盖",
        desc: "让卡带垂直插入的顶盖",
        svg: `
          <path fill-rule="evenodd" d="M42 150 H418 A12 12 0 0 1 430 162 V200 A12 12 0 0 1 418 212 H42 A12 12 0 0 1 30 200 V162 A12 12 0 0 1 42 150 Z M92 156 H340 A6 6 0 0 1 346 162 V174 A6 6 0 0 1 340 180 H92 A6 6 0 0 1 86 174 V162 A6 6 0 0 1 92 156 Z" fill="#ece7d9" stroke="#c8c1ac" stroke-width="2"/>
          <rect x="32" y="152" width="28" height="58" rx="6" fill="#d3402f"/>
          <rect x="400" y="152" width="28" height="58" rx="6" fill="#d3402f"/>
          <text x="216" y="203" text-anchor="middle" font-size="10" fill="#8f8873" font-family="sans-serif">FAMILY COMPUTER</text>`
      },
      {
        label: "电源与复位键",
        desc: "POWER 与 RESET 实体按键",
        svg: `
          <rect x="360" y="160" width="34" height="16" rx="4" fill="#d3402f"/>
          <text x="377" y="171" text-anchor="middle" font-size="7" fill="#fff" font-family="sans-serif">POWER</text>
          <rect x="360" y="182" width="34" height="16" rx="4" fill="#3a3d46"/>
          <text x="377" y="193" text-anchor="middle" font-size="7" fill="#c8ccd6" font-family="sans-serif">RESET</text>`
      }
    ]
  },
  {
    id: "gameboy",
    name: "Game Boy",
    year: 1989,
    category: "掌上游戏机",
    brand: "Nintendo",
    note: "掌机时代的定义者",
    facts: [
      "160×144 四阶灰度屏，峰值功耗极低",
      "4 节 AA 电池可以连续玩约 30 小时",
      "全球累计销量约 1.18 亿台（含 Game Boy Color）"
    ],
    viewBox: "0 0 400 560",
    gap: 48,
    parts: [
      {
        label: "后盖",
        desc: "内置 4 节 AA 电池仓",
        svg: `
          <rect x="90" y="90" width="220" height="360" rx="18" fill="#c9cdd6" stroke="#9298a6" stroke-width="3"/>
          <rect x="104" y="104" width="192" height="332" rx="12" fill="none" stroke="#b0b5c1" stroke-width="2"/>
          <circle cx="104" cy="104" r="3.5" fill="#9298a6"/><circle cx="296" cy="104" r="3.5" fill="#9298a6"/>
          <circle cx="104" cy="436" r="3.5" fill="#9298a6"/><circle cx="296" cy="436" r="3.5" fill="#9298a6"/>
          <rect x="152" y="200" width="96" height="70" rx="8" fill="#b4b9c5"/>
          <rect x="166" y="214" width="68" height="42" rx="4" fill="#9ba1ae"/>
          <text x="200" y="305" text-anchor="middle" font-size="11" fill="#8a8fa0" font-family="sans-serif">BATTERY · 4×AA</text>`
      },
      {
        label: "主板",
        desc: "夏普定制的 LR35902 CPU",
        svg: `
          <rect x="120" y="126" width="160" height="180" rx="8" fill="#2f7d46" stroke="#1e5730" stroke-width="2"/>
          <rect x="134" y="140" width="54" height="38" rx="3" fill="#1e5730"/>
          <rect x="198" y="140" width="46" height="26" rx="3" fill="#1e5730"/>
          <rect x="134" y="192" width="34" height="20" rx="3" fill="#22242b"/>
          <rect x="134" y="222" width="34" height="20" rx="3" fill="#22242b"/>
          <rect x="182" y="196" width="70" height="46" rx="3" fill="#3d3f49"/>
          <circle cx="258" cy="160" r="9" fill="#22242b"/><circle cx="258" cy="160" r="4" fill="#575b66"/>
          <rect x="150" y="286" width="100" height="10" rx="3" fill="#c9a53c"/>`
      },
      {
        label: "屏幕总成",
        desc: "DOT MATRIX 点阵液晶屏",
        svg: `
          <rect x="122" y="100" width="156" height="104" rx="8" fill="#565b6b"/>
          <rect x="132" y="110" width="136" height="76" rx="4" fill="#8ea814"/>
          <rect x="146" y="120" width="108" height="56" fill="#9cbc14"/>
          <rect x="156" y="128" width="8" height="8" fill="#0f380f"/>
          <rect x="170" y="140" width="8" height="8" fill="#0f380f"/>
          <rect x="190" y="132" width="8" height="8" fill="#0f380f"/>
          <rect x="212" y="146" width="8" height="8" fill="#0f380f"/>
          <rect x="234" y="134" width="8" height="8" fill="#0f380f"/>
          <rect x="226" y="160" width="8" height="8" fill="#0f380f"/>
          <text x="200" y="196" text-anchor="middle" font-size="8" fill="#3a3f4c" font-family="sans-serif">DOT MATRIX WITH STEREO SOUND</text>`
      },
      {
        label: "前壳",
        desc: "带屏幕开窗与扬声器孔的外壳",
        svg: `
          <path fill-rule="evenodd" d="M108 90 H292 A18 18 0 0 1 310 108 V432 A18 18 0 0 1 292 450 H108 A18 18 0 0 1 90 432 V108 A18 18 0 0 1 108 90 Z M131 104 H269 A6 6 0 0 1 275 110 V196 A6 6 0 0 1 269 202 H131 A6 6 0 0 1 125 196 V110 A6 6 0 0 1 131 104 Z" fill="#e3e6ec" stroke="#b7bcc8" stroke-width="2"/>
          <text x="200" y="222" text-anchor="middle" font-size="13" fill="#5b6070" font-style="italic" font-weight="bold" font-family="sans-serif">Nintendo GAME BOY™</text>
          <circle cx="256" cy="382" r="2.5" fill="#b0b5c1"/><circle cx="268" cy="382" r="2.5" fill="#b0b5c1"/><circle cx="280" cy="382" r="2.5" fill="#b0b5c1"/><circle cx="292" cy="382" r="2.5" fill="#b0b5c1"/>
          <circle cx="256" cy="394" r="2.5" fill="#b0b5c1"/><circle cx="268" cy="394" r="2.5" fill="#b0b5c1"/><circle cx="280" cy="394" r="2.5" fill="#b0b5c1"/><circle cx="292" cy="394" r="2.5" fill="#b0b5c1"/>
          <circle cx="256" cy="406" r="2.5" fill="#b0b5c1"/><circle cx="268" cy="406" r="2.5" fill="#b0b5c1"/><circle cx="280" cy="406" r="2.5" fill="#b0b5c1"/><circle cx="292" cy="406" r="2.5" fill="#b0b5c1"/>
          <circle cx="262" cy="418" r="2.5" fill="#b0b5c1"/><circle cx="274" cy="418" r="2.5" fill="#b0b5c1"/><circle cx="286" cy="418" r="2.5" fill="#b0b5c1"/>
          <circle cx="268" cy="430" r="2.5" fill="#b0b5c1"/><circle cx="280" cy="430" r="2.5" fill="#b0b5c1"/>
          <rect x="112" y="112" width="8" height="8" rx="2" fill="#ff5d5d"/>
          <circle cx="200" cy="437" r="7" fill="none" stroke="#b0b5c1" stroke-width="2"/>`
      },
      {
        label: "按键组",
        desc: "十字键、AB 键与 START/SELECT",
        svg: `
          <rect x="145" y="278" width="18" height="44" rx="4" fill="#2b2e37"/>
          <rect x="132" y="291" width="44" height="18" rx="4" fill="#2b2e37"/>
          <circle cx="154" cy="300" r="6" fill="#3d414c"/>
          <circle cx="243" cy="298" r="12" fill="#a63d6f"/>
          <text x="243" y="302" text-anchor="middle" font-size="10" fill="#f0dff0" font-family="sans-serif">B</text>
          <circle cx="270" cy="284" r="12" fill="#a63d6f"/>
          <text x="270" y="288" text-anchor="middle" font-size="10" fill="#f0dff0" font-family="sans-serif">A</text>
          <rect x="186" y="340" width="24" height="9" rx="4.5" fill="#2b2e37"/>
          <rect x="218" y="340" width="24" height="9" rx="4.5" fill="#2b2e37"/>
          <text x="198" y="361" text-anchor="middle" font-size="7" fill="#8a8fa0" font-family="sans-serif">START</text>
          <text x="230" y="361" text-anchor="middle" font-size="7" fill="#8a8fa0" font-family="sans-serif">SELECT</text>`
      }
    ]
  },
  {
    id: "ps1",
    name: "PlayStation",
    year: 1994,
    category: "家用主机",
    brand: "Sony",
    note: "光碟媒体的革命者",
    facts: [
      "1994 年发售，是首批销量破亿的家用主机（1.02 亿+）",
      "采用 CD-ROM 介质，单碟容量是卡带的数十倍",
      "项目前身是任天堂与索尼合作的 SNES-CD 计划"
    ],
    viewBox: "0 0 460 420",
    gap: 42,
    parts: [
      {
        label: "底壳",
        desc: "深灰机身与散热格栅",
        svg: `
          <rect x="40" y="234" width="380" height="96" rx="26" fill="#b6b9c2" stroke="#8f93a1" stroke-width="2"/>
          <rect x="70" y="300" width="110" height="5" rx="2.5" fill="#9b9fae"/>
          <rect x="70" y="310" width="130" height="5" rx="2.5" fill="#9b9fae"/>
          <rect x="70" y="320" width="100" height="5" rx="2.5" fill="#9b9fae"/>
          <circle cx="380" cy="308" r="14" fill="none" stroke="#8f93a1" stroke-width="2"/>`
      },
      {
        label: "主板",
        desc: "R3000A CPU 与 GTE 几何引擎",
        svg: `
          <rect x="84" y="246" width="292" height="64" rx="8" fill="#2f7d46" stroke="#1e5730" stroke-width="2"/>
          <rect x="100" y="258" width="70" height="36" rx="3" fill="#1e5730"/>
          <rect x="182" y="258" width="50" height="24" rx="3" fill="#1e5730"/>
          <rect x="244" y="258" width="50" height="24" rx="3" fill="#1e5730"/>
          <rect x="308" y="256" width="52" height="28" rx="3" fill="#3d3f49"/>
          <rect x="140" y="300" width="130" height="8" rx="3" fill="#c9a53c"/>`
      },
      {
        label: "激光头",
        desc: "读取 CD-ROM 的滑动光头组件",
        svg: `
          <rect x="168" y="252" width="124" height="34" rx="6" fill="#3a3d46" stroke="#26282f" stroke-width="2"/>
          <rect x="176" y="257" width="108" height="6" rx="3" fill="#26282f"/>
          <circle cx="230" cy="273" r="12" fill="#78b4e0"/>
          <circle cx="230" cy="273" r="6" fill="#a8d4f0"/>`
      },
      {
        label: "光驱盖",
        desc: "圆形 CD 仓的上层托盘",
        svg: `
          <rect x="64" y="212" width="332" height="36" rx="18" fill="#d3d6de" stroke="#a9adb9" stroke-width="2"/>
          <rect x="84" y="226" width="292" height="6" rx="3" fill="#b7bcc8"/>`
      },
      {
        label: "上盖",
        desc: "标志性的圆形光驱舱盖",
        svg: `
          <rect x="40" y="210" width="380" height="52" rx="26" fill="#cdd0d8" stroke="#9ba0ae" stroke-width="2"/>
          <circle cx="230" cy="236" r="30" fill="none" stroke="#9ba0ae" stroke-width="2"/>
          <text x="230" y="240" text-anchor="middle" font-size="10" fill="#6d7280" font-style="italic" font-weight="bold" font-family="sans-serif">PlayStation</text>`
      }
    ]
  },
  {
    id: "switch",
    name: "Nintendo Switch",
    year: 2017,
    category: "混合主机",
    brand: "Nintendo",
    note: "主机与掌机的形态合一",
    facts: [
      "2017 年发售，主机 / 掌机双形态无缝切换",
      "Joy-Con 可拆分，随时随地两人共享游玩",
      "OLED 版于 2021 年推出，屏幕升级至 7 英寸"
    ],
    viewBox: "0 0 520 360",
    gap: 42,
    parts: [
      {
        label: "背板",
        desc: "一体式铝合金外壳背板",
        svg: `
          <rect x="110" y="130" width="300" height="120" rx="10" fill="#2c2f3a" stroke="#1d2028" stroke-width="2"/>
          <text x="260" y="244" text-anchor="middle" font-size="9" fill="#565b66" font-family="sans-serif">NINTENDO SWITCH</text>`
      },
      {
        label: "主板",
        desc: "NVIDIA Tegra 定制 SoC",
        svg: `
          <rect x="150" y="148" width="220" height="58" rx="6" fill="#2f7d46" stroke="#1e5730" stroke-width="2"/>
          <rect x="164" y="158" width="64" height="32" rx="3" fill="#1e5730"/>
          <rect x="238" y="158" width="44" height="22" rx="3" fill="#1e5730"/>
          <rect x="292" y="158" width="44" height="22" rx="3" fill="#3d3f49"/>
          <rect x="180" y="196" width="120" height="8" rx="3" fill="#c9a53c"/>`
      },
      {
        label: "电池",
        desc: "4310mAh 锂离子电池",
        svg: `
          <rect x="205" y="212" width="110" height="26" rx="7" fill="#17a398" stroke="#0e7c73" stroke-width="2"/>
          <path d="M262 216 l-8 12 h6 l-4 10 10 -13 h-6 l4 -9 z" fill="#ffd166"/>`
      },
      {
        label: "屏幕总成",
        desc: "6.2 英寸电容触摸屏",
        svg: `
          <rect x="125" y="138" width="270" height="104" rx="8" fill="#14151b" stroke="#000" stroke-width="1"/>
          <rect x="137" y="148" width="246" height="84" rx="3" fill="#1e6fd9"/>
          <rect x="137" y="148" width="246" height="40" rx="3" fill="#2f8bf0"/>
          <circle cx="260" cy="190" r="22" fill="#ffd166"/>
          <rect x="200" y="204" width="120" height="10" rx="5" fill="#0f3f8a"/>`
      },
      {
        label: "左 Joy-Con",
        desc: "含体感与 HD 震动的左手柄",
        svg: `
          <rect x="76" y="126" width="40" height="128" rx="16" fill="#00b2ff" stroke="#0092d4" stroke-width="2"/>
          <circle cx="96" cy="160" r="13" fill="#2b2e37"/><circle cx="96" cy="160" r="7" fill="#4a4e5a"/>
          <circle cx="96" cy="196" r="5" fill="#14151b"/><circle cx="96" cy="208" r="5" fill="#14151b"/><circle cx="96" cy="220" r="5" fill="#14151b"/>
          <rect x="88" y="136" width="16" height="6" rx="3" fill="#14151b"/>`
      },
      {
        label: "右 Joy-Con",
        desc: "红外与 NFC 都在这一侧",
        svg: `
          <rect x="404" y="126" width="40" height="128" rx="16" fill="#ff3c46" stroke="#d42e36" stroke-width="2"/>
          <circle cx="424" cy="215" r="13" fill="#2b2e37"/><circle cx="424" cy="215" r="7" fill="#4a4e5a"/>
          <circle cx="424" cy="152" r="5" fill="#14151b"/><circle cx="416" cy="163" r="5" fill="#14151b"/><circle cx="432" cy="163" r="5" fill="#14151b"/><circle cx="424" cy="174" r="5" fill="#14151b"/>
          <circle cx="424" cy="190" r="7" fill="#14151b"/>`
      }
    ]
  },
  {
    id: "dualsense",
    name: "DualSense 手柄",
    year: 2020,
    category: "游戏手柄",
    brand: "Sony",
    note: "触觉反馈的新纪元",
    facts: [
      "2020 年随 PS5 首发，自适应扳机可以模拟扳机阻力",
      "双执行器触觉反馈比传统震动细腻得多",
      "内置麦克风阵列与扬声器，不摘手柄也能语音聊天"
    ],
    viewBox: "0 0 460 430",
    gap: 36,
    parts: [
      {
        label: "中框",
        desc: "哑白双色机身的中层骨架",
        svg: `
          <path d="M150 140 H310 Q340 140 340 172 V214 Q340 244 312 246 H148 Q120 244 120 214 V172 Q120 140 150 140 Z" fill="#e8eaef" stroke="#c3c8d4" stroke-width="2"/>`
      },
      {
        label: "主板",
        desc: "处理触觉与自适应扳机信号",
        svg: `
          <rect x="172" y="160" width="116" height="58" rx="6" fill="#2f7d46" stroke="#1e5730" stroke-width="2"/>
          <rect x="184" y="172" width="52" height="28" rx="3" fill="#1e5730"/>
          <rect x="246" y="172" width="30" height="18" rx="3" fill="#3d3f49"/>
          <circle cx="272" cy="204" r="5" fill="#22242b"/>`
      },
      {
        label: "电池",
        desc: "1560mAh 可充电锂电池",
        svg: `
          <rect x="200" y="228" width="64" height="24" rx="6" fill="#17a398" stroke="#0e7c73" stroke-width="2"/>
          <path d="M234 231 l-6 9 h4.5 l-3 7.5 7.5 -10 h-4.5 l3 -6.5 z" fill="#ffd166"/>`
      },
      {
        label: "触控板",
        desc: "支持双点触控与滑动",
        svg: `
          <rect x="186" y="144" width="88" height="36" rx="12" fill="#dde1ea" stroke="#b9bfcd" stroke-width="2"/>
          <line x1="230" y1="148" x2="230" y2="176" stroke="#c3c8d4" stroke-width="2"/>`
      },
      {
        label: "按键组",
        desc: "十字键、功能键与双摇杆",
        svg: `
          <rect x="152" y="198" width="16" height="36" rx="4" fill="#2b2e37"/>
          <rect x="142" y="208" width="36" height="16" rx="4" fill="#2b2e37"/>
          <circle cx="296" cy="196" r="9" fill="#d8dce5" stroke="#b9bfcd" stroke-width="1.5"/>
          <path d="M296 191 l6 10 h-12 z" fill="none" stroke="#5b6070" stroke-width="1.5"/>
          <circle cx="296" cy="220" r="9" fill="#d8dce5" stroke="#b9bfcd" stroke-width="1.5"/>
          <circle cx="296" cy="220" r="4.5" fill="none" stroke="#5b6070" stroke-width="1.5"/>
          <circle cx="284" cy="208" r="9" fill="#d8dce5" stroke="#b9bfcd" stroke-width="1.5"/>
          <line x1="280.5" y1="204.5" x2="287.5" y2="211.5" stroke="#5b6070" stroke-width="1.5"/>
          <line x1="287.5" y1="204.5" x2="280.5" y2="211.5" stroke="#5b6070" stroke-width="1.5"/>
          <circle cx="308" cy="208" r="9" fill="#d8dce5" stroke="#b9bfcd" stroke-width="1.5"/>
          <rect x="303.5" y="203.5" width="9" height="9" fill="none" stroke="#5b6070" stroke-width="1.5"/>
          <circle cx="198" cy="254" r="14" fill="#2b2e37"/><circle cx="198" cy="254" r="9" fill="#4a4e5a"/>
          <circle cx="262" cy="254" r="14" fill="#2b2e37"/><circle cx="262" cy="254" r="9" fill="#4a4e5a"/>`
      },
      {
        label: "握把",
        desc: "内置触觉反馈执行器",
        svg: `
          <path d="M150 206 C130 220 118 250 124 282 C129 306 162 310 174 290 C182 276 182 244 178 214 Z" fill="#e8eaef" stroke="#c3c8d4" stroke-width="2"/>
          <path d="M310 206 C330 220 342 250 336 282 C331 306 298 310 286 290 C278 276 278 244 282 214 Z" fill="#e8eaef" stroke="#c3c8d4" stroke-width="2"/>
          <line x1="138" y1="266" x2="146" y2="270" stroke="#c3c8d4" stroke-width="2"/>
          <line x1="136" y1="276" x2="144" y2="280" stroke="#c3c8d4" stroke-width="2"/>
          <line x1="322" y1="266" x2="314" y2="270" stroke="#c3c8d4" stroke-width="2"/>
          <line x1="324" y1="276" x2="316" y2="280" stroke="#c3c8d4" stroke-width="2"/>`
      }
    ]
  },
  {
    id: "keyboard",
    name: "热插拔机械键盘",
    year: 2020,
    category: "键鼠外设",
    brand: "Community",
    note: "轴体自由的外设终极形态",
    facts: [
      "每颗按键都有独立轴体，手感由轴心与弹簧决定",
      "Cherry MX 十字轴自 1980 年代起成为事实标准",
      "热插拔 PCB 让换轴不再需要烙铁，几十秒完成"
    ],
    viewBox: "0 0 520 400",
    parts: [
      {
        label: "外壳底座",
        desc: "Gasket 结构的铝合金外壳",
        z: 4,
        finalY: 288,
        explodedY: 320,
        svg: `
          <rect x="40" y="0" width="440" height="72" rx="12" fill="#2f3340" stroke="#1f232e" stroke-width="2"/>
          <rect x="48" y="54" width="424" height="12" rx="6" fill="#3c4150"/>
          <circle cx="60" cy="22" r="6" fill="#7c5cff"/>
          <rect x="428" y="26" width="24" height="10" rx="3" fill="#14151b"/>`
      },
      {
        label: "消音棉",
        desc: "吸收空腔音的 PORON 棉",
        z: 0,
        finalY: 300,
        explodedY: 276,
        svg: `<rect x="56" y="0" width="408" height="10" rx="5" fill="#f0d9a8" stroke="#d9bf85" stroke-width="1"/>`
      },
      {
        label: "PCB 主板",
        desc: "支持热插拔轴座的电路板",
        z: 1,
        finalY: 306,
        explodedY: 232,
        svg: `
          <rect x="56" y="0" width="408" height="16" rx="4" fill="#1e5730" stroke="#143d22" stroke-width="2"/>
          <circle cx="82" cy="8" r="2" fill="#c9a53c"/><circle cx="106" cy="8" r="2" fill="#c9a53c"/><circle cx="130" cy="8" r="2" fill="#c9a53c"/><circle cx="154" cy="8" r="2" fill="#c9a53c"/><circle cx="178" cy="8" r="2" fill="#c9a53c"/><circle cx="202" cy="8" r="2" fill="#c9a53c"/><circle cx="226" cy="8" r="2" fill="#c9a53c"/><circle cx="250" cy="8" r="2" fill="#c9a53c"/><circle cx="274" cy="8" r="2" fill="#c9a53c"/><circle cx="298" cy="8" r="2" fill="#c9a53c"/><circle cx="322" cy="8" r="2" fill="#c9a53c"/><circle cx="346" cy="8" r="2" fill="#c9a53c"/><circle cx="370" cy="8" r="2" fill="#c9a53c"/><circle cx="394" cy="8" r="2" fill="#c9a53c"/><circle cx="418" cy="8" r="2" fill="#c9a53c"/><circle cx="442" cy="8" r="2" fill="#c9a53c"/>`
      },
      {
        label: "定位板",
        desc: "决定键线分离手感的钢板",
        z: 2,
        finalY: 300,
        explodedY: 188,
        svg: `
          <rect x="56" y="0" width="408" height="10" rx="3" fill="#9aa1b0" stroke="#7d8494" stroke-width="1"/>
          <rect x="70" y="2" width="14" height="6" fill="#26282f"/><rect x="100" y="2" width="14" height="6" fill="#26282f"/><rect x="130" y="2" width="14" height="6" fill="#26282f"/><rect x="160" y="2" width="14" height="6" fill="#26282f"/><rect x="190" y="2" width="14" height="6" fill="#26282f"/><rect x="220" y="2" width="14" height="6" fill="#26282f"/><rect x="250" y="2" width="14" height="6" fill="#26282f"/><rect x="280" y="2" width="14" height="6" fill="#26282f"/><rect x="310" y="2" width="14" height="6" fill="#26282f"/><rect x="340" y="2" width="14" height="6" fill="#26282f"/><rect x="370" y="2" width="14" height="6" fill="#26282f"/><rect x="400" y="2" width="14" height="6" fill="#26282f"/><rect x="430" y="2" width="14" height="6" fill="#26282f"/>`
      },
      {
        label: "轴体",
        desc: "十颗红轴，线性顺滑",
        z: 3,
        finalY: 296,
        explodedY: 144,
        svg: `
          <rect x="60" y="0" width="30" height="22" rx="3" fill="#d95f43" stroke="#a8432e" stroke-width="1.5"/><rect x="73" y="4" width="4" height="6" fill="#333"/>
          <rect x="102" y="0" width="30" height="22" rx="3" fill="#d95f43" stroke="#a8432e" stroke-width="1.5"/><rect x="115" y="4" width="4" height="6" fill="#333"/>
          <rect x="144" y="0" width="30" height="22" rx="3" fill="#d95f43" stroke="#a8432e" stroke-width="1.5"/><rect x="157" y="4" width="4" height="6" fill="#333"/>
          <rect x="186" y="0" width="30" height="22" rx="3" fill="#d95f43" stroke="#a8432e" stroke-width="1.5"/><rect x="199" y="4" width="4" height="6" fill="#333"/>
          <rect x="228" y="0" width="30" height="22" rx="3" fill="#d95f43" stroke="#a8432e" stroke-width="1.5"/><rect x="241" y="4" width="4" height="6" fill="#333"/>
          <rect x="270" y="0" width="30" height="22" rx="3" fill="#d95f43" stroke="#a8432e" stroke-width="1.5"/><rect x="283" y="4" width="4" height="6" fill="#333"/>
          <rect x="312" y="0" width="30" height="22" rx="3" fill="#d95f43" stroke="#a8432e" stroke-width="1.5"/><rect x="325" y="4" width="4" height="6" fill="#333"/>
          <rect x="354" y="0" width="30" height="22" rx="3" fill="#d95f43" stroke="#a8432e" stroke-width="1.5"/><rect x="367" y="4" width="4" height="6" fill="#333"/>
          <rect x="396" y="0" width="30" height="22" rx="3" fill="#d95f43" stroke="#a8432e" stroke-width="1.5"/><rect x="409" y="4" width="4" height="6" fill="#333"/>
          <rect x="438" y="0" width="30" height="22" rx="3" fill="#d95f43" stroke="#a8432e" stroke-width="1.5"/><rect x="451" y="4" width="4" height="6" fill="#333"/>`
      },
      {
        label: "键帽",
        desc: "PBT 二色成型键帽",
        z: 5,
        finalY: 258,
        explodedY: 100,
        svg: `
          <rect x="52" y="0" width="28" height="26" rx="5" fill="#ff8c42" stroke="#d96f2e" stroke-width="1.5"/>
          <rect x="84" y="0" width="28" height="26" rx="5" fill="#3f4450" stroke="#2b2e37" stroke-width="1.5"/>
          <rect x="116" y="0" width="28" height="26" rx="5" fill="#e8eaef" stroke="#c3c8d4" stroke-width="1.5"/>
          <rect x="148" y="0" width="28" height="26" rx="5" fill="#e8eaef" stroke="#c3c8d4" stroke-width="1.5"/>
          <rect x="180" y="0" width="28" height="26" rx="5" fill="#e8eaef" stroke="#c3c8d4" stroke-width="1.5"/>
          <rect x="212" y="0" width="28" height="26" rx="5" fill="#e8eaef" stroke="#c3c8d4" stroke-width="1.5"/>
          <rect x="244" y="0" width="28" height="26" rx="5" fill="#7c5cff" stroke="#5f3fe0" stroke-width="1.5"/>
          <rect x="276" y="0" width="28" height="26" rx="5" fill="#e8eaef" stroke="#c3c8d4" stroke-width="1.5"/>
          <rect x="308" y="0" width="28" height="26" rx="5" fill="#e8eaef" stroke="#c3c8d4" stroke-width="1.5"/>
          <rect x="340" y="0" width="28" height="26" rx="5" fill="#e8eaef" stroke="#c3c8d4" stroke-width="1.5"/>
          <rect x="372" y="0" width="28" height="26" rx="5" fill="#3f4450" stroke="#2b2e37" stroke-width="1.5"/>
          <rect x="404" y="0" width="28" height="26" rx="5" fill="#e8eaef" stroke="#c3c8d4" stroke-width="1.5"/>
          <rect x="436" y="0" width="28" height="26" rx="5" fill="#00e5a0" stroke="#00b57e" stroke-width="1.5"/>`
      }
    ]
  }
];
