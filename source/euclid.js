 'use strict';
 
 const euclid = (...args) => {
	
	if (!args.length){
		// Wrong number of parameters
		return undefined;
	}
	
	let divider = Math.min(...args);
	
	if (!divider){
		// Wrong parameter
		return undefined;
	}
	
	return args.reduce(function(divider, residue){
		// Euclid's algorithm for finding the GCD
		while (divider){
			[divider, residue] = [residue % divider , divider]
		}
		return residue
	}, divider);
};
