const password = document.querySelector('.result__input');
const result = document.querySelector('.result'); 

function validatePassword(password) {
  
  if(typeof password === 'string') {
   
    switch(true) { 
    
      case (password.length < 4 || password.length > 10):
        result.classList.remove('success');
        result.classList.add('error');
        result.innerHTML = "Hasło musi zawierać od 4 do 10 znaków";
        return false;

      case (!/[A-Z]/.test(password)):
        result.classList.remove('success');
        result.classList.add('error');
        result.innerHTML = "Dodaj przynajmniej 1 wielką literę.";
          return false;

      case (!/[a-z]/.test(password)):
        result.classList.remove('success');
        result.classList.add('error');
        result.innerHTML = "Dodaj przynajmniej 1 małą literę.";
          return false;
      
      case (!/\d/.test(password)):
        result.classList.remove('success');
        result.classList.add('error');
        result.innerHTML = "Dodaj przynajmniej 1 cyfrę.";
          return false;
      
      case (!/[!@#]/.test(password)):
      result.classList.remove('success');  
      result.classList.add('error');
      result.innerHTML = "Dodaj przynajmniej 1 znak specjalny - !, @ lub #.";
        return false;

      default: 
      result.classList.add('success');
      return result.innerHTML = "Twoje hasło jest prawidłowe!"
    }
  
  } else {
    result.classList.add('error');
    result.innerHTML = "Hasło musi być typu string!";
  }
}

document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();

  validatePassword(password.value);
})
