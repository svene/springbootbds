import { balIconConsultant } from './webjars/baloise-design-system/@baloise/ds-icons/index.esm.js';
import { balBrandIconTheftCarGreen } from './webjars/baloise-design-system/@baloise/ds-brand-icons/index.esm.js';

const openButton = document.querySelector('bal-button');
console.log(openButton);

export function ccc() {
	console.log('ccc');
}

export const c4 = () => consoloe.log('c4');

// openButton.addEventListener('balNavigate', (e) => console.log('listener'));
openButton.addEventListener('click', (event) => console.log('listener', event));
