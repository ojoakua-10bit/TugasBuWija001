/*
 * js/main.js
 * This is the main logic of the WebGL program.
 */

let gl;

window.onload = function () {
    let ctx = document.getElementById("main-canvas");
    gl = WebGLUtils.setupWebGL(ctx);
    if (!gl) alert("Your browser doesn't support canvas!");

    // Configure WebGL
    gl.viewport(0, 0, ctx.width, ctx.height);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.enable(gl.DEPTH_TEST);

    // Load shaders and initialize attribute
    let program01 = initShaders(gl, "vShader01", "fShader01");
    gl.useProgram(program01);

    // Load the data into GPU
    let buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, 16*26, gl.STATIC_DRAW);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(plane01));
    gl.bufferSubData(gl.ARRAY_BUFFER, 8*4, flatten(plane02));
    gl.bufferSubData(gl.ARRAY_BUFFER, 8*8, flatten(plane03));
    gl.bufferSubData(gl.ARRAY_BUFFER, 8*12, flatten(plane04));
    gl.bufferSubData(gl.ARRAY_BUFFER, 8*15, flatten(plane05));
    gl.bufferSubData(gl.ARRAY_BUFFER, 8*19, flatten(plane06));

    // Associate out shader variables with our data buffers
    let vLoc1 = gl.getAttribLocation(program01, "vLoc1");
    gl.vertexAttribPointer(vLoc1, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vLoc1);

    // Render at least 60 FPS
    setTimeout(function render() {
        requestAnimFrame(render);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.LINE_LOOP, 0, 4);
        gl.drawArrays(gl.LINE_LOOP, 4, 4);
        gl.drawArrays(gl.LINE_LOOP, 8, 4);
        gl.drawArrays(gl.LINE_LOOP, 12, 3);
        gl.drawArrays(gl.LINE_LOOP, 15, 4);
        gl.drawArrays(gl.LINE_LOOP, 19, 4);
    }, 16.6667)
};