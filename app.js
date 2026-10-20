// STRATÉGIAI DÖNTÉSI MÁTRIX — MOTOR ÉS ADATTÁR
const svgLibrary = {
  wbs: `<svg class="modal-diagram-svg" viewBox="0 0 320 200"><rect x="95" y="10" width="130" height="34" rx="6" fill="#1fa876" fill-opacity="0.25" stroke="#1fa876" stroke-width="2"/><text x="160" y="32" fill="#142033" font-family="'JetBrains Mono'" font-size="11" font-weight="bold" text-anchor="middle">PROJEKT (100%)</text><path d="M160 44 V70 M45 70 H275 M45 70 V90 M160 70 V90 M275 70 V90" stroke="#1fa876" stroke-width="2" fill="none"/><rect x="10" y="90" width="70" height="30" rx="5" fill="#edf3f9" stroke="#7b94ad"/><text x="45" y="109" fill="#142033" font-family="'JetBrains Mono'" font-size="9" text-anchor="middle">WBS 1.1</text><rect x="125" y="90" width="70" height="30" rx="5" fill="#edf3f9" stroke="#7b94ad"/><text x="160" y="109" fill="#142033" font-family="'JetBrains Mono'" font-size="9" text-anchor="middle">WBS 1.2</text><rect x="240" y="90" width="70" height="30" rx="5" fill="#edf3f9" stroke="#7b94ad"/><text x="275" y="109" fill="#142033" font-family="'JetBrains Mono'" font-size="9" text-anchor="middle">WBS 1.3</text><path d="M45 120 V140 M160 120 V140 M275 120 V140" stroke="#7b94ad" stroke-dasharray="3 3"/><rect x="10" y="140" width="70" height="26" rx="4" fill="#fff" stroke="#1fa876"/><text x="45" y="157" fill="#1fa876" font-family="'JetBrains Mono'" font-size="8" font-weight="bold" text-anchor="middle">Munkacsomag</text><rect x="125" y="140" width="70" height="26" rx="4" fill="#fff" stroke="#1fa876"/><text x="160" y="157" fill="#1fa876" font-family="'JetBrains Mono'" font-size="8" font-weight="bold" text-anchor="middle">Munkacsomag</text><rect x="240" y="140" width="70" height="26" rx="4" fill="#fff" stroke="#1fa876"/><text x="275" y="157" fill="#1fa876" font-family="'JetBrains Mono'" font-size="8" font-weight="bold" text-anchor="middle">Munkacsomag</text></svg>`,
  gantt: `<svg class="modal-diagram-svg" viewBox="0 0 320 200"><line x1="60" y1="25" x2="300" y2="25" stroke="#cbd5e1" stroke-width="1.5"/><text x="90" y="18" fill="#64748b" font-size="9" font-family="'JetBrains Mono'">HÉT 1</text><text x="150" y="18" fill="#64748b" font-size="9" font-family="'JetBrains Mono'">HÉT 2</text><text x="210" y="18" fill="#64748b" font-size="9" font-family="'JetBrains Mono'">HÉT 3</text><text x="270" y="18" fill="#64748b" font-size="9" font-family="'JetBrains Mono'">HÉT 4</text><text x="10" y="52" fill="#334155" font-size="9.5" font-family="'JetBrains Mono'">Tervezés</text><rect x="65" y="40" width="70" height="20" rx="4" fill="#ef4444"/><text x="10" y="87" fill="#334155" font-size="9.5" font-family="'JetBrains Mono'">Engedély</text><rect x="135" y="75" width="85" height="20" rx="4" fill="#ef4444"/><text x="10" y="122" fill="#334155" font-size="9.5" font-family="'JetBrains Mono'">Beszerzés</text><rect x="90" y="110" width="55" height="20" rx="4" fill="#3b82f6"/><text x="10" y="157" fill="#334155" font-size="9.5" font-family="'JetBrains Mono'">Kivitelezés</text><rect x="220" y="145" width="75" height="20" rx="4" fill="#ef4444"/><text x="160" y="185" fill="#ef4444" font-size="9.5" font-weight="bold" font-family="'JetBrains Mono'" text-anchor="middle">PIROS SÁVOK = KRITIKUS ÚT (CPM)</text></svg>`,
  dmaic: `<svg class="modal-diagram-svg" viewBox="0 0 320 200"><circle cx="160" cy="95" r="65" stroke="#cbd5e1" stroke-width="2.5" fill="none" stroke-dasharray="6 6"/><rect x="125" y="12" width="70" height="28" rx="6" fill="#1fa876"/><text x="160" y="30" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="10" text-anchor="middle">DEFINE</text><rect x="225" y="60" width="75" height="28" rx="6" fill="#1fa876" fill-opacity="0.85"/><text x="262" y="78" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="10" text-anchor="middle">MEASURE</text><rect x="200" y="130" width="75" height="28" rx="6" fill="#1fa876" fill-opacity="0.7"/><text x="237" y="148" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="10" text-anchor="middle">ANALYZE</text><rect x="50" y="130" width="75" height="28" rx="6" fill="#1fa876" fill-opacity="0.7"/><text x="87" y="148" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="10" text-anchor="middle">IMPROVE</text><rect x="20" y="60" width="75" height="28" rx="6" fill="#1fa876" fill-opacity="0.85"/><text x="57" y="78" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="10" text-anchor="middle">CONTROL</text><text x="160" y="98" fill="#1fa876" font-family="'Manrope'" font-size="14" font-weight="bold" text-anchor="middle">3,4 DPMO</text></svg>`,
  diamond: `<svg class="modal-diagram-svg" viewBox="0 0 360 210"><polygon points="25,100 85,35 145,100 85,165" fill="#fff8ea" stroke="#df8e0a" stroke-width="2"/><line x1="85" y1="35" x2="85" y2="165" stroke="#df8e0a" stroke-dasharray="3 3"/><text x="55" y="104" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold" fill="#ca8a04">DISCOVER</text><text x="115" y="104" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold" fill="#ca8a04">DEFINE</text><polygon points="175,100 235,35 295,100 235,165" fill="#e8f7f1" stroke="#1fa876" stroke-width="2"/><line x1="235" y1="35" x2="235" y2="165" stroke="#1fa876" stroke-dasharray="3 3"/><text x="205" y="104" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold" fill="#15803d">DEVELOP</text><text x="265" y="104" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold" fill="#15803d">DELIVER</text><text x="85" y="185" font-family="'Manrope'" font-size="10" font-weight="bold" fill="#df8e0a" text-anchor="middle">1. Probléma Feltárása</text><text x="235" y="185" font-family="'Manrope'" font-size="10" font-weight="bold" fill="#1fa876" text-anchor="middle">2. Megoldás Tesztelése</text></svg>`,
  trl: `<svg class="modal-diagram-svg" viewBox="0 0 320 200"><defs><linearGradient id="gTrl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7655cb"/><stop offset="50%" stop-color="#1d7cd8"/><stop offset="100%" stop-color="#1fa876"/></linearGradient></defs><rect x="30" y="25" width="260" height="24" rx="6" fill="url(#gTrl)"/><text x="160" y="41" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="11" text-anchor="middle">TRL 1 —————— TRL 9</text><rect x="25" y="75" width="80" height="46" rx="6" fill="#f4effe" stroke="#7655cb" stroke-width="1.5"/><text x="65" y="95" fill="#7655cb" font-family="'JetBrains Mono'" font-size="11" font-weight="bold" text-anchor="middle">TRL 1-3</text><text x="65" y="111" fill="#5c6c82" font-size="8.5" text-anchor="middle">Labor Alapelv</text><rect x="120" y="75" width="80" height="46" rx="6" fill="#edf5fd" stroke="#1d7cd8" stroke-width="1.5"/><text x="160" y="95" fill="#1d7cd8" font-family="'JetBrains Mono'" font-size="11" font-weight="bold" text-anchor="middle">TRL 4-6</text><text x="160" y="111" fill="#5c6c82" font-size="8.5" text-anchor="middle">Prototípus Teszt</text><rect x="215" y="75" width="80" height="46" rx="6" fill="#e8f7f1" stroke="#1fa876" stroke-width="1.5"/><text x="255" y="95" fill="#1fa876" font-family="'JetBrains Mono'" font-size="11" font-weight="bold" text-anchor="middle">TRL 7-9</text><text x="255" y="111" fill="#5c6c82" font-size="8.5" text-anchor="middle">Ipari Éles Üzem</text></svg>`,
  mvp: `<svg class="modal-diagram-svg" viewBox="0 0 320 200"><circle cx="160" cy="95" r="55" stroke="#df8e0a" stroke-width="2.5" fill="none" stroke-dasharray="5 5"/><rect x="125" y="16" width="70" height="28" rx="5" fill="#df8e0a"/><text x="160" y="34" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="10.5" text-anchor="middle">BUILD</text><rect x="225" y="95" width="75" height="28" rx="5" fill="#df8e0a"/><text x="262" y="113" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="10.5" text-anchor="middle">MEASURE</text><rect x="20" y="95" width="75" height="28" rx="5" fill="#df8e0a"/><text x="57" y="113" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="10.5" text-anchor="middle">LEARN</text><text x="160" y="98" fill="#142033" font-family="'Manrope'" font-size="16" font-weight="bold" text-anchor="middle">MVP</text></svg>`,
  vsm: `<svg class="modal-diagram-svg" viewBox="0 0 320 200"><rect x="20" y="35" width="65" height="42" rx="5" fill="#f8fafc" stroke="#94a3b8"/><text x="52" y="60" fill="#1e293b" font-family="'JetBrains Mono'" font-size="9.5" text-anchor="middle">Kérelem</text><rect x="125" y="35" width="70" height="42" rx="5" fill="#fff8ea" stroke="#df8e0a"/><text x="160" y="60" fill="#df8e0a" font-family="'JetBrains Mono'" font-size="9.5" text-anchor="middle">Feldolgozás</text><rect x="235" y="35" width="65" height="42" rx="5" fill="#e8f7f1" stroke="#1fa876"/><text x="267" y="60" fill="#1fa876" font-family="'JetBrains Mono'" font-size="9.5" text-anchor="middle">Átadás</text><path d="M85 56 H125 M195 56 H235" stroke="#64748b" stroke-width="2"/><path d="M20 115 H60 V140 H130 V115 H165 V140 H235 V115 H290" stroke="#df8e0a" stroke-width="2.5" fill="none"/><text x="160" y="160" fill="#ef4444" font-family="'JetBrains Mono'" font-size="9.5" font-weight="bold" text-anchor="middle">Várakozási idők (Muda) felszámolása</text></svg>`,
  rpa: `<svg class="modal-diagram-svg" viewBox="0 0 340 200"><rect x="20" y="70" width="70" height="60" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/><text x="55" y="98" font-family="'JetBrains Mono'" font-size="9" font-weight="bold" fill="#1e293b" text-anchor="middle">Input Adat</text><path d="M90 100 H120" stroke="#1fa876" stroke-width="2"/><rect x="120" y="55" width="100" height="90" rx="8" fill="#e8f7f1" stroke="#1fa876" stroke-width="2"/><circle cx="170" cy="85" r="14" fill="#1fa876" opacity="0.15"/><text x="170" y="90" font-size="14" text-anchor="middle">🤖</text><text x="170" y="115" font-family="'JetBrains Mono'" font-size="10" font-weight="bold" fill="#142033" text-anchor="middle">RPA MOTOR</text><path d="M220 100 H250" stroke="#1fa876" stroke-width="2"/><rect x="250" y="50" width="70" height="35" rx="5" fill="#f8fafc" stroke="#64748b"/><text x="285" y="72" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold" fill="#1e293b" text-anchor="middle">ERP Rendszer</text><rect x="250" y="115" width="70" height="35" rx="5" fill="#f8fafc" stroke="#64748b"/><text x="285" y="137" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold" fill="#1e293b" text-anchor="middle">Főkönyv</text><text x="170" y="175" font-family="'JetBrains Mono'" font-size="9" font-weight="bold" fill="#1fa876" text-anchor="middle">24/7 GÉPI FELDOLGOZÁS · NULLA HIBA</text></svg>`,
  ocr: `<svg class="modal-diagram-svg" viewBox="0 0 340 200"><rect x="20" y="55" width="65" height="90" rx="4" fill="#fff" stroke="#dc2626" stroke-width="1.5"/><text x="52" y="85" font-size="16" text-anchor="middle">📄</text><text x="52" y="110" font-family="'JetBrains Mono'" font-size="8" font-weight="bold" fill="#1e293b" text-anchor="middle">PDF Számla</text><path d="M85 100 H120" stroke="#cbd5e1" stroke-width="2"/><rect x="120" y="55" width="95" height="90" rx="6" fill="#f8fafc" stroke="#38bdf8" stroke-width="2"/><line x1="125" y1="85" x2="210" y2="85" stroke="#38bdf8" stroke-width="2" stroke-dasharray="2 2"/><text x="167" y="105" font-family="'JetBrains Mono'" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">OCR SCAN</text><path d="M215 100 H245" stroke="#cbd5e1" stroke-width="2"/><rect x="245" y="55" width="80" height="90" rx="5" fill="#e8f7f1" stroke="#1fa876" stroke-width="1.5"/><text x="285" y="80" font-family="'JetBrains Mono'" font-size="8" font-weight="bold" fill="#15803d" text-anchor="middle">JSON / XML</text><text x="285" y="105" font-family="'JetBrains Mono'" font-size="7" fill="#334155" text-anchor="middle">IBAN Kinyerve</text><text x="285" y="125" font-family="'JetBrains Mono'" font-size="7" fill="#334155" text-anchor="middle">Összeg &amp; ÁFA</text></svg>`,
  evm: `<svg class="modal-diagram-svg" viewBox="0 0 320 200"><line x1="40" y1="160" x2="280" y2="160" stroke="#64748b" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="30" stroke="#64748b" stroke-width="1.5"/><path d="M40 160 Q 140 110, 260 40" stroke="#3b82f6" stroke-width="2" fill="none"/><text x="265" y="42" fill="#3b82f6" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold">PV (Terv)</text><path d="M40 160 Q 140 130, 200 90" stroke="#1fa876" stroke-width="2.5" fill="none"/><text x="205" y="93" fill="#1fa876" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold">EV (Érték)</text><path d="M40 160 Q 140 90, 200 70" stroke="#ef4444" stroke-width="2" stroke-dasharray="3 3" fill="none"/><text x="205" y="73" fill="#ef4444" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold">AC (Költség)</text><text x="160" y="185" fill="#1e293b" font-family="'JetBrains Mono'" font-size="9" text-anchor="middle">CPI &lt; 1 = Költségtúllépés · SPI &lt; 1 = Csúszás</text></svg>`,
  neural: `<svg class="modal-diagram-svg" viewBox="0 0 320 200"><line x1="40" y1="60" x2="160" y2="40" stroke="#93c5fd" stroke-width="1.5"/><line x1="40" y1="60" x2="160" y2="100" stroke="#93c5fd" stroke-width="1.5"/><line x1="40" y1="140" x2="160" y2="100" stroke="#93c5fd" stroke-width="1.5"/><line x1="40" y1="140" x2="160" y2="160" stroke="#93c5fd" stroke-width="1.5"/><line x1="160" y1="40" x2="280" y2="100" stroke="#60a5fa" stroke-width="2"/><line x1="160" y1="100" x2="280" y2="100" stroke="#60a5fa" stroke-width="2"/><line x1="160" y1="160" x2="280" y2="100" stroke="#60a5fa" stroke-width="2"/><circle cx="40" cy="60" r="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><circle cx="40" cy="140" r="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><circle cx="160" cy="40" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><circle cx="160" cy="100" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><circle cx="160" cy="160" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><circle cx="280" cy="100" r="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="2.5"/><text x="160" y="192" font-family="'JetBrains Mono'" font-size="9" font-weight="bold" fill="#1e3a8a" text-anchor="middle">NEURÁLIS HÁLÓZAT &amp; SÚLYOZÁS</text></svg>`,
  quantum: `<svg class="modal-diagram-svg" viewBox="0 0 320 200"><ellipse cx="160" cy="100" rx="90" ry="35" fill="none" stroke="#a855f7" stroke-width="2" stroke-dasharray="4 4"/><ellipse cx="160" cy="100" rx="35" ry="90" fill="none" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 4"/><circle cx="160" cy="100" r="18" fill="#7655cb" fill-opacity="0.25" stroke="#7655cb" stroke-width="2.5"/><circle cx="70" cy="100" r="8" fill="#a855f7"/><circle cx="250" cy="100" r="8" fill="#a855f7"/><circle cx="160" cy="10" r="8" fill="#06b6d4"/><circle cx="160" cy="190" r="8" fill="#06b6d4"/><text x="160" y="104" font-family="'JetBrains Mono'" font-size="9" font-weight="bold" fill="#7655cb" text-anchor="middle">QUBIT</text></svg>`,
  contract: `<svg class="modal-diagram-svg" viewBox="0 0 340 200"><rect x="30" y="35" width="120" height="130" rx="8" fill="#fff" stroke="#64748b" stroke-width="2"/><path d="M50 60 H130 M50 78 H130 M50 96 H110 M50 114 H120" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/><circle cx="120" cy="135" r="14" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="2"/><text x="120" y="139" font-family="'JetBrains Mono'" font-size="11" text-anchor="middle" fill="#d97706">§</text><path d="M165 100 H195" stroke="#10b981" stroke-width="3"/><polygon points="195,100 185,94 185,106" fill="#10b981"/><rect x="205" y="55" width="105" height="90" rx="8" fill="#f0fdf4" stroke="#10b981" stroke-width="2"/><text x="257" y="85" font-family="'JetBrains Mono'" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">JOGI ÉS PÉNZÜGYI</text><text x="257" y="100" font-family="'JetBrains Mono'" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">GARANCIA</text><text x="257" y="125" font-family="'JetBrains Mono'" font-size="8" fill="#166534" text-anchor="middle">Kockázatvédelmi Pajzs</text></svg>`,
  risk: `<svg class="modal-diagram-svg" viewBox="0 0 340 200"><circle cx="80" cy="100" r="45" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/><text x="80" y="95" font-size="18" text-anchor="middle">⚠️</text><text x="80" y="118" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Eltérés / Veszély</text><path d="M135 100 H175" stroke="#64748b" stroke-width="2"/><rect x="185" y="60" width="125" height="80" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="2"/><text x="247" y="88" font-family="'JetBrains Mono'" font-size="9" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Gyökérok (RCA)</text><text x="247" y="106" font-family="'JetBrains Mono'" font-size="8" fill="#475569" text-anchor="middle">➔ Tanulási Ciklus</text><text x="247" y="124" font-family="'JetBrains Mono'" font-size="8" fill="#10b981" font-weight="bold" text-anchor="middle">➔ Megelőző Protokoll</text></svg>`,
  gate: `<svg class="modal-diagram-svg" viewBox="0 0 340 200"><rect x="30" y="60" width="70" height="80" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="2"/><text x="65" y="95" font-family="'JetBrains Mono'" font-size="9" font-weight="bold" fill="#1e293b" text-anchor="middle">K+F Fázis</text><path d="M100 100 H140" stroke="#64748b" stroke-width="2"/><rect x="140" y="45" width="60" height="110" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="3"/><text x="170" y="95" font-family="'JetBrains Mono'" font-size="10" font-weight="bold" fill="#1d7cd8" text-anchor="middle">KAPU</text><text x="170" y="115" font-family="'JetBrains Mono'" font-size="8" fill="#64748b" text-anchor="middle">Go/Kill</text><path d="M200 80 H250" stroke="#10b981" stroke-width="2.5"/><text x="285" y="83" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold" fill="#10b981">Go (Éles)</text><path d="M200 120 H250" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="3 3"/><text x="285" y="123" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold" fill="#ef4444">Kill (Archív)</text></svg>`,
  compliance: `<svg class="modal-diagram-svg" viewBox="0 0 320 200"><circle cx="160" cy="90" r="50" fill="#f0fdf4" stroke="#10b981" stroke-width="3"/><path d="M142 90 L155 103 L180 75" fill="none" stroke="#10b981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="80" y="155" width="160" height="26" rx="6" fill="#1e293b"/><text x="160" y="172" font-family="'JetBrains Mono'" font-size="9.5" font-weight="bold" fill="#fff" text-anchor="middle">AUDITÁLT MEGFELELŐSÉG</text></svg>`,
  sprint: `<svg class="modal-diagram-svg" viewBox="0 0 320 200"><circle cx="160" cy="95" r="55" stroke="#7655cb" stroke-width="2.5" fill="none" stroke-dasharray="5 5"/><rect x="125" y="16" width="70" height="28" rx="5" fill="#7655cb"/><text x="160" y="34" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="10.5" text-anchor="middle">SPRINT</text><rect x="225" y="95" width="75" height="28" rx="5" fill="#7655cb"/><text x="262" y="113" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="10.5" text-anchor="middle">DEMÓ</text><rect x="20" y="95" width="75" height="28" rx="5" fill="#7655cb"/><text x="57" y="113" fill="#fff" font-family="'JetBrains Mono'" font-weight="bold" font-size="10.5" text-anchor="middle">BACKLOG</text><text x="160" y="98" fill="#142033" font-family="'Manrope'" font-size="14" font-weight="bold" text-anchor="middle">2 HÉT</text></svg>`,
  role: `<svg class="modal-diagram-svg" viewBox="0 0 340 200"><circle cx="170" cy="65" r="24" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="170" y="72" font-size="18" text-anchor="middle">👤</text><path d="M170 95 V125 M110 125 H230 M110 125 V145 M230 125 V145" stroke="#64748b" stroke-width="2" fill="none"/><rect x="75" y="145" width="70" height="30" rx="5" fill="#f8fafc" stroke="#94a3b8"/><text x="110" y="164" font-family="'JetBrains Mono'" font-size="8" font-weight="bold" fill="#334155" text-anchor="middle">Kompetencia</text><rect x="195" y="145" width="70" height="30" rx="5" fill="#f8fafc" stroke="#94a3b8"/><text x="230" y="164" font-family="'JetBrains Mono'" font-size="8.5" font-weight="bold" fill="#334155" text-anchor="middle">Felelősség</text><text x="170" y="22" font-family="'JetBrains Mono'" font-size="9" font-weight="bold" fill="#1e293b" text-anchor="middle">SZERVEZETI SZEREP &amp; FELELŐSSÉG</text></svg>`
};

