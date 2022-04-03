function palindrome(string) {
  const str = string.split('').reverse().join('');
  if (str === string) {
    return true;
  } 
  return false;
}
console.log(palindrome("madam"));
console.log(palindrome("home"));