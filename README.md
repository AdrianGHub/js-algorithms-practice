# JS Algorithms Practice

## Setup :fire: :fire: :fire: 

1. Clone this repo `https://github.com/AdrianGHub/js-algorithms-practice.git`

2. Make sure you have Node.js with npm from [nodejs.org](https://nodejs.org/en/) or via [nvm](https://github.com/nvm-sh/nvm) | [n](https://github.com/tj/n)

3. Choose dir with desired example e.q. /reverse.it

4. Install parcel bundler :

`npm install -g parcel-bundler`

5. Localize directory with chosen project and run following command :

`parcel index.html`

6. Open website on localhost with index.html file displayed.


## Ćwiczenie 1 - "Odwróć to"

### Cel zadania

> Zaimplementuj funkcję, która odwróci przekazany do niej string.

---

> Przykład:
`reverseHandler('abc') // => 'cba'`;

![Przykład działania sktyptu na stronie](/github/reverse.PNG)


## Ćwiczenie 2 - "Walidacja"

### Cel zadania

> Zaimplementuj funkcję, która sprawdzi, czy przekazane hasło spełnia określone warunki:
 
 * Ma długość od 4 do 10 znaków
 * Przynajmniej 1 małą oraz wielką literę
 * Zawiera jeden ze znaków specjalnych - !, @ lub #
 * Zawiera cyfrę

---

> Przykład:
`validatePassword('test') // => false`
`validatePassword('test11!') // => true`

![Przykład działania sktyptu na stronie](/github/password.png)


## Ćwiczenie 3 - "Przeplataniec"

### Cel zadania

> Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie" - używając kolejnych cyfr parametrów połączy  je w jeden string.
 
 ---
 
> Przykład:
`zipIt(111, 222) // => '121212'`
`zipIt(123, 456) // => '142536'`
`zipIt(12, 5555) // => '152555'`

![Przykład działania sktyptu na stronie](/github/zipit.png)

