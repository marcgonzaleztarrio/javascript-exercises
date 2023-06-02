const palindromes = function (a) {

  const b = a.trim().toLowerCase().replace(/[^\w\s]| /gi, '');
  
  return (b === b.split('').reverse().join('')) ?  true :  false;

};
// Do not edit below this line
module.exports = palindromes;
