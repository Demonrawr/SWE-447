"use strict";
var Cube = { 
	positions : {
		values : new Float32Array([
		//Front
		-1.0, -1.0, 1.0,
		1.0, -1,.0, 1.0,
		1.0, 1.0, 1.0,
		-1.0, 1.0, 1.0,

		//Back
		-1.0, -1.0, -1.0,
		-1.0, 1.0, -1.0,
		1.0, 1.0, -1.0,
		1.0, -1.0, -1.0,

		//Top 
	  -1.0,  1.0, -1.0,
	  -1.0,  1.0,  1.0,
	   1.0,  1.0,  1.0,
	   1.0,  1.0, -1.0,

	  //Bottom
	  -1.0, -1.0, -1.0,
	   1.0, -1.0, -1.0,
	   1.0, -1.0,  1.0,
	  -1.0, -1.0,  1.0,
	  
	  //Right
	   1.0, -1.0, -1.0,
	   1.0,  1.0, -1.0,
	   1.0,  1.0,  1.0,
	   1.0, -1.0,  1.0,
	  
	  //Left
	  -1.0, -1.0, -1.0,
	  -1.0, -1.0,  1.0,
	  -1.0,  1.0,  1.0,
	  -1.0,  1.0, -1.0
		]), 
		numComponents : 3 
		}, 
	colors : { 
		values : new Float32Array([
		1.0, 1.0, 0.0,
		1.0, 1.0, 0.0,
		1.0, 1.0, 0.0,
		1.0, 1.0, 0.0,
		
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		
		1.0, 0.0, 1.0,
		1.0, 0.0, 1.0,
		1.0, 0.0, 1.0,
		1.0, 0.0, 1.0,
		
		1.0, 1.0, 1.0,
		1.0, 1.0, 1.0,
		1.0, 1.0, 1.0,
		1.0, 1.0, 1.0,
		
		0.0, 1.0, 1.0,
		0.0, 1.0, 1.0,
		0.0, 1.0, 1.0,
		0.0, 1.0, 1.0,
		]),
		numComponents : 3 
	},
	indices:{
		values: new Uint16Array([
		  0,  1,  2,      0,  2,  3,    // front
		  4,  5,  6,      4,  6,  7,    // back
		  8,  9,  10,     8,  10, 11,   // top
		  12, 13, 14,     12, 14, 15,   // bottom
		  16, 17, 18,     16, 18, 19,   // right
		  20, 21, 22,     20, 22, 23    // left
		])
	},
	init: function(){
		this.program = initShaders(gl, "Cube-vertex-shader", "Cube-fragment-shader");
		this.positions.buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.positions.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, this.positions.values, gl.STATIC_DRAW);
		this.positions.attribute = gl.getAttribLocation(this.program, "vPosition");
		
		this.colors.buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.colors.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, this.colors.values, gl.STATIC_DRAW);
		this.colors.attribute = gl.getAttribLocation(this.program, "vColor");
		
		this.indices.buffer = gl.createBuffer(); 
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices.values, gl.STATIC_DRAW);
	},
	draw: function(){
		gl.useProgram(this.program);
		gl.bindBuffer(gl.ARRAY_BUFFER, this.positions.buffer);
		gl.vertexAttribPointer(this.positions.attribute,
		this.positions.numComponents, gl.FLOAT, gl.FALSE, 0, 0);
		gl.enableVertexAttribArray(this.positions.attribute);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.colors.buffer);
		gl.vertexAttribPointer(this.colors.attribute,
		this.colors.numComponents, gl.FLOAT, gl.FALSE, 0, 0);
		gl.enableVertexAttribArray(this.colors.attribute);
		
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer);
		gl.drawElements(gl.TRIANGLES, this.indices.values.length,
		gl.UNSIGNED_SHORT, 0);
	}
};
