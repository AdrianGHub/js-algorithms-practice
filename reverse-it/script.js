const input = document.querySelector('.result__input');

function reverseMe(input) {

    if(typeof input !== 'string') {
  
      throw new Error ("Ooops. Nie przekazałeś wartości typu  string!");
      
    } else {
  
      input.toLowerCase();
      const reverseString = input.split('').reverse().join('');
      return result.innerHTML = reverseString;
  
    }
   
  }

  /* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(reverseMe('a'), 'a');
verify(reverseMe('abc'), 'cba');
verify(reverseMe('Przeprogramowani'), 'inawomargorpezrP');
verify(reverseMe('Brawo!'), '!owarB');