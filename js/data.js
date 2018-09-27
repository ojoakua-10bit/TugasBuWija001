/*
 * js/data.js
 * This is the declaration of vertices data
 */

const colors = {};
colors.WHITE = vec4(1.0, 1.0, 1.0, 1.0);
colors.BLACK = vec4(0.0, 0.0, 0.0, 1.0);
colors.GRAY = vec4(0.3, 0.3, 0.3, 1.0);
colors.RED = vec4(1.0, 0.0, 0.0, 1.0);
colors.GREEN = vec4(0.0, 1.0, 0.0, 1.0);
colors.BLUE = vec4(0.0, 0.0, 1.0, 1.0);
colors.YELLOW = vec4(1.0, 1.0, 0.0, 1.0);
colors.CYAN = vec4(0.0, 1.0, 1.0, 1.0);
colors.MAGENTA = vec4(1.0, 0.0, 1.0, 1.0);

let points = [
    vec2(-0.923, 0.533),    // A
    vec2(-0.923, -0.566),   // B
    vec2(-0.79, 0.7),       // C
    vec2(-0.79, 0.533),     // D
    vec2(-0.856, 0.466),    // E
    vec2(-0.856, -0.5),     // F
    vec2(-0.59, 0.7),       // G
    vec2(-0.59, 0.533),     // H
    vec2(-0.256, -0.7),     // I
    vec2(-0.123, -0.566),   // J
    vec2(-0.123, -0.666),   // K
    vec2(-0.023, -0.6),     // L
    vec2(0.076, -0.566),    // M
    vec2(0.076, -0.666),    // N
    vec2(0.21, -0.7),       // O
    vec2(0.543, 0.633),     // P
    vec2(0.543, 0.533),     // Q
    vec2(0.543, 0.486),     // R
    vec2(0.843, 0.633),     // S
    vec2(0.843, 0.533),     // T
    vec2(0.843, 0.486),     // U
    vec2(0.81, 0.466),      // V
    vec2(0.81, -0.5),       // W
    vec2(0.876, 0.533),     // X
    vec2(0.876, -0.566),    // Y
    vec2(-0.023, -0.016)    // Z
];

let plane = [];
let color = [];

// plane01 = ABYX
plane[0] = [
    points[0],
    points[1],
    points[24],
    points[23]
];
color[0] = colors.BLACK;

// plane02 = EFWV
plane[1] = [
    points[4],
    points[5],
    points[22],
    points[21]
];
color[1] = colors.GRAY;

// plane JKNM
plane[2] = [
    points[9],
    points[10],
    points[13],
    points[12]
];
color[2] = colors.BLACK;

// plane ILO
plane[3] = [
    points[8],
    points[11],
    points[14]
];
color[3] = colors.BLACK;

//plane CDHG
plane[4] = [
    points[2],
    points[3],
    points[7],
    points[6]
];
color[4] = colors.WHITE;

// plane PRUS
plane[5] = [
    points[15],
    points[17],
    points[20],
    points[18]
];
color[5] = colors.WHITE;