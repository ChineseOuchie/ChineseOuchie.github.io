const animations = {
	'item1': {
		'element': '.item1',
		'duration': 4000,
		'delay': 0,
		'ease': 'linear',
		'loop': false,
		'autoplay': true,
		'keyframes': [
			{translateX: 250, scale: 2},
			{translateY: 40, scale: 1.5},
			{translateX: 0, scale: 1},
			{translateY: 0},
		],
	},
	'item2': {
		'element': '.item2',
		'duration': 4000,
		'delay': 0,
		'ease': 'linear',
		'loop': false,
		'autoplay': true,
		'keyframes': [
			{translateX: 0.0, translateY: 0.0},
			{translateX: 35.6, translateY: -58.4},
			{translateX: 59.1, translateY: -93.8},
			{translateX: 73.1, translateY: -109.0},
			{translateX: 77.2, translateY: -110.0},
			{translateX: 79.3, translateY: -108.1},
			{translateX: 81.1, translateY: -102.3},
			{translateX: 81.5, translateY: -30.5},
			{translateX: 83.5, translateY: 11.7},
			{translateX: 90.1, translateY: 57.2},
			{translateX: 95.9, translateY: 80.4},
			{translateX: 103.8, translateY: 103.3},
			{translateX: 114.1, translateY: 125.6},
			{translateX: 127.1, translateY: 147.0},
			{translateX: 143.0, translateY: 167.1},
			{translateX: 162.3, translateY: 185.5},
			{translateX: 185.1, translateY: 202.0},
			{translateX: 211.8, translateY: 216.0},
			{translateX: 242.7, translateY: 227.4},
			{translateX: 287.8, translateY: 237.2},
			{translateX: 329.2, translateY: 241.1},
			{translateX: 375.9, translateY: 241.1},
			{translateX: 428.1, translateY: 236.8},
			{translateX: 486.0, translateY: 228.0},

			{translateX: 486.0, translateY: 228.0},
			{translateX: 511.8, translateY: 178.3},
			{translateX: 526.0, translateY: 145.2},
			{translateX: 535.9, translateY: 113.6},
			{translateX: 541.7, translateY: 83.6},
			{translateX: 543.5, translateY: 62.1},
			{translateX: 542.6, translateY: 35.0},
			{translateX: 538.4, translateY: 9.4},
			{translateX: 530.8, translateY: -14.4},
			{translateX: 520.3, translateY: -36.5},
			{translateX: 507.1, translateY: -56.9},
			{translateX: 491.4, translateY: -75.5},
			{translateX: 473.4, translateY: -92.4},
			{translateX: 453.3, translateY: -107.4},
			{translateX: 431.5, translateY: -120.6},
			{translateX: 408.2, translateY: -131.9},
			{translateX: 383.5, translateY: -141.3},
			{translateX: 357.7, translateY: -148.8},
			{translateX: 331.1, translateY: -154.4},
			{translateX: 303.9, translateY: -158.0},
			{translateX: 276.4, translateY: -159.6},
			{translateX: 248.7, translateY: -159.2},
			{translateX: 221.1, translateY: -156.7},
			{translateX: 193.9, translateY: -152.1},
			{translateX: 167.2, translateY: -145.5},
			{translateX: 141.4, translateY: -136.7},
			{translateX: 116.7, translateY: -125.8},
			{translateX: 93.3, translateY: -112.7},
			{translateX: 71.4, translateY: -97.3},
			{translateX: 51.2, translateY: -79.8},
			{translateX: 33.1, translateY: -60.0},
			{translateX: 17.3, translateY: -37.9},
			{translateX: 0, translateY: 0},
		],
	},
	'item3': {
		'element': '.item3',
		'duration': 2000,
		'delay': 0,
		'ease': 'linear',
		'loop': false,
		'autoplay': true,
		'keyframes': [
			{translateX: 0.0, translateY: 0.0},
			{translateX: 1.0, translateY: 25.9},
			{translateX: 5.3, translateY: 58.5},
			{translateX: 12.7, translateY: 88.8},
			{translateX: 23.1, translateY: 117.0},
			{translateX: 36.1, translateY: 142.9},
			{translateX: 51.5, translateY: 166.6},
			{translateX: 69.2, translateY: 188.2},
			{translateX: 88.9, translateY: 207.5},
			{translateX: 110.4, translateY: 224.6},
			{translateX: 133.5, translateY: 239.5},
			{translateX: 158.0, translateY: 252.2},
			{translateX: 183.6, translateY: 262.6},
			{translateX: 210.2, translateY: 270.9},
			{translateX: 237.4, translateY: 277.0},
			{translateX: 265.1, translateY: 280.9},
			{translateX: 293.1, translateY: 282.6},
			{translateX: 321.1, translateY: 282.0},
			{translateX: 349.0, translateY: 279.3},
			{translateX: 376.5, translateY: 274.4},
			{translateX: 403.3, translateY: 267.3},
			{translateX: 429.4, translateY: 257.9},
			{translateX: 454.3, translateY: 246.4},
			{translateX: 478.0, translateY: 232.7},
			{translateX: 500.3, translateY: 216.8},
			{translateX: 520.8, translateY: 198.7},
			{translateX: 539.3, translateY: 178.4},
			{translateX: 555.7, translateY: 155.9},
			{translateX: 569.8, translateY: 131.3},
			{translateX: 581.3, translateY: 104.4},
			{translateX: 589.9, translateY: 75.4},
			{translateX: 595.6, translateY: 44.1},
			{translateX: 598.0, translateY: 2.0},

			{translateX: 596.0, translateY: -28.3},
			{translateX: 594.2, translateY: -56.6},
			{translateX: 587.6, translateY: -93.1},
			{translateX: 578.1, translateY: -126.9},
			{translateX: 565.8, translateY: -158.1},
			{translateX: 551.1, translateY: -186.7},
			{translateX: 534.0, translateY: -212.6},
			{translateX: 514.9, translateY: -236.0},
			{translateX: 493.8, translateY: -256.7},
			{translateX: 471.2, translateY: -274.8},
			{translateX: 447.1, translateY: -290.3},
			{translateX: 421.8, translateY: -303.2},
			{translateX: 395.5, translateY: -313.6},
			{translateX: 368.5, translateY: -321.3},
			{translateX: 340.9, translateY: -326.4},
			{translateX: 313.0, translateY: -329.0},
			{translateX: 285.0, translateY: -328.9},
			{translateX: 257.1, translateY: -326.3},
			{translateX: 229.5, translateY: -321.1},
			{translateX: 202.5, translateY: -313.3},
			{translateX: 176.2, translateY: -302.9},
			{translateX: 150.9, translateY: -290.0},
			{translateX: 126.8, translateY: -274.5},
			{translateX: 104.2, translateY: -256.5},
			{translateX: 83.1, translateY: -235.8},
			{translateX: 64.0, translateY: -212.7},
			{translateX: 46.9, translateY: -187.0},
			{translateX: 32.2, translateY: -158.7},
			{translateX: 19.9, translateY: -127.9},
			{translateX: 10.4, translateY: -94.5},
			{translateX: 3.8, translateY: -58.6},
			{translateX: 0.0, translateY: 0.0},
		],
	},

}

document.addEventListener('DOMContentLoaded', () => {	
	let animation = [];
	for(let key in animations) {
		if (animations.hasOwnProperty(key)) {
			const orderItem = animations[key];

			animation.push(anime({
				targets: orderItem.element,
				keyframes: orderItem.keyframes,
				duration: orderItem.duration,
				delay: orderItem.delay,
				easing: orderItem.ease,
				autoplay: orderItem.autoplay,
				loop: orderItem.loop,
			}));
			
		}
	}

	let seekProgressEl = document.getElementById('progress')
			seekProgressEl.oninput = function() {
				animation.forEach(item => {
					item.seek(item.duration * (seekProgressEl.value / 100));
					
				})
			}
})
