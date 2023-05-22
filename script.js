/**
 * Fluent Emoji Animations
 * @file script.js
 * 
 * Using the Microsoft Emojis which are collected by Tarikul Islam Anik.
 */

const MASTER_URL = 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/';
const blur = document.querySelector('#blur');
const img = document.querySelector('img');



/**
 * Update the source image of the image and blur background
 * @param {string} src - The source of the image
 */
function updateImage(src) {
	img.classList.add('animate');
	
	// Preload the image to prevent lags and glitches
	const preloadImg = new Image()
	preloadImg.src = src;
	
	// Update the image sources after 250ms so that the image has a high change of being preloaded
	setTimeout(() => {
		img.src = src;
		blur.style.backgroundImage = `url(${img.src})`;
	}, 250);

	// Remove the animation class after 600ms
	setTimeout(() => img.classList.remove('animate'), 600);
}



/**
 * Fetch the emojis.json file and update the image
 */
fetch('emojis.json')
	.then(res => res.json())
	.then(data => {
		const keys = Object.keys(data);
		
		// Update the image every 2.5 seconds
		setInterval(() => {
			const randomKey = keys[Math.floor(Math.random() * keys.length)];
			const randomEmoji = data[randomKey][Math.floor(Math.random() * data[randomKey].length)];
			updateImage(`${MASTER_URL}${randomKey}/${randomEmoji}`)
			document.body.classList.remove('preloader');
		}, 2500);
})
