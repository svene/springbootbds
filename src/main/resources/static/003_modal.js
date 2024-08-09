const openButton = document.getElementById('openBtn');
const modal = document.getElementById('modal');

openButton.addEventListener('click', (event) => {
	console.log('listener', event);
	modal.open();
});
