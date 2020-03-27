const firstInput = document.querySelector('.result__input--first');
const secondInput = document.querySelector('.result__input--second');
const resultContainer = document.querySelector('.result'); 

function applyPredicate(elements, predicate) {

  const predicatedArray =[];
  elements.forEach(element => {
    predicate(element) ? predicatedArray.push(element) : false;
  });
  return resultContainer.innerHTML = predicatedArray.join('');
};


document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();

  applyPredicate([...firstInput.value], secondInput.value);
})

/* Weryfikacja */

function verify(input, goal) {
  const inputAsString = JSON.stringify(input);
  const goalAsString = JSON.stringify(goal);

  if (inputAsString === goalAsString) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goalAsString}, otrzymano - ${inputAsString}`);
  }
}

verify(applyPredicate([1, 2, 3], element => element > 2), [3]);
verify(applyPredicate(['a', 'b', 'c'], element => ['b', 'c'].includes(element)), ['b', 'c']);
verify(applyPredicate(['x', 'y'], element => element === 'z'), []);