function getToolDetails(key) {
  const k = key.toLowerCase().replace(/—/g, '-').replace(/–/g, '-');

  if (k.includes('wbs')) {
    return { name: "WBS — Munkacsomag-lebontási Struktúra", badge: "Q1 OPERÁCIÓ // LEBONTÁS", desc: "A projekt hierarchikus felbontása önálló munkacsomagokra a 100%-os szabály szerint.", how: "A végtermékből indulunk ki fentről lefelé, delegálható és forintosítható egységekre bontva a munkát.", quote: "„Ha nincs benne a WBS-ben, az jogilag és operatívan nem létezik.”", svg: svgLibrary.wbs };
  }
  if (k.includes('gantt') || k.includes('cpm') || k.includes('kritikus')) {
    return { name: "Gantt-diagram & CPM (Kritikus Út)", badge: "Q1 OPERÁCIÓ // ÜTEMTERVEZÉS", desc: "Idősávos ütemterv függőségi láncokkal, mely azonosítja a tartalékidő nélküli feladatokat.", how: "A kritikus út bármely feladatának csúszása azonnal a teljes projekt átadását tolja.", quote: "„A kritikus út nem ismer toleranciát: a tartalék nélküli csúszás kötbérveszély.”", svg: svgLibrary.gantt };
  }
  if (k.includes('dmaic') || k.includes('six sigma')) {
    return { name: "Six Sigma DMAIC Minőségirányítás", badge: "Q1 OPERÁCIÓ // MINŐSÉG", desc: "Statisztikai minőségirányítás a folyamatingadozások 3,4 DPMO szint alá szorítására.", how: "Define ➔ Measure ➔ Analyze ➔ Improve ➔ Control strukturált fázisok mentén.", quote: "„Csak azt tudod fejleszteni, amit képes vagy pontosan mérni.”", svg: svgLibrary.dmaic };
  }
  if (k.includes('design thinking') || k.includes('diamond') || k.includes('gyémánt') || k.includes('gyemant')) {
    return { name: "Design Thinking — Kettős Gyémánt Modell", badge: "Q3 ADAPTÁCIÓ // INNOVÁCIÓ", desc: "Emberközpontú tervezési keretrendszer a valós felhasználói fájdalompontok feltárására.", how: "Discover ➔ Define (valódi probléma) ➔ Develop ➔ Deliver (validált megoldás).", quote: "„Ne a technológiából indulj ki, hanem az ügyfél valós szenvedéséből!”", svg: svgLibrary.diamond };
  }
  if (k.includes('trl')) {
    return { name: "TRL 1-9 Technológiai Érettségi Szintek", badge: "Q2 INNOVÁCIÓ // K+F KOCKÁZAT", desc: "9 fokozatú skála az alapelvi laborkutatástól (TRL 1) a teljes ipari éles üzemig (TRL 9).", how: "Megakadályozza, hogy éretlen kísérletre gyárépítési büdzsét allokáljunk.", quote: "„Ne építs gyárat egy olyan elméletre, amit még nem igazoltál a laboratóriumban!”", svg: svgLibrary.trl };
  }
  if (k.includes('mvp') || k.includes('lean startup')) {
    return { name: "MVP — Minimum Viable Product", badge: "Q3 ADAPTÁCIÓ // PIACI VALIDÁCIÓ", desc: "A legkisebb működőképes verzió, amivel a valódi piacon igazolható a kereslet.", how: "Build ➔ Measure ➔ Learn gyors visszacsatolási hurok.", quote: "„Ha nem érzed kissé kínosnak az első verziót, túl későn léptél piacra.”", svg: svgLibrary.mvp };
  }
  if (k.includes('vsm') || k.includes('értékáram') || k.includes('ertek')) {
    return { name: "VSM — Value Stream Mapping", badge: "Q3 LEAN // FOLYAMATOPTIMALIZÁLÁS", desc: "Feltérképezi az értéknövelő lépéseket és kizárja a folyamatbeli várakozásokat.", how: "Láthatóvá teszi a valós átfutási idő (Lead Time) és megmunkálási idő arányát.", quote: "„A 30 napos folyamatból az értékteremtés gyakran 4 óra sincs: a többi várakozás.”", svg: svgLibrary.vsm };
  }
  if (k.includes('rpa') || k.includes('szoftverrobot')) {
    return { name: "RPA — Robotic Process Automation", badge: "Q1 OPERÁCIÓ // SZOFTVERROBOTOK", desc: "Szabályalapú szoftverrobotok a rutin emberi adatmozgatás kiváltására 24/7 üzemben.", how: "UI szinten mozgatja az adatokat Excel, levelezés és ERP között hiba nélkül.", quote: "„Ne embereket fizessünk azért, hogy robotként kattintsanak.”", svg: svgLibrary.rpa };
  }
  if (k.includes('ocr') || k.includes('számla') || k.includes('szamla')) {
    return { name: "OCR — Optikai Karakterfelismerés", badge: "Q1 OPERÁCIÓ // AUTOMATIZÁLÁS", desc: "PDF-ek és számlák átalakítása strukturált könyvelési adattá AI ellenőrzéssel.", how: "Azonosítja az IBAN-t, összeget és ÁFÁ-t, és közvetlenül rögzíti az ERP-ben.", quote: "„A manuális számlarögzítés a modern iroda legnagyobb pénzpazarlása.”", svg: svgLibrary.ocr };
  }
  if (k.includes('evm') || k.includes('értékelemzés') || k.includes('ertekelemzes')) {
    return { name: "EVM — Earned Value Management", badge: "Q1 PÉNZÜGY // TELJESÍTMÉNYKONTROLL", desc: "Projektkontroll a tervezett költség (PV), tényleges költés (AC) és kész érték (EV) alapján.", how: "CPI és SPI mutatókkal előrejelzi a végső költségtúllépést és a csúszást.", quote: "„A költés nem azonos az elkészült értékkel: az EVM megmutatja a valóságot.”", svg: svgLibrary.evm };
  }
  if (k.includes('neural') || k.includes('neurális') || k.includes('predikt') || k.includes('llm') || k.includes('deep learning')) {
    return { name: key, badge: "AI & GÉPI TANULÁS", desc: `A(z) „${key}” többváltozós tanuló algoritmus, amely anomáliákat és mintázatokat azonosít.`, how: "Historikus adatokon tanítva becsli meg a jövőbeli kimeneteket és támogatja a döntést.", quote: "„Ahol az emberi logika túl sok változóba ütközik, a neurális háló ad pontos becslést.”", svg: svgLibrary.neural };
  }
  if (k.includes('kvant') || k.includes('agent') || k.includes('ágens') || k.includes('alapkutat') || k.includes('anyagtudomany')) {
    return { name: key, badge: "AUTONÓM KUTATÁSI ARCHITEKTÚRA", desc: `A(z) „${key}” decentralizált modell az ismeretlen összefüggések felderítésére.`, how: "Önálló ágensek szimulálják a lehetőségeket emberi felügyelet melletti autonóm iterációkban.", quote: "„A jövő kutatócsapata önállóan kísérletező digitális ágensekből áll.”", svg: svgLibrary.quantum };
  }
  if (k.includes('szerzod') || k.includes('szerződ') || k.includes('fixed') || k.includes('fix') || k.includes('t&m') || k.includes('sla') || k.includes('sow') || k.includes('jog') || k.includes('ip') || k.includes('sandbox') || k.includes('nda') || k.includes('gdpr') || k.includes('kötbér') || k.includes('kotber') || k.includes('patent') || k.includes('licenc') || k.includes('turnkey')) {
    return { name: key, badge: "JOGI ÉS SZERZŐDÉSES VÉDELEM", desc: `A(z) „${key}” modell a bizonytalansági koordinátához szabja a felelősségmegosztást, elkerülve a későbbi pereskedést.`, how: "A cél és a technológia érettsége alapján rögzítjük a mérföldköveket és garanciákat.", quote: "„Ismert célnál a fix ár véd; ismeretlen ködben a fix ár garantált háború a partnerrel.”", svg: svgLibrary.contract };
  }
  if (k.includes('költség') || k.includes('koltseg') || k.includes('opex') || k.includes('capex') || k.includes('tőke') || k.includes('toke') || k.includes('burn') || k.includes('cac') || k.includes('ltv') || k.includes('egység') || k.includes('egyseg') || k.includes('pénzügy') || k.includes('penzugy') || k.includes('roi') || k.includes('vc') || k.includes('magvető') || k.includes('fajlagos')) {
    return { name: key, badge: "PÉNZÜGYI KONTROLL ÉS ALLOKÁCIÓ", desc: `A(z) „${key}” keretrendszer biztosítja a tőke fegyelmezett, kockázatarányos allokációját.`, how: "Mérési kapuk és egységgazdaságtani mutatók alapján irányítja a forrásokat.", quote: "„Nem naptár szerint költünk: a pénz a validált eredmények arányában nyílik meg.”", svg: svgLibrary.evm };
  }
  if (k.includes('hiba') || k.includes('rca') || k.includes('csapda') || k.includes('dogma') || k.includes('szoktuk') || k.includes('méreg') || k.includes('mereg') || k.includes('overengineering') || k.includes('vakság') || k.includes('vaksag') || k.includes('veszély') || k.includes('veszely') || k.includes('buktató') || k.includes('buktato') || k.includes('zéró') || k.includes('zero') || k.includes('túlmérnökölés')) {
    return { name: key, badge: "KOCKÁZAT ÉS HIBAKULTÚRA", desc: `A(z) „${key}” felismerése megvédi a szervezetet a téves módszertani fojtogatástól.`, how: "Azonosítjuk a szervezeti dogmát, és az adott bizonytalansághoz illeszkedő eljárást vezetünk be.", quote: "„Ami az operációban életmentő fegyelem, az a kutatásban a halálos bénultság oka.”", svg: svgLibrary.risk };
  }
  if (k.includes('kapu') || k.includes('bizottság') || k.includes('bizottsag') || k.includes('döntés') || k.includes('dontes') || k.includes('gate') || k.includes('jóváhagyás') || k.includes('jovahagyas')) {
    return { name: key, badge: "DÖNTÉSI KAPU ÉS KORMÁNYZÁS", desc: `A(z) „${key}” formális ellenőrzési pont a projektek továbbengedésére vagy leállítására (Go/Kill).`, how: "Objektív mérőszámok alapján dönt a folytatásról, megakadályozva a zombi-projektek továbbélést.", quote: "„A bátor Kill döntés a laborban nem bukás, hanem megmentett vállalati vagyon.”", svg: svgLibrary.gate };
  }
  if (k.includes('iso') || k.includes('sop') || k.includes('audit') || k.includes('szabvány') || k.includes('szabvany') || k.includes('minőség') || k.includes('minoseg') || k.includes('fegyelem')) {
    return { name: key, badge: "SZABVÁNY ÉS AUDIT MINŐSÉG", desc: `A(z) „${key}” auditált eljárásrend a hibamentes működés biztosítására.`, how: "Rögzített ellenőrző listák és szabványos működési eljárások (SOP) mentén zajlik a végrehajtás.", quote: "„Írd le, amit csinálsz, és precízen csináld azt, amit leírtál!”", svg: svgLibrary.compliance };
  }
  if (k.includes('sprint') || k.includes('backlog') || k.includes('scrum') || k.includes('standup') || k.includes('retro') || k.includes('spike')) {
    return { name: key, badge: "AGILIS ITERÁCIÓS MŰKÖDÉS", desc: `A(z) „${key}” az empirikus tanulás és a gyors piaci alkalmazkodás ritmusa.`, how: "1-2 hetes fókuszált ciklusok működő terméknövekménnyel és azonnali visszacsatolással.", quote: "„A ködben a terv önámítás: csak a gyors iteráció és a tanulás tart életben.”", svg: svgLibrary.sprint };
  }

  return { name: key, badge: "SZERVEZETI SZEREP &amp; KORMÁNYZÁS", desc: `A(z) „${key}” pontosan meghatározza a munkatársak döntési jogköreit és felelősségét.`, how: "Tiszta felelősségi határokat szab, felhatalmazást adva a feladat bizonytalansága szerint.", quote: "„A vezetés célja nem a mikro-menedzselés, hanem a megfelelő döntési tér biztosítása.”", svg: svgLibrary.role };
}

