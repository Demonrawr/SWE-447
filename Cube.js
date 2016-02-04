"use strict";
var gl = undefined;

var Square = { 
	count : 4, 
	positions : {
		values : new Float32Array([  
		0.0, 0.0,
		1.0, 0.0,
		0.0, 1.0,
		1.0, 1.0,
		]), 
		numComponents : 2 
		}, 
	colors : { 
		values : new Float32array([1.0, 1.0, 1.0, 1.0]),
		numComponets : 3 
	},
	indices:{
		values: new Uint16Array([0,1,3,2])
	}
	Square.positions.buffer = gl.createBuffer(); 
	gl.bindBuffer(gl.ARRAY_BUFFER, Square.positions.buffer); 
	gl.bufferData(gl.ARRAY_BUFFER, Square.positions.values, gl.STATIC_DRAW); 
	var vPosition = gl.GetAttribLocation(program, "vPosition"); 
	gl.vertexAttribPointer(vPosition, Square.positions.numComponents, gl.FLOAT, 0, 0);
	gl.enableVertexAttribArray(vPosition);
	};

function render(){
	gl.clear(gl.COLOR_BUFFER_BIT);
	Objects.foreEach(function(obj) {obj.draw();});
}

function init() {
	var canvas = document.getElementById("webgl-canvas");
	
	gl = WebGLUtils.setupWebGL(canvas);
	if (!gl) { return; }
	
	gl.clearColor(1.0, 0.0, 1.0, 1.0);
	Objects.foreEach(function(obj) {obj.init();});
	render();
}
attribute vec4 vPosition;

void main()
{
	vPosition.xy -= vec2(0.5);
	vPosition.xy *= 1.5/ 1.0;
	gl_Position = vPosition;
}
window.onload = init;