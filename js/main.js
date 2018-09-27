/*
 * js/main.js
 * This is the main logic of the WebGL program.
 */

let gl;
let on = false;
let wait = false;
let tmp = [];
let j = 0;

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

    // Prepare vertices buffer to GPU
    let vBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuf);
    gl.bufferData(gl.ARRAY_BUFFER, 8*3000, gl.STATIC_DRAW);

    // Associate out shader variables with our vertices data buffers
    let vLoc1 = gl.getAttribLocation(program01, "vLoc1");
    gl.vertexAttribPointer(vLoc1, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vLoc1);

    // Prepare color buffer to GPU
    let cBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuf);
    gl.bufferData(gl.ARRAY_BUFFER, 16*3000, gl.STATIC_DRAW);

    // Associate out shader variables with our color data buffers
    let vCol1 = gl.getAttribLocation(program01, "vCol1");
    gl.vertexAttribPointer(vCol1, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vCol1);

    for (let i = 0; i < plane.length; i++) {;
        gl.bindBuffer(gl.ARRAY_BUFFER, vBuf);
        for (let k = 0; k < plane[i].length; k++)
            gl.bufferSubData(gl.ARRAY_BUFFER, 8*(j+k), flatten(plane[i][k]));
        gl.bindBuffer(gl.ARRAY_BUFFER, cBuf);
        for (let k = 0; k < plane[i].length; k++)
            gl.bufferSubData(gl.ARRAY_BUFFER, 16*(j+k), flatten(color[i]));
        j += plane[i].length;
    }

    document.getElementById("switch").onclick = function() {
        if (on) {
            color[1] = colors.GRAY;
            for (let k = 0; k < plane[1].length; k++)
                gl.bufferSubData(gl.ARRAY_BUFFER, 16*(4+k), flatten(color[1]));
            document.getElementById("switch").innerText = "Turn On";
        }
        else {
            color[1] = colors.WHITE;
            for (let k = 0; k < plane[1].length; k++)
                gl.bufferSubData(gl.ARRAY_BUFFER, 16*(4+k), flatten(color[1]));
            document.getElementById("switch").innerText = "Turn Off";
        }
        on = !on;
    };

    ctx.onmousedown = function(ev) {
        if (on) {
            if (!wait) {
                let x = 2 * ev.clientX / ctx.width - 1;
                let y = 2 * ev.clientY / ctx.height - 1;
                if (x < 0.81 && x > -0.856 && y < 0.466 && y > -0.5) {
                    tmp[0] = vec2(x, -y);
                    wait = !wait;
                }
            }
            else {
                let x = 2 * ev.clientX / ctx.width - 1;
                let y = 2 * ev.clientY / ctx.height - 1;
                if (x < 0.81 && x > -0.856 && y < 0.466 && y > -0.5) {
                    tmp[2] = vec2(x, -y);
                    tmp[1] = vec2(tmp[0][0], tmp[2][1]);
                    tmp[3] = vec2(tmp[2][0], tmp[0][1]);
                    gl.bindBuffer(gl.ARRAY_BUFFER, vBuf);
                    for (let k = 0; k < tmp.length; k++)
                        gl.bufferSubData(gl.ARRAY_BUFFER, 8*(j+k), flatten(tmp[k]));
                    gl.bindBuffer(gl.ARRAY_BUFFER, cBuf);
                    for (let k = 0; k < tmp.length; k++)
                        gl.bufferSubData(gl.ARRAY_BUFFER, 16*(j+k), flatten(colors.MAGENTA));
                    j += tmp.length;
                    wait = !wait;
                }
            }
        }
    };

    // Render at least 25 FPS
    setTimeout(function render() {
        requestAnimFrame(render);
        gl.clear(gl.COLOR_BUFFER_BIT);
        if (on) {
            for (let i = 23; i < j; i+=4)
                gl.drawArrays(gl.LINE_LOOP, i, 4);
        }
        
        gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 15, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 19, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 12, 3);
    }, 40)
};