// 12 DIMENZIÓ ADATAI
const dimensions = [
  {
    id: "modszertan", name: "Módszertan & Folyamat", title: "Módszertan és Problémamegoldási Keretrendszerek",
    desc: "Hogyan strukturáljuk a folyamatokat a feladat és a technológia bizonytalansága szerint?",
    q1: { focus: "Vízesés (Waterfall) & Minőségbiztosítás", desc: "Determinisztikus, fázisolt tervek, nulla eltérés.", tags: ["WBS — Munkacsomag-lebontás", "Gantt & CPM — Kritikus Út", "Six Sigma DMAIC Minőségirányítás", "ISO 9001 / 55001 Szabványrendszerek"] },
    q2: { focus: "Stage-Gate (Szakasz-Kapu) Folyamat", desc: "Mérnöki hipotézisek laboratóriumi ellenőrzése.", tags: ["TRL 1-9 Technológiai Érettség", "FMEA Kockázatelemzés", "DOE Kísérlettervezés", "Digital Twin Virtuális Ikerpár"] },
    q3: { focus: "Lean Diagnosztika & Design Thinking", desc: "Rejtett felhasználói problémák feltárása és MVP tesztelés.", tags: ["Design Thinking — Kettős Gyémánt", "Lean Startup (MVP)", "VSM — Értékáram-Térképezés", "8 Muda Veszteségvadászat", "Pivot — Stratégiai Irányváltás"] },
    q4: { focus: "Agile / Scrum & Kísérleti Kutatás", desc: "Rövid sprintek extrém bizonytalanságban.", tags: ["Kutatási Spikes", "Sprint Backlog", "Daily Standup — Napi Szinkron", "Heti Retrospektív"] }
  },
  {
    id: "ai", name: "AI & Digitális Eszközök", title: "Mesterséges Intelligencia és Automatizáció",
    desc: "Milyen szintű AI technológiát és digitális megoldásokat állítunk hadrendbe?",
    q1: { focus: "RPA & Determinisztikus Automatizáció", desc: "Szabályalapú robotizálás, számlafeldolgozás.", tags: ["RPA — Szoftverrobotizáció", "OCR — Számlafeldolgozás", "Workflow Motorok (BPMN)", "ERP Integráció & Automatizálás"] },
    q2: { focus: "Prediktív Analitika & Digital Twin", desc: "Fizikai rendszerek virtuális leképezése.", tags: ["Prediktív Karbantartás", "Neurális Hálózatok (ML)", "DOE Szimulációs Algoritmusok", "Digital Twin Virtuális Ikerpár"] },
    q3: { focus: "Process Mining & Generatív AI", desc: "Folyamati szűk keresztmetszetek kibányászása.", tags: ["Process Mining — Folyamatbányászat", "LLM Ügyfélelemzés", "A/B Tesztelő Botok", "Gemba Digitális Audit"] },
    q4: { focus: "Autonóm Felfedező Ágensek", desc: "Komplex összefüggések autonóm kutatása.", tags: ["Multi-Agent Rendszerek", "Generatív Anyagtudomány", "Kvantum Számítási Modellek", "Kísérleti Alapkutatási LLM"] }
  },
  {
    id: "hr", name: "Személyiségprofilok & HR", title: "HR Stratégia és Domináns Karakterek",
    desc: "Kik a siker kulcsszereplői és milyen karakterek kellenek?",
    q1: { focus: "A Precíz Végrehajtó (The Executor)", desc: "Szabálykövető, megbízható folyamatgazda alkat.", tags: ["SOP Szabványfelelős", "Minőségbiztosítási Ellenőr", "Operatív Folyamatgazda"] },
    q2: { focus: "A Mély Analitikus / Kutató-Mérnök", desc: "Megszállott szakterületi szakértő.", tags: ["K+F Vezető Kutató", "Adattudós & Matematikus", "Szimulációs Szakmérnök"] },
    q3: { focus: "Az Értékáram-Vadász & Product Owner", desc: "Kiszúrja a pénzpazarlást és hallgatja a piacot.", tags: ["Lean Six Sigma Black Belt", "Product Owner (PO)", "Értékáram Menedzser"] },
    q4: { focus: "A Reziliens Felfedező / Vizionárius", desc: "Magas kudarctűrésű úttörő a ködben.", tags: ["Vállalkozói Alkat (Intrapreneur)", "Scrum Master & Coach", "Inkubációs Igazgató"] }
  },
  {
    id: "attitud", name: "Munkavállalói Attitűd", title: "Munkavállalói Szerep és Belső Motiváció",
    desc: "Hogyan éli meg a munkát a munkavállaló?",
    q1: { focus: "Biztonság, Fegyelem és Kiszámíthatóság", desc: "A stabil rutin megnyugtató védőháló.", tags: ["Kiszámíthatóság", "Fegyelmezett Rutin", "Nulla Váratlan Stressz"] },
    q2: { focus: "Szakmai Büszkeség és Fejtörés", desc: "Az intellektuális kihívás motivál.", tags: ["Mérnöki Elismerés", "Problémamegoldási Flow", "Műszaki Tekintély"] },
    q3: { focus: "Kíváncsiság és Piaci Vadászat", desc: "Kiszúrni a veszteséget és a vevőt.", tags: ["Közvetlen Piaci Visszacsatolás", "Agilitás a Vevőért", "Kísérletezési Kedv"] },
    q4: { focus: "Küldetéstudat és Úttörő Szellem", desc: "Valami teljesen új alkotása.", tags: ["Belső Küldetéstudat", "Radikális Bátorság", "Bajtársiasság a Ködben"] }
  },
  {
    id: "vezetes", name: "Vezetés & Döntéshozatal", title: "Vezetői Stílus és Döntéshozatali Mechanizmus",
    desc: "Hogyan kell irányítani a csapatot?",
    q1: { focus: "Direktív (Utasító) Vezetés", desc: "Szabályzat-alapú és centralizált kontroll.", tags: ["Hierarchikus Jóváhagyás", "Audit Alapú Ellenőrzés", "Utasítás és Kontroll"] },
    q2: { focus: "Konzultatív & Szakmai Mentorálás", desc: "Mérnöki adatok és kapu-felülvizsgálat.", tags: ["Szakmai Döntőbizottság", "Adatalapú Műszaki Vita", "Stage-Gate Kapuőrök"] },
    q3: { focus: "Inspiráló & Kísérlet-Orientált", desc: "Valós piaci és folyamatmérési adat.", tags: ["Adatvezérelt Döntéshozatal", "Pivot Felhatalmazás", "Gemba Séta & Jelenlét"] },
    q4: { focus: "Szolga Vezetés (Servant) & Coaching", desc: "Akadályelhárítás és pszichológiai biztonság.", tags: ["Pszichológiai Biztonság", "Akadályelhárítás (Impediment)", "Teljes Csapatfelhatalmazás"] }
  },
  {
    id: "kultura", name: "Vállalati Kultúra", title: "Vállalati Kultúra és Szervezeti Atmoszféra",
    desc: "Milyen az irodai és üzemi légkör?",
    q1: { focus: "A Fegyelem és Kiválóság Temploma", desc: "Protokollok betartása, svájci óra pontosság.", tags: ["Megbízhatóság", "Szabványok Tisztelete", "Stabilitás"] },
    q2: { focus: "Mérnöki Akadémia & Kutatólabor", desc: "Számítások, modellek és szabadalmak.", tags: ["Akadémiai Precizitás", "Mérnöki Igényesség", "Műszaki Viták"] },
    q3: { focus: "Üzleti Startup & Nyomozóiroda", desc: "Pörgős, tesztekkel teli környezet.", tags: ["Agilitás", "Ügyfélközpontúság", "Tesztelési Láz"] },
    q4: { focus: "Skunk Works & Űrkutató Központ", desc: "Inkubátor légkör mentesen a bürokráciától.", tags: ["Radikális Szabadság", "Bürokráciamentesség", "Kockázatvállalás"] }
  },
  {
    id: "penzugy", name: "Pénzügy & Megtérülés (ROI)", title: "Pénzügy, Kontrolling és Költségtervezés",
    desc: "Hogyan tervezünk büdzsét?",
    q1: { focus: "Fix OPEX & Költségcsökkentés", desc: "Forintra tervezhető működési büdzsé.", tags: ["EVM — Értékelemzés", "OPEX — Működési Költségkeret", "Fajlagos Egységköltség"] },
    q2: { focus: "K+F Alap & Fázisolt CAPEX Keret", desc: "Mérföldkő alapú forrásfelszabadítás.", tags: ["CAPEX — Beruházási Költségkeret", "Stage-Gate Kapubüdzsé", "Szabadalmi Megtérülés"] },
    q3: { focus: "Kísérleti Lean Keret (Lean Budget)", desc: "Kisméretű, gyorsan forgó keret.", tags: ["CAC & LTV — Ügyfélegység-gazdaságtan", "Burn Rate — Tőkeégetési Ütem", "Lean Kísérleti Keret"] },
    q4: { focus: "Kockázati Tőke (VC) Szemlélet", desc: "Tudatos veszteségfinanszírozás a jövőért.", tags: ["VC — Belső Kockázati Tőke", "Magvető Tőkeallokáció", "Tanulási Egységköltség"] }
  },
  {
    id: "szerzodes", name: "Szerződéses Struktúrák", title: "Szerződéses Modellek és Kockázatmegosztás",
    desc: "Milyen jogi formát válasszunk?",
    q1: { focus: "Fix Ár & Kötbérgarancia (Fixed Price / EPC)", desc: "Rögzített terjedelem és ár.", tags: ["Fixed Price — Fix Áras Szerződés", "EPC Turnkey Fővállalkozás", "SLA & Kötbérgarancia"] },
    q2: { focus: "Fázisolt Mérföldkő & IP Megosztás (Stage-Gate)", desc: "Szakaszos finanszírozás kapukkal.", tags: ["Milestone T&M — Fázisolt Elszámolás", "IP Megosztási Szerződés", "K+F Keretmegállapodás"] },
    q3: { focus: "Értékalapú Elszámolás & Gain-Share (Value-Based)", desc: "Megtakarítás-arányos elszámolás.", tags: ["Gain-Share Megtakarítás-arányos", "Rugalmas SOW Munkaleírás", "Értékalapú Sikerdíj"] },
    q4: { focus: "Kapacitásalapú T&M & Kockázati Tőke Modell", desc: "Tiszta idő- és anyagelszámolás.", tags: ["T&M — Time & Materials Elszámolás", "Agile Keretszerződés", "Kockázati Együttműködés"] }
  },
  {
    id: "jog", name: "Jog & Compliance", title: "Jog, Megfelelés és Szabályozási Környezet",
    desc: "Hogyan működik a jogi megfelelés?",
    q1: { focus: "Szigorú Szabálykövetés (Compliance Shield)", desc: "A bírságok nullára szorítása.", tags: ["GDPR & Szabályozói Védelem", "Bírságkizárási Garanciák", "Szerződéses Audit Fegyelem"] },
    q2: { focus: "Szabadalmi Védelem & IP Stratégia", desc: "Szellemi tulajdon és titoktartás.", tags: ["Patent Portfólió — Szabadalmak", "NDA — Titoktartási Megállapodás", "Licencvédelmi Stratégia"] },
    q3: { focus: "Szabályozói Homokozó (Sandbox)", desc: "Kísérleti jogi környezet a tesztelésre.", tags: ["Regulatory Sandbox — Szabályozói Homokozó", "Feltételes Piacralépési Engedély", "Rugalmas Felhasználói ÁSZF"] },
    q4: { focus: "Új Szabályozási Keretek Megteremtése", desc: "A cég alakítja a szabályokat.", tags: ["Precedensteremtő Jogalkotás", "Szabályozási Lobbi", "Úttörő Felelősségbiztosítás"] }
  },
  {
    id: "hibakultura", name: "Hibakultúra & Kockázat", title: "A Hibázás Kultúrája és a Kockázathoz való Viszony",
    desc: "Mit tesz a szervezet hiba esetén?",
    q1: { focus: "ZÉRÓ TOLERANCIA (A hiba veszély)", desc: "A hiba katasztrófa vagy leállás.", tags: ["Nulla Hiba Elv", "RCA — Gyökérok-elemzés", "SOP Fegyelmi Protokoll"] },
    q2: { focus: "KONTROLLÁLT KÍSÉRLETI HIBA", desc: "Laborban kötelező, élesben tilos.", tags: ["Biztonságos Labortesztelés", "Prototípus Terheléses Bukás", "Kockázatmentes Tesztpad"] },
    q3: { focus: "TANULÁSI LEHETŐSÉG (Hiba = Piac)", desc: "A bukás érték és megtakarítás.", tags: ["Olcsó Korai Bukás", "Gyors Tanulási Ciklus", "Vevői Visszajelzés Kezelése"] },
    q4: { focus: "ALAPFELTÉTEL (Ha nincs hiba, nincs kísérlet)", desc: "A 100%-os siker a középszerűség jele.", tags: ["Radikális Kísérletezés", "Kudarc-Ünneplés", "Bátorság a Ködben"] }
  },
  {
    id: "igyszoktuk", name: "„Így szoktuk” Csapdája", title: "A Szervezeti Tehetetlenség és a Megszokás Kardja",
    desc: "Hogyan válik a rutin pusztító méreggé?",
    q1: { focus: "ÉLETMÉNTŐ BIZTONSÁG", desc: "Az „így szoktuk” menti meg az ellátást.", tags: ["Üzembiztonsági Garancia", "Kiszámítható Stabilitás", "Szabványminőség"] },
    q2: { focus: "MÉRNÖKI KORLÁT", desc: "A régi dogmák gátolják az áttörést.", tags: ["Mérnöki Dogmák Lebontása", "Megszokás Falai", "Technológiai Vakság Elkerülése"] },
    q3: { focus: "PIACI VAKFOLT", desc: "Elrejti a vevő valódi igényét.", tags: ["Ügyfélsüketség Megtörése", "Belső Fókusz Felszámolása", "Rejtett Veszteség Feltárása"] },
    q4: { focus: "HALÁLOS MÉREG", desc: "A bürokrácia azonnal megöli a jövőt.", tags: ["Bürokratikus Fojtogatás", "Innovációgyilkosság", "Lassú Halál Elkerülése"] }
  },
  {
    id: "buktatok", name: "Kormányzási Buktatók", title: "Tipikus Döntéshozói Buktatók és Tévedések",
    desc: "A legsúlyosabb menedzsment-tévedések.",
    q1: { focus: "Nosztalgia-Finanszírozás a Hatékonyság Helyett", desc: "Rutinfolyamatok védelme az automatizációval szemben.", tags: ["Elkésett Automatizáció", "Drága Kényelem Felszámolása", "Margó-Erózió Megállítása"] },
    q2: { focus: "Túlbonyolított Műszaki Zsákutca", desc: "Fejlesztés, amire a piacnak nincs szüksége.", tags: ["Túlmérnökölés (Overengineering)", "Polcnak Fejlesztés Kizárása", "Eltévedt K+F Korrekciója"] },
    q3: { focus: "A Kalapács Szindróma (Tech-Push Vakság)", desc: "Szuper eszköz, de nincs valós probléma.", tags: ["Eszköz-Imádat Felszámolása", "Felesleges Funkciók Levágása", "Elmaradt Piacralépés Elkerülése"] },
    q4: { focus: "A Felfedezés Megfojtása Korai ROI-val", desc: "Fix megtérülési terv a ködben induló projekten.", tags: ["Türelmetlen Tőke Csapdája", "Kísérlet-Tiltás Feloldása", "Jövővesztés Megakadályozása"] }
  }
];

