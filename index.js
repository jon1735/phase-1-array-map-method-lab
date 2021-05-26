const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
// return tutorials
//}


function titleCase(string) {
  return string.split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

function titleCased() { 
  return tutorials.map(tutorial => titleCase(tutorial));
}



//bascially taking all of those strings and mapping through them. When mapping through them you are 
//splitting up all the words in the string and then mapping every word individually. This will be referencing
//the first map..... by making the first letter upper case and then joining it up to the rest of the word