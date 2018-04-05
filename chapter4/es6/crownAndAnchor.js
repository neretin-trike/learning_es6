"use strict";

let funds = 50;

const bets = {
	crown: 0, 
	anchor: 0,
	heart: 0,
	spade: 0,
	club: 0,
	diamond: 0 
};

while (fund > 1 && funds < 100) {

	let totalBet = rand(1, funds);

	if (totalBet === 7) {
		totalBet = funds;
		bets.heart = totalBet;
	}
	else {
		// 
	}

	funds = funds - totalBet;
	
}

function rand(m,n) {
	return m + Math.floor((n - m + 1)*Math.random());
}

function randFace() {
	return ["crown", "anchor", "heart", "spade", "club", "diamond"] [rabd (0,5)];
}