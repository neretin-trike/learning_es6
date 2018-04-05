"use strict";

function convertToRoman(num) {

	let map = [
		['','I','II','III','IV','V','VI','VII','VIII','IX'],
		['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
		['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
		['','M','MM','MMM']
	  ];
	
	  
	let unit1 = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
	let unit10 = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
	let unit100 = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
	let unit1000 = ['','M','MM','MMM'];
	
	num = num.toString().split('');
	let number = '';
	let i = num.length-1;

	for (let n of num) {
		number += map[i][n];
		i--
	}

	// switch (num.length) {
	// 	case 1: { number = unit1[num[0]]; break};
	// 	case 2: { number = unit10[num[0]] + unit1[num[1]]; break};
	// 	case 3: { number = unit100[num[0]] + unit10[num[1]] + unit1[num[2]]; break};
	// 	case 4: { number = unit1000[num[0]] + unit100[num[1]] + unit10[num[2]] + unit1[num[3]]; break};
	// }
	return console.log(number);
}
   
convertToRoman(56);
   