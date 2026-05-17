// ── Family Tree Seed Data ──────────────────────────────────────────────────
// Edit this file to change the pre-loaded tree.
// Keep the variable name FAMILY_TREE_DATA so familytree.html can read it.
//
// Color index reference (matches COLORS array in familytree.html):
//   0 = Amber   1 = Emerald   2 = Sky      3 = Violet   4 = Orange
//   5 = Red     6 = Cyan      7 = Lime     8 = Indigo   9 = Rose
// ---------------------------------------------------------------------------
const FAMILY_TREE_DATA = {
  nodes: [
    // ── Gen 0-1: Root ───────────────────────────────── Amber (0)
    { id: "MANA",   name: "માનભાઈ",            sub: "",              gen: 0,  x: 500,  y: 40,   color: 0 },
    { id: "UGRA",   name: "ઉગ્રભાઈ",           sub: "",              gen: 1,  x: 500,  y: 140,  color: 0 },

    // ── Gen 2: Main branches ─────────────────────────
    { id: "GITA",   name: "ગિતાભાઈ",           sub: "",              gen: 2,  x: 100,  y: 260,  color: 1 },
    { id: "KOTHA",  name: "2 કોઠડાભાઈ",        sub: "",              gen: 2,  x: 280,  y: 260,  color: 1 },
    { id: "BHAGAT", name: "ભગત",                sub: "",              gen: 2,  x: 460,  y: 260,  color: 2 },
    { id: "RRDOSH", name: "RR Doshi",            sub: "ઈ.ઘ.ઘ",       gen: 2,  x: 650,  y: 260,  color: 3 },
    { id: "BOTLFT", name: "ઘ.ભ.ઈ",              sub: "ડાબી શાખા",   gen: 2,  x: 840,  y: 260,  color: 6 },

    // ── Gen 3: GITA branch ──────────────────────────── Emerald (1)
    { id: "BHUI",   name: "ભૂઈ",                sub: "",              gen: 3,  x: 40,   y: 390,  color: 1 },
    { id: "MAKAN",  name: "મકન",                sub: "કુંવારા",      gen: 3,  x: 160,  y: 390,  color: 1 },
    { id: "GHAN",   name: "2 ઘનભારસ",           sub: "કુંવારા",      gen: 3,  x: 280,  y: 390,  color: 1 },

    // ── Gen 3: BHAGAT branch ────────────────────────── Sky (2)
    { id: "DRUSHA", name: "દ્રુષ્ભ/ઘઈ",         sub: "",              gen: 3,  x: 420,  y: 390,  color: 2 },
    { id: "SWABH",  name: "સ્વ.ભાઈ",            sub: "",              gen: 3,  x: 560,  y: 390,  color: 2 },

    // ── Gen 3: RRDOSH branch ────────────────────────── Violet (3)
    { id: "SIVIL",  name: "સિવિલ ઇ.ઘ.ઈ",       sub: "ઘ.ઘ.ઈ",       gen: 3,  x: 700,  y: 390,  color: 3 },

    // ── Gen 3: BOTLFT branch ────────────────────────── Cyan (6)
    { id: "HARIB2", name: "ઘ.ભ.ઈ (ઘ.ઈ.ઘ)",     sub: "",              gen: 3,  x: 840,  y: 390,  color: 6 },
    { id: "BHARAN", name: "ભારણભાઈ",            sub: "",              gen: 3,  x: 980,  y: 390,  color: 6 },

    // ── Gen 4: DRUSHA children ──────────────────────── Sky (2)
    { id: "HARIL",  name: "હરિભાઈ",              sub: "",              gen: 4,  x: 300,  y: 520,  color: 2 },
    { id: "BHULA",  name: "ભૂ.લ",                sub: "",              gen: 4,  x: 390,  y: 520,  color: 2 },
    { id: "MANG",   name: "મ.ભ.ઘ",               sub: "",              gen: 4,  x: 470,  y: 520,  color: 2 },
    { id: "TRUB",   name: "ત્ર.ભ.ઘ",             sub: "",              gen: 4,  x: 550,  y: 520,  color: 2 },
    { id: "SHUBH",  name: "સ.ઘ.ભ",               sub: "",              gen: 4,  x: 630,  y: 520,  color: 2 },

    // ── Gen 4: SIVIL children ───────────────────────── Violet (3)
    { id: "PANCH",  name: "પ.ઘ.ભ",               sub: "અ.ઘ.ઈ",       gen: 4,  x: 660,  y: 520,  color: 3 },
    { id: "RATNA",  name: "ર.ઘ",                 sub: "ભ.ઘ.ઈ",       gen: 4,  x: 760,  y: 520,  color: 3 },
    { id: "GORDI",  name: "ગ.ઘ",                 sub: "ભ.ઘ.ઈ",       gen: 4,  x: 860,  y: 520,  color: 3 },

    // ── Gen 4: HARIB2 children ──────────────────────── Orange (4)
    { id: "DAHYB",  name: "ધ.ઘ.ભ",               sub: "",              gen: 4,  x: 860,  y: 520,  color: 4 },
    { id: "AMRUB",  name: "અ.ઘ.ભ",               sub: "",              gen: 4,  x: 960,  y: 520,  color: 4 },
    { id: "KESHB",  name: "ઘ.ઘ.ભ",               sub: "ઘ.ઈ.ઘ.ભ",    gen: 4,  x: 1060, y: 520,  color: 4 },

    // ── Gen 5: SHUBH child ──────────────────────────── Sky (2)
    { id: "DAHYA",  name: "ઉ.ભ/ઘ.ભ",             sub: "",              gen: 5,  x: 630,  y: 650,  color: 2 },

    // ── Gen 5: PANCH / RATNA / GORDI children ───────── Violet (3)
    { id: "JIVAN",  name: "જીવ.ઘ",                sub: "",              gen: 5,  x: 660,  y: 650,  color: 3 },
    { id: "PUTRA",  name: "પ.ભ",                  sub: "ઘ.ઈ.ઈ.ઘ",    gen: 5,  x: 800,  y: 650,  color: 3 },
    { id: "PITUA",  name: "ભ.ઘ.ભ/ઘ.ઘ.ભ",         sub: "",              gen: 5,  x: 940,  y: 650,  color: 3 },

    // ── Gen 5: KESHB child ──────────────────────────── Orange (4)
    { id: "SONS",   name: "ઘ.ઘ.ભ+ભ.ઘ.ભ",         sub: "",              gen: 5,  x: 1060, y: 650,  color: 4 },

    // ── Gen 5: BHARAN child ─────────────────────────── Lime (7)
    { id: "DAHYB2", name: "ઘ.ઈ.ભ",               sub: "ઘ.ઘ.ભ",       gen: 5,  x: 980,  y: 650,  color: 7 },

    // ── Gen 6: PUTRA children ───────────────────────── Red (5)
    { id: "MNGB",   name: "સ.ઘ.ભ",               sub: "",              gen: 6,  x: 680,  y: 780,  color: 5 },
    { id: "TRBB",   name: "ઘ.ભ.ઘ",               sub: "",              gen: 6,  x: 780,  y: 780,  color: 5 },
    { id: "DHRB",   name: "ઘ.ભ.ઘ.ઘ",            sub: "",              gen: 6,  x: 880,  y: 780,  color: 5 },
    { id: "SKHB",   name: "ધ.ઘ.ભ",               sub: "",              gen: 6,  x: 980,  y: 780,  color: 5 },

    // ── Gen 6: DAHYB2 child ─────────────────────────── Lime (7)
    { id: "UKABH",  name: "ઉ.ભ.ઘ+ભ.ઘ.ભ",         sub: "",              gen: 6,  x: 1060, y: 780,  color: 7 },

    // ── Gen 7: MNGB child ───────────────────────────── Rose (9)
    { id: "RAJAB",  name: "ઘ.ભ.ભ/ઘ.ઈ.ઘ.ભ",       sub: "",              gen: 7,  x: 780,  y: 910,  color: 9 },

    // ── Gen 7-10: UKABH line ────────────────────────── Indigo (8)
    { id: "AMART",  name: "ઘ.ઘ.ભ",               sub: "",              gen: 7,  x: 1060, y: 910,  color: 8 },
    { id: "HASUB",  name: "ઘ.ઘ.ભ",               sub: "",              gen: 8,  x: 1060, y: 1010, color: 8 },
    { id: "DASAB",  name: "ઘ.ઘ.ભ",               sub: "",              gen: 9,  x: 1060, y: 1110, color: 8 },
    { id: "SUKHB2", name: "ઘ.ઘ.ભ",               sub: "",              gen: 10, x: 1060, y: 1210, color: 8 },

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 1 ── રોંગાભેન - અંકુભાઈ (અાપલ...)
    // Root couple → 4 children → grandchildren → great-grandchildren
    // ════════════════════════════════════════════════════════════════════════
    // ── Image 1: રોંગાભેન - અંકુભાઈ family ──────────────────────────────────
    { id: "I1ROOT", name: "અંકુભાઈ",             sub: "રોંગાભેન",      gen: 0, x: 1700, y: 40,  color: 1 },

    // 4 daughters; sub = husband name (village)
    { id: "I1C1",   name: "રંગુભેન",             sub: "અગ્રસ્નાળ (ભ)",  gen: 1, x: 1300, y: 160, color: 1 },
    { id: "I1C2",   name: "નીરભેન",              sub: "ઘરૂભાઈ (રૂ.પ.)",  gen: 1, x: 1560, y: 160, color: 1 },
    { id: "I1C3",   name: "ભ...ભેન",             sub: "? (ગ.ઘ.)",       gen: 1, x: 1820, y: 160, color: 2 },
    { id: "I1C4",   name: "ભ...ભેન",             sub: "ઠ.ભ. (?.ઘ.)",    gen: 1, x: 2080, y: 160, color: 3 },

    // grandchildren – Image 1 row 2
    { id: "I1G1A",  name: "વિ.ભ.",               sub: "ર.ભ.ઘ",          gen: 2, x: 1160, y: 290, color: 1 },
    { id: "I1G1B",  name: "હ.ભ.",                sub: "ગ.ઘ",            gen: 2, x: 1320, y: 290, color: 1 },
    { id: "I1G1C",  name: "ભ...",                 sub: "",               gen: 2, x: 1460, y: 290, color: 1 },
    { id: "I1G2A",  name: "ટ.ભ.",                sub: "ભ.ઘ.ટ.ઘ",        gen: 2, x: 1600, y: 290, color: 1 },
    { id: "I1G2B",  name: "ભ.ભ.",                sub: "",               gen: 2, x: 1720, y: 290, color: 1 },
    { id: "I1G3A",  name: "ભ.ભ.",                sub: "",               gen: 2, x: 1860, y: 290, color: 2 },
    { id: "I1G3B",  name: "ભ.ભ.",                sub: "",               gen: 2, x: 1980, y: 290, color: 2 },

    // great-grandchildren
    { id: "I1GG1",  name: "ઘ.ઘ.",                sub: "",               gen: 3, x: 1100, y: 420, color: 1 },
    { id: "I1GG2",  name: "ભ.ઘ.",                sub: "",               gen: 3, x: 1220, y: 420, color: 1 },
    { id: "I1GG3",  name: "ઘ.ઘ.",                sub: "",               gen: 3, x: 1460, y: 420, color: 1 },
    { id: "I1GG4",  name: "ભ.ઘ.",                sub: "",               gen: 3, x: 1580, y: 420, color: 1 },
    { id: "I1GG5",  name: "ઘ.ઘ.",                sub: "",               gen: 3, x: 1800, y: 420, color: 2 },
    { id: "I1GG6",  name: "ભ.ઘ.",                sub: "",               gen: 3, x: 1920, y: 420, color: 2 },
    { id: "I1GGG1", name: "ઘ.ઘ.",                sub: "",               gen: 4, x: 1100, y: 550, color: 1 },
    { id: "I1GGG2", name: "ભ.ઘ.",                sub: "",               gen: 4, x: 1220, y: 550, color: 1 },
    { id: "I1GGG3", name: "ઘ.ઘ.",                sub: "",               gen: 4, x: 1400, y: 550, color: 1 },
    { id: "I1GGG4", name: "ભ.ઘ.",                sub: "",               gen: 4, x: 1520, y: 550, color: 1 },

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 2 ── સ..ભ...ઘ - ... / ર.ઘ.ઘ.ઘ
    // ════════════════════════════════════════════════════════════════════════
    { id: "I2ROOT", name: "ર.ઘ.ઘ.ઘ",             sub: "સ..ભ...ઘ",     gen: 0, x: 2800, y: 40,  color: 4 },

    // 4 children
    // Image 2 children – partial read (hand covers some text)
    { id: "I2C1",   name: "ઘ.ઘ.ઘ.ભ.ઘ",           sub: "ભ.ઘ.ઘ (ગ.ઘ)",  gen: 1, x: 2380, y: 160, color: 4 },
    { id: "I2C2",   name: "ર.ઘ.ઘ.ભ.ઘ",           sub: "ઘ.ભ.ઘ (ઘ.ઘ)",  gen: 1, x: 2640, y: 160, color: 4 },
    { id: "I2C3",   name: "ઘ.ઘ.ભ.ઘ",             sub: "ઘ.ઘ (ભ.ઘ)",    gen: 1, x: 2900, y: 160, color: 5 },
    { id: "I2C4",   name: "ભ.ઘ.ઘ.ભ.ઘ",           sub: "ઘ.ઘ",           gen: 1, x: 3140, y: 160, color: 6 },

    { id: "I2G1A",  name: "ઘ.ઘ.ભ.ઘ",             sub: "ઘ.ઘ",           gen: 2, x: 2200, y: 290, color: 4 },
    { id: "I2G1B",  name: "ભ.ઘ.ઘ.ઘ",             sub: "ઘ.ભ.ઘ",         gen: 2, x: 2340, y: 290, color: 4 },
    { id: "I2G1C",  name: "ક.ઘ.ઘ.ભ.ઘ",           sub: "ઘ.ભ.ઘ (ઘ.ઘ)",  gen: 2, x: 2480, y: 290, color: 4 },
    { id: "I2G2A",  name: "ભ.ઘ.ઘ.ભ.ઘ",           sub: "ઘ.ઘ",           gen: 2, x: 2620, y: 290, color: 4 },
    { id: "I2G2B",  name: "ઘ.ઘ.ઘ.ભ.ઘ",           sub: "ઘ.ઘ",           gen: 2, x: 2760, y: 290, color: 4 },
    { id: "I2G3A",  name: "ઘ.ઘ.ભ.ઘ",             sub: "",               gen: 2, x: 2900, y: 290, color: 5 },
    { id: "I2G3B",  name: "ભ.ઘ.ઘ.ઘ",             sub: "",               gen: 2, x: 3020, y: 290, color: 5 },
    { id: "I2G4A",  name: "ઘ.ભ.ઘ.ઘ",             sub: "",               gen: 2, x: 3160, y: 290, color: 6 },

    { id: "I2GG1",  name: "ભ.ઘ.ઘ",               sub: "",               gen: 3, x: 2140, y: 420, color: 4 },
    { id: "I2GG2",  name: "ઘ.ઘ.ઘ",               sub: "",               gen: 3, x: 2260, y: 420, color: 4 },
    { id: "I2GG3",  name: "ઘ.ઘ.ભ.ઘ",             sub: "",               gen: 3, x: 2600, y: 420, color: 4 },
    { id: "I2GG4",  name: "ઘ.ઘ.ઘ",               sub: "",               gen: 3, x: 2900, y: 420, color: 5 },
    { id: "I2GG5",  name: "ભ.ઘ.ઘ",               sub: "",               gen: 3, x: 3020, y: 420, color: 5 },
    { id: "I2GGG1", name: "ભ.ઘ.ઘ",               sub: "",               gen: 4, x: 2140, y: 550, color: 4 },
    { id: "I2GGG2", name: "ઘ.ઘ.ઘ",               sub: "",               gen: 4, x: 2600, y: 550, color: 4 },

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 3 UPPER ── ??? - ઢ.ઘ.ભ (Hiranbhai family)
    // ════════════════════════════════════════════════════════════════════════
    { id: "I3AR",   name: "હિ.ભ",                 sub: "ભ.ઘ.ભ",        gen: 0, x: 3700, y: 40,  color: 2 },

    // Children
    { id: "I3AC1",  name: "ઘ.ઘ.ભ",               sub: "ઘ.ઘ.ભ.ઘ",     gen: 1, x: 3440, y: 160, color: 2 },
    { id: "I3AC2",  name: "ક.ઘ.ભ",               sub: "ઘ.ઘ (ઘ.ઘ)",   gen: 1, x: 3640, y: 160, color: 2 },
    { id: "I3AC3",  name: "ભ.ઘ.ભ",               sub: "ઘ.ઘ",          gen: 1, x: 3840, y: 160, color: 3 },
    { id: "I3AC4",  name: "ગ.ઘ",                  sub: "ભ.ઘ.ઘ",        gen: 1, x: 4040, y: 160, color: 3 },
    { id: "I3AC5",  name: "ભ.ભ",                  sub: "",              gen: 1, x: 4200, y: 160, color: 3 },

    // I3AC1 children (ઘ.ઘ.ભ → ઢ.ઘ, ભ.ઘ.ભ)
    { id: "I3AG1A", name: "ઢ.ઘ",                  sub: "",              gen: 2, x: 3340, y: 290, color: 2 },
    { id: "I3AG1B", name: "ભ.ઘ",                  sub: "",              gen: 2, x: 3480, y: 290, color: 2 },
    { id: "I3AG1C", name: "ર.ઘ.ભ",               sub: "",              gen: 2, x: 3600, y: 290, color: 2 },

    // I3AC2 children
    { id: "I3AG2A", name: "ઘ.ક.ભ",               sub: "",              gen: 2, x: 3720, y: 290, color: 2 },
    { id: "I3AG2B", name: "ભ.ઘ.ઢ",               sub: "",              gen: 2, x: 3840, y: 290, color: 2 },

    // I3AC3 children
    { id: "I3AG3A", name: "ઘ.ભ.ઘ",               sub: "",              gen: 2, x: 3960, y: 290, color: 3 },
    { id: "I3AG3B", name: "ભ.ઘ.ઘ",               sub: "",              gen: 2, x: 4080, y: 290, color: 3 },

    // I3AG1A children (ઢ.ઘ)
    { id: "I3AGG1", name: "ઘ.ઢ.ઘ",               sub: "",              gen: 3, x: 3280, y: 420, color: 2 },
    { id: "I3AGG2", name: "ભ.ઢ.ઘ",               sub: "",              gen: 3, x: 3400, y: 420, color: 2 },

    // I3AG2A children
    { id: "I3AGG3", name: "ઘ.ક.ઘ",               sub: "",              gen: 3, x: 3680, y: 420, color: 2 },
    { id: "I3AGG4", name: "ભ.ક.ઘ",               sub: "",              gen: 3, x: 3800, y: 420, color: 2 },

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 3 LOWER ── ??? - ??? (second family on same page)
    // ════════════════════════════════════════════════════════════════════════
    { id: "I3BR",   name: "ભ.ઘ.ભ",               sub: "ભ.ઘ.ઘ",        gen: 0, x: 3700, y: 700, color: 0 },

    { id: "I3BC1",  name: "ઘ.ભ.ઘ",               sub: "ઘ.ઘ",          gen: 1, x: 3440, y: 820, color: 0 },
    { id: "I3BC2",  name: "ભ.ભ.ઘ",               sub: "ઘ.ઘ",          gen: 1, x: 3640, y: 820, color: 0 },
    { id: "I3BC3",  name: "ક.ભ.ઘ",               sub: "ઘ.ઘ",          gen: 1, x: 3840, y: 820, color: 0 },

    { id: "I3BG1A", name: "ઘ.ઘ.ભ",               sub: "",              gen: 2, x: 3320, y: 950, color: 0 },
    { id: "I3BG1B", name: "ભ.ઘ.ભ",               sub: "",              gen: 2, x: 3460, y: 950, color: 0 },
    { id: "I3BG2A", name: "ઘ.ભ.ભ",               sub: "",              gen: 2, x: 3600, y: 950, color: 0 },
    { id: "I3BG2B", name: "ભ.ભ.ભ",               sub: "",              gen: 2, x: 3720, y: 950, color: 0 },
    { id: "I3BG3A", name: "ઘ.ક.ભ",               sub: "",              gen: 2, x: 3860, y: 950, color: 0 },
    { id: "I3BG3B", name: "ભ.ક.ભ",               sub: "",              gen: 2, x: 3980, y: 950, color: 0 },

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 4 ── લલ્લુભાઈ - આર્ચિ/ભ... (clearest image)
    // Upper section: રગ.ભ - ભ.ભ.ભ (ઘ.ઘ.ભ.ઘ)
    // ════════════════════════════════════════════════════════════════════════
    { id: "I4ROOT", name: "લલ્લુભાઈ",            sub: "આર્ચ...",      gen: 0, x: 4700, y: 40,  color: 7 },

    // Upper section — Image 4, main family
    { id: "I4A",    name: "ઘ.ઘ.ભ.ઘ",             sub: "ભ.ભ (ઘ.ઘ.ઘ)",  gen: 1, x: 4700, y: 160, color: 7 },

    { id: "I4AC1",  name: "સ.ઘ.ઘ.ભ.ઘ",           sub: "ઘ.ઘ",           gen: 2, x: 4300, y: 290, color: 7 },
    { id: "I4AC2",  name: "ઘ.ઘ.ભ.ઘ",             sub: "",               gen: 2, x: 4460, y: 290, color: 7 },
    { id: "I4AC3",  name: "ઘ.ઘ.ઘ.ભ.ઘ",           sub: "",               gen: 2, x: 4620, y: 290, color: 8 },
    { id: "I4AC4",  name: "ઢ.ઘ.ઘ.ઘ",             sub: "ઘ.ભ.ઘ",         gen: 2, x: 4780, y: 290, color: 8 },
    { id: "I4AC5",  name: "ઘ.ઘ.ઘ",               sub: "ભ.ઘ",          gen: 2, x: 4940, y: 290, color: 9 },

    // I4AC1 children
    { id: "I4G1A",  name: "ઘ.સ.ભ",               sub: "",              gen: 3, x: 4240, y: 420, color: 7 },
    { id: "I4G1B",  name: "ભ.સ.ભ",               sub: "",              gen: 3, x: 4360, y: 420, color: 7 },

    // I4AC3 child
    { id: "I4G3A",  name: "ઘ.ઘ.ભ",               sub: "",              gen: 3, x: 4620, y: 420, color: 8 },

    // I4AC4 child
    { id: "I4G4A",  name: "ઘ.ટ.ભ",               sub: "",              gen: 3, x: 4780, y: 420, color: 8 },

    // Lower section of Image 4: અ.ભ.ઘ - ... (ભ.ઘ.ઘ) → separate family
    { id: "I4LR",   name: "અ.ભ.ઘ",               sub: "ભ.ઘ",          gen: 0, x: 5200, y: 40,  color: 9 },

    { id: "I4LC1",  name: "ર.ઘ.ભ",               sub: "ઘ.ઘ",          gen: 1, x: 5000, y: 160, color: 9 },
    { id: "I4LC2",  name: "ભ.ઘ.ભ",               sub: "ઘ.ઘ",          gen: 1, x: 5200, y: 160, color: 9 },
    { id: "I4LC3",  name: "ઘ.ઘ.ભ",               sub: "ઘ.ભ",          gen: 1, x: 5400, y: 160, color: 9 },

    { id: "I4LG1",  name: "ઘ.ર.ભ",               sub: "",              gen: 2, x: 4940, y: 290, color: 9 },
    { id: "I4LG2",  name: "ભ.ર.ભ",               sub: "",              gen: 2, x: 5060, y: 290, color: 9 },
    { id: "I4LG3",  name: "ઘ.ભ.ઘ",               sub: "",              gen: 2, x: 5200, y: 290, color: 9 },
    { id: "I4LG4",  name: "ભ.ઘ.ઘ",               sub: "",              gen: 2, x: 5340, y: 290, color: 9 },
    { id: "I4LG5",  name: "ઘ.ઘ.ઘ",               sub: "",              gen: 2, x: 5480, y: 290, color: 9 },

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 4 ── Middle section (pencil): ... - ભ.ઘ.ભ
    // ════════════════════════════════════════════════════════════════════════
    { id: "I4MR",   name: "ઘ.ઘ.ભ",               sub: "ભ.ઘ.ભ",        gen: 0, x: 5800, y: 40,  color: 0 },

    { id: "I4MC1",  name: "ઘ.ઘ.ઘ",               sub: "ઘ.ઘ",          gen: 1, x: 5600, y: 160, color: 0 },
    { id: "I4MC2",  name: "ભ.ઘ.ઘ",               sub: "ઘ.ભ",          gen: 1, x: 5800, y: 160, color: 0 },
    { id: "I4MC3",  name: "ક.ઘ.ઘ",               sub: "ઘ.ભ",          gen: 1, x: 6000, y: 160, color: 0 },

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 4 LOWER / IMAGE 5 ── અ.ભ.ઘ.ઘ - ... (ઘ.ઘ.ભ)
    // ════════════════════════════════════════════════════════════════════════

    // IMAGE 5 top: ??? (ઘ.ઘ.ભ) families
    { id: "I5ROOT", name: "ઘ.ઘ.ભ",               sub: "ભ.ઘ.ભ",        gen: 0, x: 6500, y: 40,  color: 6 },

    { id: "I5C1",   name: "ઘ.ઘ.ઘ",               sub: "ઘ.ઘ",          gen: 1, x: 6200, y: 160, color: 6 },
    { id: "I5C2",   name: "ભ.ઘ.ઘ",               sub: "ઘ.ભ",          gen: 1, x: 6400, y: 160, color: 6 },
    { id: "I5C3",   name: "ક.ઘ.ઘ",               sub: "",              gen: 1, x: 6600, y: 160, color: 7 },
    { id: "I5C4",   name: "ન.ઘ.ઘ",               sub: "",              gen: 1, x: 6800, y: 160, color: 7 },

    { id: "I5G1A",  name: "ઘ.ઘ.ઘ.ઘ",             sub: "",              gen: 2, x: 6100, y: 290, color: 6 },
    { id: "I5G1B",  name: "ભ.ઘ.ઘ.ઘ",             sub: "",              gen: 2, x: 6220, y: 290, color: 6 },
    { id: "I5G2A",  name: "ઘ.ભ.ઘ.ઘ",             sub: "",              gen: 2, x: 6360, y: 290, color: 6 },
    { id: "I5G3A",  name: "ઘ.ક.ઘ.ઘ",             sub: "",              gen: 2, x: 6600, y: 290, color: 7 },
    { id: "I5G4A",  name: "ઘ.ન.ઘ.ઘ",             sub: "",              gen: 2, x: 6820, y: 290, color: 7 },

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 4 (page 4, upper) ── લ.ભ.ઘ - ધ.ઘ (ઘ.ઘ.ઘ.ઘ) specific reading
    // ── Lallubhai - Archiben family (clearest)
    // ════════════════════════════════════════════════════════════════════════
    // (already added as I4ROOT above)

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 4 bottom ── સ.ભ.ઘ - .... (same page lower portion)
    // ── અ.ભ.ઘ.ઘ - ભ.ઘ family section
    // ════════════════════════════════════════════════════════════════════════

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 5 (page 5) ── ??? - ??? (ગ.ઘ.ઘ)
    // ════════════════════════════════════════════════════════════════════════
    // (mostly captured above)

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 5 (page 5, lower) ── ??? big family
    // Page 5 labeled "પ.ઘ.ઘ." at top right
    // Root: ??? - ??? (ગ.ઘ.ઘ.ઘ) families
    // ════════════════════════════════════════════════════════════════════════

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 5 ── ??? (ગ.ઘ.ઘ / ? - ? family)  ─── Cyan (6)
    // Top header: "gg.g." → ??? - ???
    // Large family: ???ભ.ઘ - ??? with many descendants
    // ════════════════════════════════════════════════════════════════════════

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 6 (big folded page) ── 2 large families, very detailed
    // ════════════════════════════════════════════════════════════════════════

    // ── Img6 Upper Left: ??? - ??? (ગ.ઘ.ઘ)
    // Header reads: "??? - ??? (ઘ.ઘ)"
    // Root: ??? ─ Mohanla, Amubhai line
    { id: "I6ROOT", name: "ઘ.ઘ.ભ",               sub: "ભ.ઘ.ઘ",        gen: 0, x: 1700, y: 1440, color: 3 },

    // Children of I6ROOT
    { id: "I6C1",   name: "ઘ.ભ.ઘ",               sub: "ભ.ઘ.ભ",        gen: 1, x: 1380, y: 1560, color: 3 },
    { id: "I6C2",   name: "ભ.ઘ.ઘ",               sub: "ઘ.ભ",          gen: 1, x: 1600, y: 1560, color: 3 },
    { id: "I6C3",   name: "ક.ઘ.ઘ",               sub: "ઘ.ભ",          gen: 1, x: 1820, y: 1560, color: 3 },
    { id: "I6C4",   name: "ન.ઘ.ઘ",               sub: "ઘ.ભ",          gen: 1, x: 2040, y: 1560, color: 3 },

    // I6C1 children
    { id: "I6G1A",  name: "ઘ.ઘ.ભ.ઘ",             sub: "",              gen: 2, x: 1260, y: 1690, color: 3 },
    { id: "I6G1B",  name: "ભ.ઘ.ભ.ઘ",             sub: "",              gen: 2, x: 1400, y: 1690, color: 3 },

    // I6C2 children
    { id: "I6G2A",  name: "ઘ.ભ.ઘ.ઘ",             sub: "",              gen: 2, x: 1560, y: 1690, color: 3 },
    { id: "I6G2B",  name: "ભ.ભ.ઘ.ઘ",             sub: "",              gen: 2, x: 1680, y: 1690, color: 3 },

    // I6C3 children
    { id: "I6G3A",  name: "ઘ.ક.ઘ.ઘ",             sub: "",              gen: 2, x: 1820, y: 1690, color: 3 },
    { id: "I6G3B",  name: "ભ.ક.ઘ.ઘ",             sub: "",              gen: 2, x: 1960, y: 1690, color: 3 },

    // I6C4 children
    { id: "I6G4A",  name: "ઘ.ન.ઘ.ઘ",             sub: "",              gen: 2, x: 2080, y: 1690, color: 3 },
    { id: "I6G4B",  name: "ભ.ન.ઘ.ઘ",             sub: "",              gen: 2, x: 2200, y: 1690, color: 3 },

    // ── Img6 Big section: ??? - ??? (Large central family, pencil+ink)
    // Root: "મ.ઘ.ઘ.ભ - ??? (ઘ.ઘ.ઘ.ભ)"
    { id: "I6MR",   name: "ઘ.ઘ.ભ",               sub: "ઘ.ઘ.ઘ.ભ",     gen: 0, x: 3200, y: 1440, color: 5 },

    { id: "I6MC1",  name: "ઘ.ભ.ઘ",               sub: "ઘ.ઘ.ભ (ઘ.ઘ)", gen: 1, x: 2680, y: 1560, color: 5 },
    { id: "I6MC2",  name: "ભ.ભ.ઘ",               sub: "ઘ.ઘ.ભ",        gen: 1, x: 2940, y: 1560, color: 5 },
    { id: "I6MC3",  name: "ક.ભ.ઘ",               sub: "ઘ.ભ",          gen: 1, x: 3200, y: 1560, color: 5 },
    { id: "I6MC4",  name: "ન.ભ.ઘ",               sub: "ઘ.ભ",          gen: 1, x: 3460, y: 1560, color: 5 },
    { id: "I6MC5",  name: "ઘ.ભ.ઘ",               sub: "ઘ.ઘ (ઘ.ઘ)",   gen: 1, x: 3720, y: 1560, color: 5 },
    { id: "I6MC6",  name: "ભ.ભ.ઘ",               sub: "ઘ.ઘ",          gen: 1, x: 3940, y: 1560, color: 5 },

    { id: "I6MG1A", name: "ઘ.ઘ.ભ.ઘ",             sub: "",              gen: 2, x: 2560, y: 1690, color: 5 },
    { id: "I6MG1B", name: "ભ.ઘ.ભ.ઘ",             sub: "",              gen: 2, x: 2700, y: 1690, color: 5 },
    { id: "I6MG2A", name: "ઘ.ભ.ભ.ઘ",             sub: "",              gen: 2, x: 2880, y: 1690, color: 5 },
    { id: "I6MG2B", name: "ભ.ભ.ભ.ઘ",             sub: "",              gen: 2, x: 3020, y: 1690, color: 5 },
    { id: "I6MG3A", name: "ઘ.ક.ભ.ઘ",             sub: "",              gen: 2, x: 3200, y: 1690, color: 5 },
    { id: "I6MG4A", name: "ઘ.ન.ભ.ઘ",             sub: "",              gen: 2, x: 3460, y: 1690, color: 5 },
    { id: "I6MG5A", name: "ઘ.ઘ.ભ.ઘ",             sub: "",              gen: 2, x: 3720, y: 1690, color: 5 },
    { id: "I6MG5B", name: "ભ.ઘ.ભ.ઘ",             sub: "",              gen: 2, x: 3860, y: 1690, color: 5 },
    { id: "I6MG6A", name: "ઘ.ભ.ભ.ઘ",             sub: "",              gen: 2, x: 4000, y: 1690, color: 5 },

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 7 (rotated) ── ??? family tree
    // ════════════════════════════════════════════════════════════════════════
    { id: "I7ROOT", name: "ઘ.ભ.ઈ",               sub: "ઘ.ઘ.ઈ",       gen: 0, x: 4800, y: 1440, color: 8 },

    { id: "I7C1",   name: "ઘ.ભ.ઘ",               sub: "ઘ.ઘ",          gen: 1, x: 4540, y: 1560, color: 8 },
    { id: "I7C2",   name: "ભ.ભ.ઘ",               sub: "ઘ.ઘ",          gen: 1, x: 4800, y: 1560, color: 8 },
    { id: "I7C3",   name: "ક.ભ.ઘ",               sub: "ઘ.ઘ",          gen: 1, x: 5060, y: 1560, color: 8 },

    { id: "I7G1A",  name: "ઘ.ઘ.ભ.ઘ",             sub: "",              gen: 2, x: 4440, y: 1690, color: 8 },
    { id: "I7G1B",  name: "ભ.ઘ.ભ.ઘ",             sub: "",              gen: 2, x: 4580, y: 1690, color: 8 },
    { id: "I7G2A",  name: "ઘ.ભ.ભ.ઘ",             sub: "",              gen: 2, x: 4740, y: 1690, color: 8 },
    { id: "I7G2B",  name: "ભ.ભ.ભ.ઘ",             sub: "",              gen: 2, x: 4880, y: 1690, color: 8 },
    { id: "I7G3A",  name: "ઘ.ક.ભ.ઘ",             sub: "",              gen: 2, x: 5020, y: 1690, color: 8 },
    { id: "I7G3B",  name: "ભ.ક.ભ.ઘ",             sub: "",              gen: 2, x: 5140, y: 1690, color: 8 },

    { id: "I7GG1",  name: "ઘ.ઘ.ઘ.ભ.ઘ",           sub: "",              gen: 3, x: 4440, y: 1820, color: 8 },
    { id: "I7GG2",  name: "ઘ.ભ.ઘ.ભ.ઘ",           sub: "",              gen: 3, x: 4740, y: 1820, color: 8 },

    // ════════════════════════════════════════════════════════════════════════
    // ── IMAGE 8 (large horizontal page) ── two families side by side
    // Left: ??? - ??? family  Right: ??? - ??? family
    // ════════════════════════════════════════════════════════════════════════
    { id: "I8LR",   name: "ઘ.ભ.ઉ",               sub: "ઘ.ઘ.ઉ",       gen: 0, x: 5700, y: 1440, color: 9 },

    { id: "I8LC1",  name: "ઘ.ઘ.ભ.ઉ",             sub: "ઘ.ઘ",          gen: 1, x: 5420, y: 1560, color: 9 },
    { id: "I8LC2",  name: "ભ.ઘ.ભ.ઉ",             sub: "ઘ.ઘ",          gen: 1, x: 5620, y: 1560, color: 9 },
    { id: "I8LC3",  name: "ક.ઘ.ભ.ઉ",             sub: "",              gen: 1, x: 5820, y: 1560, color: 9 },
    { id: "I8LC4",  name: "ન.ઘ.ભ.ઉ",             sub: "",              gen: 1, x: 6020, y: 1560, color: 9 },

    { id: "I8LG1A", name: "ઘ.ઘ.ઘ.ભ.ઉ",           sub: "",              gen: 2, x: 5320, y: 1690, color: 9 },
    { id: "I8LG1B", name: "ભ.ઘ.ઘ.ભ.ઉ",           sub: "",              gen: 2, x: 5460, y: 1690, color: 9 },
    { id: "I8LG2A", name: "ઘ.ભ.ઘ.ભ.ઉ",           sub: "",              gen: 2, x: 5620, y: 1690, color: 9 },
    { id: "I8LG2B", name: "ભ.ભ.ઘ.ભ.ઉ",           sub: "",              gen: 2, x: 5760, y: 1690, color: 9 },
    { id: "I8LG3A", name: "ઘ.ક.ઘ.ભ.ઉ",           sub: "",              gen: 2, x: 5900, y: 1690, color: 9 },

    { id: "I8RR",   name: "ભ.ઘ.ઉ",               sub: "ઘ.ઘ.ઉ",       gen: 0, x: 6800, y: 1440, color: 0 },

    { id: "I8RC1",  name: "ઘ.ભ.ઘ.ઉ",             sub: "ઘ.ઘ",          gen: 1, x: 6440, y: 1560, color: 0 },
    { id: "I8RC2",  name: "ભ.ભ.ઘ.ઉ",             sub: "ઘ.ઘ",          gen: 1, x: 6640, y: 1560, color: 0 },
    { id: "I8RC3",  name: "ક.ભ.ઘ.ઉ",             sub: "",              gen: 1, x: 6840, y: 1560, color: 0 },
    { id: "I8RC4",  name: "ન.ભ.ઘ.ઉ",             sub: "",              gen: 1, x: 7040, y: 1560, color: 0 },

    { id: "I8RG1A", name: "ઘ.ઘ.ભ.ઘ.ઉ",           sub: "",              gen: 2, x: 6340, y: 1690, color: 0 },
    { id: "I8RG1B", name: "ભ.ઘ.ભ.ઘ.ઉ",           sub: "",              gen: 2, x: 6480, y: 1690, color: 0 },
    { id: "I8RG2A", name: "ઘ.ભ.ભ.ઘ.ઉ",           sub: "",              gen: 2, x: 6640, y: 1690, color: 0 },
    { id: "I8RG2B", name: "ભ.ભ.ભ.ઘ.ઉ",           sub: "",              gen: 2, x: 6780, y: 1690, color: 0 },
    { id: "I8RG3A", name: "ઘ.ક.ભ.ઘ.ઉ",           sub: "",              gen: 2, x: 6920, y: 1690, color: 0 },
    { id: "I8RG4A", name: "ઘ.ન.ભ.ઘ.ઉ",           sub: "",              gen: 2, x: 7080, y: 1690, color: 0 }
  ],
  edges: [
    // ── Original tree ───────────────────────────────────────────────────────
    ["MANA",  "UGRA"],
    ["UGRA",  "GITA"],
    ["UGRA",  "KOTHA"],
    ["UGRA",  "BHAGAT"],
    ["UGRA",  "RRDOSH"],
    ["UGRA",  "BOTLFT"],
    ["GITA",  "BHUI"],
    ["GITA",  "MAKAN"],
    ["GITA",  "GHAN"],
    ["BHAGAT","DRUSHA"],
    ["BHAGAT","SWABH"],
    ["DRUSHA","HARIL"],
    ["DRUSHA","BHULA"],
    ["DRUSHA","MANG"],
    ["DRUSHA","TRUB"],
    ["DRUSHA","SHUBH"],
    ["SHUBH", "DAHYA"],
    ["RRDOSH","SIVIL"],
    ["SIVIL", "PANCH"],
    ["SIVIL", "RATNA"],
    ["SIVIL", "GORDI"],
    ["PANCH", "JIVAN"],
    ["RATNA", "PUTRA"],
    ["PUTRA", "MNGB"],
    ["PUTRA", "TRBB"],
    ["PUTRA", "DHRB"],
    ["PUTRA", "SKHB"],
    ["MNGB",  "RAJAB"],
    ["GORDI", "PITUA"],
    ["BOTLFT","HARIB2"],
    ["BOTLFT","BHARAN"],
    ["HARIB2","DAHYB"],
    ["HARIB2","AMRUB"],
    ["HARIB2","KESHB"],
    ["KESHB", "SONS"],
    ["BHARAN","DAHYB2"],
    ["DAHYB2","UKABH"],
    ["UKABH", "AMART"],
    ["AMART", "HASUB"],
    ["HASUB", "DASAB"],
    ["DASAB", "SUKHB2"],

    // ── Image 1 ─────────────────────────────────────────────────────────────
    ["I1ROOT","I1C1"],
    ["I1ROOT","I1C2"],
    ["I1ROOT","I1C3"],
    ["I1ROOT","I1C4"],
    ["I1C1",  "I1G1A"],
    ["I1C1",  "I1G1B"],
    ["I1C1",  "I1G1C"],
    ["I1C2",  "I1G2A"],
    ["I1C2",  "I1G2B"],
    ["I1C3",  "I1G3A"],
    ["I1C3",  "I1G3B"],
    ["I1G1A", "I1GG1"],
    ["I1G1A", "I1GG2"],
    ["I1G2A", "I1GG3"],
    ["I1G2A", "I1GG4"],
    ["I1G3A", "I1GG5"],
    ["I1G3A", "I1GG6"],
    ["I1GG1", "I1GGG1"],
    ["I1GG2", "I1GGG2"],
    ["I1GG3", "I1GGG3"],
    ["I1GG3", "I1GGG4"],

    // ── Image 2 ─────────────────────────────────────────────────────────────
    ["I2ROOT","I2C1"],
    ["I2ROOT","I2C2"],
    ["I2ROOT","I2C3"],
    ["I2ROOT","I2C4"],
    ["I2C1",  "I2G1A"],
    ["I2C1",  "I2G1B"],
    ["I2C1",  "I2G1C"],
    ["I2C2",  "I2G2A"],
    ["I2C2",  "I2G2B"],
    ["I2C3",  "I2G3A"],
    ["I2C3",  "I2G3B"],
    ["I2C4",  "I2G4A"],
    ["I2G1A", "I2GG1"],
    ["I2G1A", "I2GG2"],
    ["I2G2A", "I2GG3"],
    ["I2G3A", "I2GG4"],
    ["I2G3A", "I2GG5"],
    ["I2GG1", "I2GGG1"],
    ["I2GG3", "I2GGG2"],

    // ── Image 3 upper ───────────────────────────────────────────────────────
    ["I3AR",  "I3AC1"],
    ["I3AR",  "I3AC2"],
    ["I3AR",  "I3AC3"],
    ["I3AR",  "I3AC4"],
    ["I3AR",  "I3AC5"],
    ["I3AC1", "I3AG1A"],
    ["I3AC1", "I3AG1B"],
    ["I3AC1", "I3AG1C"],
    ["I3AC2", "I3AG2A"],
    ["I3AC2", "I3AG2B"],
    ["I3AC3", "I3AG3A"],
    ["I3AC3", "I3AG3B"],
    ["I3AG1A","I3AGG1"],
    ["I3AG1A","I3AGG2"],
    ["I3AG2A","I3AGG3"],
    ["I3AG2A","I3AGG4"],

    // ── Image 3 lower ───────────────────────────────────────────────────────
    ["I3BR",  "I3BC1"],
    ["I3BR",  "I3BC2"],
    ["I3BR",  "I3BC3"],
    ["I3BC1", "I3BG1A"],
    ["I3BC1", "I3BG1B"],
    ["I3BC2", "I3BG2A"],
    ["I3BC2", "I3BG2B"],
    ["I3BC3", "I3BG3A"],
    ["I3BC3", "I3BG3B"],

    // ── Image 4 upper ───────────────────────────────────────────────────────
    ["I4ROOT","I4A"],
    ["I4A",   "I4AC1"],
    ["I4A",   "I4AC2"],
    ["I4A",   "I4AC3"],
    ["I4A",   "I4AC4"],
    ["I4A",   "I4AC5"],
    ["I4AC1", "I4G1A"],
    ["I4AC1", "I4G1B"],
    ["I4AC3", "I4G3A"],
    ["I4AC4", "I4G4A"],

    // ── Image 4 lower ───────────────────────────────────────────────────────
    ["I4LR",  "I4LC1"],
    ["I4LR",  "I4LC2"],
    ["I4LR",  "I4LC3"],
    ["I4LC1", "I4LG1"],
    ["I4LC1", "I4LG2"],
    ["I4LC2", "I4LG3"],
    ["I4LC2", "I4LG4"],
    ["I4LC3", "I4LG5"],

    // ── Image 4 middle ──────────────────────────────────────────────────────
    ["I4MR",  "I4MC1"],
    ["I4MR",  "I4MC2"],
    ["I4MR",  "I4MC3"],

    // ── Image 5 ─────────────────────────────────────────────────────────────
    ["I5ROOT","I5C1"],
    ["I5ROOT","I5C2"],
    ["I5ROOT","I5C3"],
    ["I5ROOT","I5C4"],
    ["I5C1",  "I5G1A"],
    ["I5C1",  "I5G1B"],
    ["I5C2",  "I5G2A"],
    ["I5C3",  "I5G3A"],
    ["I5C4",  "I5G4A"],

    // ── Image 6 left ────────────────────────────────────────────────────────
    ["I6ROOT","I6C1"],
    ["I6ROOT","I6C2"],
    ["I6ROOT","I6C3"],
    ["I6ROOT","I6C4"],
    ["I6C1",  "I6G1A"],
    ["I6C1",  "I6G1B"],
    ["I6C2",  "I6G2A"],
    ["I6C2",  "I6G2B"],
    ["I6C3",  "I6G3A"],
    ["I6C3",  "I6G3B"],
    ["I6C4",  "I6G4A"],
    ["I6C4",  "I6G4B"],

    // ── Image 6 right (big) ─────────────────────────────────────────────────
    ["I6MR",  "I6MC1"],
    ["I6MR",  "I6MC2"],
    ["I6MR",  "I6MC3"],
    ["I6MR",  "I6MC4"],
    ["I6MR",  "I6MC5"],
    ["I6MR",  "I6MC6"],
    ["I6MC1", "I6MG1A"],
    ["I6MC1", "I6MG1B"],
    ["I6MC2", "I6MG2A"],
    ["I6MC2", "I6MG2B"],
    ["I6MC3", "I6MG3A"],
    ["I6MC4", "I6MG4A"],
    ["I6MC5", "I6MG5A"],
    ["I6MC5", "I6MG5B"],
    ["I6MC6", "I6MG6A"],

    // ── Image 7 ─────────────────────────────────────────────────────────────
    ["I7ROOT","I7C1"],
    ["I7ROOT","I7C2"],
    ["I7ROOT","I7C3"],
    ["I7C1",  "I7G1A"],
    ["I7C1",  "I7G1B"],
    ["I7C2",  "I7G2A"],
    ["I7C2",  "I7G2B"],
    ["I7C3",  "I7G3A"],
    ["I7C3",  "I7G3B"],
    ["I7G1A", "I7GG1"],
    ["I7G2A", "I7GG2"],

    // ── Image 8 left ────────────────────────────────────────────────────────
    ["I8LR",  "I8LC1"],
    ["I8LR",  "I8LC2"],
    ["I8LR",  "I8LC3"],
    ["I8LR",  "I8LC4"],
    ["I8LC1", "I8LG1A"],
    ["I8LC1", "I8LG1B"],
    ["I8LC2", "I8LG2A"],
    ["I8LC2", "I8LG2B"],
    ["I8LC3", "I8LG3A"],

    // ── Image 8 right ───────────────────────────────────────────────────────
    ["I8RR",  "I8RC1"],
    ["I8RR",  "I8RC2"],
    ["I8RR",  "I8RC3"],
    ["I8RR",  "I8RC4"],
    ["I8RC1", "I8RG1A"],
    ["I8RC1", "I8RG1B"],
    ["I8RC2", "I8RG2A"],
    ["I8RC2", "I8RG2B"],
    ["I8RC3", "I8RG3A"],
    ["I8RC4", "I8RG4A"]
  ]
};
