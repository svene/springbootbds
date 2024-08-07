import { balIconConsultant } from './webjars/baloise-design-system/@baloise/ds-icons/index.esm.js';
import { balBrandIconTheftCarGreen } from './webjars/baloise-design-system/@baloise/ds-brand-icons/index.esm.js';

const openButton = document.getElementById('openBtn');
// const modal = document.getElementById('modal');

(async () => {
	await customElements.whenDefined('bal-modal')
	// const todoListElement = document.querySelector('bal-select')
	// await todoListElement.select('tennis')
	const modal = document.getElementById('modal');
	openButton.addEventListener('click', async (event) => {
		console.log('listener', event);
		await modal.present();
	});

})()

// openButton.addEventListener('click', (event) => {
// 	console.log('listener', event);
// 	modal.present();
// });
