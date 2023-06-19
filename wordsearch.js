//week 5 pair programming with Russell Ley, Ranjita Sharma & Jasmine Nixon
const wordSearch = (letters, word) => {
  // This array stores strings in a row based from the letters array that are joined together.
  const horizontalJoin = letters.map(ls => ls.join(''));
  // loops and checks if there's a word then returns true
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // stores vertical searches
  const verticalJoin = [];
  // searches for word by columns
  for (let i = 0; i < letters[0].length; i++) {
    let verticalString = '';
    for (let j = 0; j < letters.length; j++) {
      verticalString += letters[j][i];
    }
    verticalJoin.push(verticalString);
  }
  // loops and checks if word is found
  // if yes then returns true and if not returns false
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  
  return false;
};

module.exports = wordSearch;