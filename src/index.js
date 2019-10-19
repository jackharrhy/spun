import 'normalize.css';
import './styles/main.scss';

const visualizers = [
	require('./visualizers/circle-bars'),
];

window.onload = () => {
	const ctx = {
		audioContext: new (window.AudioContext || window.webkitAudioContext)(),
		audio: document.getElementById('audio'),
		canvas: document.getElementById('canvas'),
		frame: -1,
	};

	ctx.audioSrc = ctx.audioContext.createMediaElementSource(ctx.audio);
	ctx.analyser = ctx.audioContext.createAnalyser();
	ctx.frequencyData = new Uint8Array(ctx.analyser.frequencyBinCount);
	ctx.audioSrc.connect(ctx.analyser);
	ctx.analyser.connect(ctx.audioContext.destination);

	ctx.c = canvas.getContext('2d');

	console.log(ctx);

	document.getElementById('ready').innerHTML = 'Ready!';
	document.getElementById('ui').style.backgroundColor = 'green';
	document.getElementById('player').style.display = 'block';
	document.getElementById('player').addEventListener('click', () => {
		document.getElementById('ui').style.display = 'none';
		visualizers[0].initialFunction(ctx);
		audio.play();
	});
}
