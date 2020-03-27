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