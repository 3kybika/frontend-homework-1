 'use strict';
 
const euclid = function () {
	
	if ( arguments.length === 0){
		// Wrong number of parameters
		return undefined;
	}
	
	let divider = Math.min.apply(Math, arguments);
  
	if (divider ===0){
		return undefined;
	}
	
    for (let i = 0; i < arguments.length; ++i) { 
      let residue = arguments[i];

      // Euclid's algorithm for finding the GCD
      while (divider !== 0){
        [divider, residue] = [residue % divider , divider]
      }

      divider = residue;
    }
	
	return divider;
};