let currentDim = 0;
let isIntroMode = false;
let revealedIntroQuadrants = new Set();
const defaultRevealOrder = ['q1', 'q2', 'q3', 'q4'];

let focusedCard = null;
let spotlightCard = null;
const stage = document.getElementById('stage');

const artElements = {
  q1: `<svg viewBox="0 0 120 80" fill="none"><rect x="9" y="18" width="24" height="18" rx="5" fill="currentColor" opacity=".15" stroke="currentColor"/><rect x="48" y="18" width="24" height="18" rx="5" fill="currentColor" opacity=".15" stroke="currentColor"/><rect x="87" y="18" width="24" height="18" rx="5" fill="currentColor" opacity=".15" stroke="currentColor"/><path d="M33 27h15M72 27h15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="21" cy="56" r="8" fill="currentColor" opacity=".15"/><path d="m17.5 56 2.6 2.6 5.1-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M39 56h70" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".45"/></svg>`,
  q2: `<svg viewBox="0 0 120 80" fill="none"><circle cx="21" cy="23" r="7" fill="currentColor" opacity=".16"/><circle cx="57" cy="15" r="6" fill="currentColor" opacity=".24"/><circle cx="95" cy="28" r="8" fill="currentColor" opacity=".16"/><circle cx="77" cy="59" r="7" fill="currentColor" opacity=".28"/><circle cx="31" cy="59" r="6" fill="currentColor" opacity=".13"/><path d="M27 21 51 16m12 2 25 7M91 35 81 52M70 58 37 59M28 53 23 30M63 20 73 52M28 27l42 28" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".65"/><path d="m93 49 7 7 12-15" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  q3: `<svg viewBox="0 0 120 80" fill="none"><circle cx="60" cy="40" r="10" fill="currentColor" opacity=".16"/><circle cx="60" cy="40" r="3.5" fill="currentColor"/><path d="M25 40a35 35 0 0 1 57-27" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="m79 9 5 5-7 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M95 40a35 35 0 0 1-57 27" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="m41 71-5-5 7-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M60 30v10l8 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  q4: `<svg viewBox="0 0 120 80" fill="none"><path d="M12 64c22-22 39-33 55-33 16 0 27 10 41 33" stroke="currentColor" stroke-width="1.8" opacity=".45"/><circle cx="19" cy="20" r="3" fill="currentColor"/><circle cx="38" cy="31" r="4" fill="currentColor" opacity=".7"/><circle cx="61" cy="15" r="3" fill="currentColor" opacity=".55"/><circle cx="82" cy="28" r="4" fill="currentColor" opacity=".8"/><circle cx="103" cy="18" r="3" fill="currentColor"/><path d="m21 22 14 7 23-12 20 9 22-7" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 4" opacity=".65"/><path d="M60 38v26M48 51h24" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".8"/></svg>`
};
Object.entries(artElements).forEach(([q, svg]) => {
  const el = document.getElementById(`art-${q}`);
  if (el) el.innerHTML = svg;
});

function renderTags(tags) {
  return tags.map(tag => {
    const safeTag = tag.replace(/"/g, '&quot;');
    return `<button class="tag" data-tag="${safeTag}">${tag}</button>`;
  }).join('');
}

function renderBottomBar() {
  const bar = document.getElementById('bottomBar');
  if (!bar) return;
  bar.innerHTML = dimensions.map((d, i) => {
    const isActive = !isIntroMode && i === currentDim;
    return `<button class="dim-pill ${isActive ? 'active' : ''}" onclick="selectDim(${i})" title="${i+1}. ${d.name}">
      <span class="dim-pill-idx">${String(i+1).padStart(2,'0')}</span>
      <span class="dim-pill-text">${d.name}</span>
    </button>`;
  }).join('');
}

function render() {
  const body = document.body;
  const actionBtn = document.getElementById('mainActionBtn');
  const introBtn = document.getElementById('introModeBtn');
  const meta = document.getElementById('headerMeta');

  if (isIntroMode) {
    body.classList.add('mode-intro');
    if (introBtn) introBtn.classList.add('active');
    document.getElementById('dimNumber').textContent = "INTRO";
    document.getElementById('dimName').textContent = "A Mátrix Felépítése";
    document.getElementById('dimTitle').textContent = revealedIntroQuadrants.size === 0 ? "A Döntési Koordinátarendszer" : `${revealedIntroQuadrants.size} / 4 Negyed Elnevezve`;
    document.getElementById('dimDesc').textContent = "Kattints a negyedekre az elnevezéshez!";
    if (meta) meta.textContent = `${revealedIntroQuadrants.size} / 4 negyed elnevezve`;
    if (actionBtn) actionBtn.textContent = revealedIntroQuadrants.size < 4 ? `Következő Név (Space) →` : `Részletes Mátrix Indítása ➔`;

    ['q1', 'q2', 'q3', 'q4'].forEach(q => {
      const card = document.getElementById(`card-${q}`);
      if (!card) return;
      if (revealedIntroQuadrants.has(q)) {
        card.classList.remove('intro-unrevealed');
        card.classList.add('intro-revealed');
      } else {
        card.classList.remove('intro-revealed');
        card.classList.add('intro-unrevealed');
      }
    });
  } else {
    body.classList.remove('mode-intro');
    if (introBtn) introBtn.classList.remove('active');
    if (actionBtn) actionBtn.textContent = "Következő Réteg →";

    const d = dimensions[currentDim];
    document.getElementById('dimNumber').textContent = `${String(currentDim + 1).padStart(2, '0')} / ${String(dimensions.length).padStart(2, '0')}`;
    document.getElementById('dimName').textContent = d.name;
    document.getElementById('dimTitle').textContent = d.title;
    document.getElementById('dimDesc').textContent = d.desc;
    if (meta) meta.textContent = `12 dimenziós döntési modell · Kattints bármelyik címkére!`;

    ['q1', 'q2', 'q3', 'q4'].forEach(q => {
      const card = document.getElementById(`card-${q}`);
      if (!card) return;
      card.classList.remove('intro-unrevealed', 'intro-revealed');
      
      const c = d[q];
      const focusEl = document.getElementById(`focus-${q}`);
      const descEl = document.getElementById(`desc-${q}`);
      const tagsEl = document.getElementById(`tags-${q}`);
      
      if (focusEl) focusEl.textContent = c.focus;
      if (descEl) descEl.textContent = c.desc;
      if (tagsEl) tagsEl.innerHTML = renderTags(c.tags || []);
    });
  }
  renderBottomBar();
}

document.addEventListener('click', function(e) {
  const tagBtn = e.target.closest('button.tag');
  if (tagBtn) {
    e.preventDefault();
    e.stopPropagation();
    const tagName = tagBtn.getAttribute('data-tag');
    if (tagName) {
      openToolModalDirect(tagName);
    }
  }
});

function openToolModalDirect(key) {
  const tool = getToolDetails(key);
  document.getElementById('mTitle').textContent = tool.name;
  document.getElementById('mBadge').textContent = tool.badge;
  document.getElementById('mDesc').innerHTML = tool.desc;
  document.getElementById('mHow').innerHTML = tool.how;
  document.getElementById('mQuote').innerHTML = tool.quote;
  document.getElementById('mSvgContainer').innerHTML = tool.svg;
  document.getElementById('toolModal').style.display = 'flex';
}

function closeToolModal(e) {
  if (!e || e.target.id === 'toolModal' || (e.target.classList && e.target.classList.contains('modalclose'))) {
    document.getElementById('toolModal').style.display = 'none';
  }
}

['q1', 'q2', 'q3', 'q4'].forEach(q => {
  const card = document.getElementById(`card-${q}`);
  if (card) {
    card.addEventListener('click', function(e) {
      if (e.target.closest('button')) return;
      if (isIntroMode) { toggleIntroQuadrant(q); return; }
      if (focusedCard === q) closeFocus();
      else if (spotlightCard === q) focusCard(q);
      else toggleSpotlight(q);
    });
  }
});

function toggleIntroQuadrant(q) {
  if (revealedIntroQuadrants.has(q)) revealedIntroQuadrants.delete(q);
  else revealedIntroQuadrants.add(q);
  render();
}

function handlePrimaryAction() {
  if (isIntroMode) {
    const nextToReveal = defaultRevealOrder.find(q => !revealedIntroQuadrants.has(q));
    if (nextToReveal) { revealedIntroQuadrants.add(nextToReveal); render(); }
    else exitIntroToDetail();
  } else {
    nextDim();
  }
}

function toggleIntroMode() {
  isIntroMode = !isIntroMode;
  if (isIntroMode) revealedIntroQuadrants.clear();
  closeFocus();
  clearSpotlight();
  hideLifecycleOverlay();
  render();
}

function exitIntroToDetail() {
  isIntroMode = false;
  currentDim = 0;
  closeFocus();
  clearSpotlight();
  render();
}

function selectDim(i) {
  isIntroMode = false;
  currentDim = i;
  closeFocus();
  clearSpotlight();
  render();
}

function nextDim() { 
  if (isIntroMode) handlePrimaryAction();
  else selectDim((currentDim + 1) % dimensions.length); 
}

function prevDim() { 
  if (!isIntroMode) selectDim((currentDim - 1 + dimensions.length) % dimensions.length); 
}

function toggleSpotlight(q) {
  if (isIntroMode) return;
  if (spotlightCard === q) {
    clearSpotlight();
  } else {
    spotlightCard = q;
    stage.classList.add('spotlight-active');
    document.querySelectorAll('.card').forEach(c => c.classList.remove('is-spotlight'));
    const target = document.getElementById(`card-${q}`);
    if (target) target.classList.add('is-spotlight');
  }
}

function clearSpotlight() {
  spotlightCard = null;
  stage.classList.remove('spotlight-active');
  document.querySelectorAll('.card').forEach(c => c.classList.remove('is-spotlight'));
}

function focusCard(q) {
  if (isIntroMode) return;
  clearSpotlight();
  focusedCard = q;
  stage.classList.add('focus-mode');
  document.querySelectorAll('.card').forEach(c => c.classList.remove('expanded'));
  const target = document.getElementById(`card-${q}`);
  if (target) target.classList.add('expanded');
}

function closeFocus(e) {
  if (e) e.stopPropagation();
  focusedCard = null;
  stage.classList.remove('focus-mode');
  document.querySelectorAll('.card').forEach(c => c.classList.remove('expanded'));
}

const processImages = {
  q1: { src: "process_q1.jpg", kicker: "Q1 FOLYAMATDIORÁMA // WATERFALL", title: "A Vízesés Modell Szekvenciális Lépcsői", copy: "<div class='copybox'><p><strong>Vízesés folyamat:</strong> Determinisztikus építkezés a követelményektől az ellenőrzött átadásig.</p></div>" },
  q2: { src: "process_q2.jpg", kicker: "Q2 FOLYAMATDIORÁMA // STAGE-GATE", title: "K+F Laboratórium és Döntési Kapuk", copy: "<div class='copybox'><p><strong>Stage-Gate modell:</strong> Laboratóriumi kísérletek és szigorú Go/Kill kapuk.</p></div>" },
  q3: { src: "process_q3.jpg", kicker: "Q3 FOLYAMATDIORÁMA // LEAN VSM", title: "Értékáram-Térkép (VSM) és Információáramlás", copy: "<div class='copybox'><p><strong>Lean szemlélet:</strong> Felső információs Kanban szálak és alsó veszteségmentesített értékáram.</p></div>" },
  q4: { src: "process_q4.jpg", kicker: "Q4 FOLYAMATDIORÁMA // AGILE", title: "Autonóm Squadok és 2 Hetes Sprintek", copy: "<div class='copybox'><p><strong>Agilis tanulás:</strong> Iteratív ciklusok és működő terméknövekmény az oszló ködben.</p></div>" }
};

function openProcessModal(e, q) {
  if (e) e.stopPropagation();
  const data = processImages[q];
  if (!data) return;
  document.getElementById('imgModalKicker').textContent = data.kicker;
  document.getElementById('imgModalTitle').textContent = data.title;
  document.getElementById('modalImgDisplay').src = data.src;
  document.getElementById('imgModalCopy').innerHTML = data.copy;
  document.getElementById('imageModal').style.display = 'flex';
}

function closeImageModal(e) {
  if (!e || e.target.id === 'imageModal' || (e.target.classList && e.target.classList.contains('modalclose'))) {
    document.getElementById('imageModal').style.display = 'none';
  }
}

function openTeamsModal() { document.getElementById('teamsModal').style.display = 'flex'; }
function closeTeamsModal(e) {
  if (!e || e.target.id === 'teamsModal' || (e.target.classList && e.target.classList.contains('modalclose'))) {
    document.getElementById('teamsModal').style.display = 'none';
  }
}

function openScriptModal() { document.getElementById('scriptModal').style.display = 'flex'; }
function closeScriptModal(e) {
  if (!e || e.target.id === 'scriptModal' || (e.target.classList && e.target.classList.contains('modalclose'))) {
    document.getElementById('scriptModal').style.display = 'none';
  }
}

let isBlackoutActive = false;
function toggleBlackout() {
  isBlackoutActive = !isBlackoutActive;
  const overlay = document.getElementById('trueBlackoutOverlay');
  const btn = document.getElementById('blackoutBtn');
  if (isBlackoutActive) {
    overlay.style.display = 'flex';
    if (btn) { btn.classList.add('active-warn'); btn.textContent = "☀️ Világosítás (B)"; }
  } else {
    overlay.style.display = 'none';
    if (btn) { btn.classList.remove('active-warn'); btn.textContent = "⬛ Feketítés (B)"; }
  }
}

let isLifecycleActive = false;
function toggleLifecycleOverlay() {
  isLifecycleActive = !isLifecycleActive;
  const overlay = document.getElementById('lifecycleSvgOverlay');
  const btn = document.getElementById('lifecycleBtn');
  if (isLifecycleActive) {
    if (overlay) overlay.style.display = 'block';
    if (btn) btn.classList.add('active-warn');
    clearSpotlight();
    closeFocus();
  } else {
    hideLifecycleOverlay();
  }
}
function hideLifecycleOverlay() {
  isLifecycleActive = false;
  const overlay = document.getElementById('lifecycleSvgOverlay');
  const btn = document.getElementById('lifecycleBtn');
  if (overlay) overlay.style.display = 'none';
  if (btn) btn.classList.remove('active-warn');
}

function toggleFullscreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
  else if (document.exitFullscreen) document.exitFullscreen();
}

window.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'b') { toggleBlackout(); return; }
  if (isBlackoutActive) { toggleBlackout(); return; }
  if (e.key.toLowerCase() === 'l') { toggleLifecycleOverlay(); return; }
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
    if (focusedCard) closeFocus();
    if (spotlightCard) clearSpotlight();
    return;
  }
  if (e.code === 'Space' || e.key === 'Enter') {
    e.preventDefault();
    handlePrimaryAction();
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    nextDim();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    prevDim();
  } else if (['1', '2', '3', '4'].includes(e.key)) {
    if (isIntroMode) toggleIntroQuadrant(`q${e.key}`);
    else toggleSpotlight(`q${e.key}`);
  } else if (e.key.toLowerCase() === 'i') {
    toggleIntroMode();
  } else if (e.key.toLowerCase() === 'f') {
    toggleFullscreen();
  }
});

render();
