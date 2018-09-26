/*
 * js/data.js
 * This is the declaration of vertices data
 */

let points = [
    vec2(-0.923, 0.533),    // A
    vec2(-0.923, -0.566),   // B
    vec2(-0.79, 0.7),       // C
    vec2(-0.79, 0.533),     // D
    vec2(-0.856, 0.466),    // E
    vec2(-0.856, -0.5),     // F
    vec2(-0.59, 0.7),       // G
    vec2(-0.59, 0.533),     // H
    vec2(-0.19, -0.7),      // I
    vec2(-0.123, -0.566),   // J
    vec2(-0.123, -0.633),   // K
    vec2(-0.023, -0.6),     // L
    vec2(0.076, -0.566),    // M
    vec2(0.076, -0.633),    // N
    vec2(0.083, -0.7),      // O
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

// plane01 = ABYX
let plane01 = [
    points[0],
    points[1],
    points[24],
    points[23]
];

// plane02 = EFWV
let plane02 = [
    points[4],
    points[5],
    points[22],
    points[21]
];

// plane JKNM
let plane03 = [
    points[9],
    points[10],
    points[13],
    points[12]
];

// plane ILO
let plane04 = [
    points[8],
    points[11],
    points[14]
];

//plane CDHG
let plane05 = [
    points[2],
    points[3],
    points[7],
    points[6]
];

// plane PRUS
let plane06 = [
    points[15],
    points[17],
    points[20],
    points[18]
];