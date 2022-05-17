import { bPackageFunc } from 'package-b';
import { packageCValue } from 'package-c';

function packageAFunc(text: string): string {
	let value: string;
	if (bPackageFunc(text)) {
		value = `Package B is happy`;
	} else {
		value = `Package B is unhappy`;
	}

	return `${value} - And message from packageC: ${packageCValue}`;
}

const value = packageAFunc('world');

console.log(`Got result: ${value}`);
