//contains constructor, Letter
function Letter(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
  }
  
 //either display an underlying character or a blank placeholder depending on IF (boolean) user 
 //has guessed a letter
//string value to store the underlying character for the letter
//boolean value that stores whether that letter has been guessed yet
//function that returns the underlying character if the letter has been guessed
  //or a placeholder (like an underscore) if the letter has not been guessed
//function that takes a character as an argument and checks it against the underlying character
  // updating the stored boolean value to true if it was guessed correctly

