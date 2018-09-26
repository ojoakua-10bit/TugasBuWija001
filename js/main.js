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
    gl.bufferData(gl.ARRAY_BUFFER, flatten(plane01), gl.STATIC_DRAW);

    // Associate out shader variables with our data buffers
    let vLoc1 = gl.getAttribLocation(program01, "vLoc1");
    gl.vertexAttribPointer(vLoc1, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vLoc1);

    // Render at least 60 FPS
    setTimeout(function render() {
        requestAnimFrame(render);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.LINE_LOOP, 0, plane01.length);
    }, 16.6667)
};