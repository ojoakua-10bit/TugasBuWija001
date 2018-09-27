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
    gl.clearColor(0.0, 0.5, 0.5, 1.0);
    gl.enable(gl.DEPTH_TEST);

    // Load shaders and initialize attribute
    let program01 = initShaders(gl, "vShader01", "fShader01");
    gl.useProgram(program01);

    // Load the data into GPU
    let vBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuf);
    gl.bufferData(gl.ARRAY_BUFFER, 8*30, gl.STATIC_DRAW);

    // Associate out shader variables with our data buffers
    let vLoc1 = gl.getAttribLocation(program01, "vLoc1");
    gl.vertexAttribPointer(vLoc1, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vLoc1);

    let cBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuf);
    gl.bufferData(gl.ARRAY_BUFFER, 16*30, gl.STATIC_DRAW);

    let vCol1 = gl.getAttribLocation(program01, "vCol1");
    gl.vertexAttribPointer(vCol1, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vCol1);

    let j = 0;
    for (let i = 0; i < plane.length; i++) {
        let t = vec4(0.0, 0.0, 0.0, 1.0);
        gl.bindBuffer(gl.ARRAY_BUFFER, vBuf);
        for (let k = 0; k < plane[i].length; k++)
            gl.bufferSubData(gl.ARRAY_BUFFER, 8*(j+k), flatten(plane[i][k]));
        gl.bindBuffer(gl.ARRAY_BUFFER, cBuf);
        for (let k = 0; k < plane[i].length; k++)
            gl.bufferSubData(gl.ARRAY_BUFFER, 16*(j+k), flatten(color[i]));
        j += plane[i].length;
    }

    // Render at least 25 FPS
    setTimeout(function render() {
        requestAnimFrame(render);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 15, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 19, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 12, 3);
        gl.drawArrays(gl.TRIANGLE_FAN, 23, 4);
    }, 40)
};