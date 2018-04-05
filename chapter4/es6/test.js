"use strict";

let funds = 50;

while (fund > 1 && funds < 100) {
	funds = funds + 2;
	funds = funds - 1;
}

function rand(m,n) {
	return m + Math.floor((n - m + 1)*Math.random());
}

function randFace() {
	return ["crown", "anchor", "heart", "spade", "club", "diamond"] [rabd (0,5)];
}