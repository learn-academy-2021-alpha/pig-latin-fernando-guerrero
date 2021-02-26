import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "alpha through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin
      // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    // now that we have an array of words, we can map over the array and access each word

    
  
  
    myPigLatinCodeHere = () => {
      // the variable "userInput" will contain the text input from the user modified into an array of words
      // no need to change this variable
      let userInput = this.state.phrase.split(" ")
      console.log("userInput:", userInput)
  
      // now that we have an array of words, we can map over the array and access each word
      let translatedWordsArray = userInput.map(currentWord => {
        // ACTION ITEM: use "currentWord" as a starting point for your code
        console.log("currentWord:", currentWord)
  
        let vowelsArray = currentWord.split("").filter(vowel => {
          return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" || vowel === "qu"
        //}
      //   function translateWord(currentWord) {
      //     for (var i=0; i<currentWord.length; i++) {
      //       if(vowel.indexOf(currentWord[i]) !==-1) break;
      //       if(currentWord.slice(i, i+2) ==='qu') i=+1
      //     }
      //     return currentWord.slice(i) + currentWord.slice(0,1) + "yay"
      //   }
      })

      let valIndex = 0

        console.log("vowelsArray:", vowelsArray)  
        if(currentWord[0]=== vowelsArray[0]){
          return currentWord + "way"
        }
        else if( currentWord[0] === "q" && currentWord[1] === "u"){
          for(let char of currentWord){
            if(vowelsArray.includes(char)){
              valIndex = currentWord.indexOf(char);
              break;
            }
          }

          return currentWord.slice(valIndex) + currentWord.slice(0, valIndex) + "ay"
        }

          else{
            for(let char of currentWord){
              if(vowelsArray.includes(char)){
                valIndex = currentWord.indexOf(char);
                break;

              }
            }
            return currentWord.slice(valIndex) + currentWord.slice(0,valIndex) + "ay"
          }

        // else if(currentWord[0] !== vowelsArray[0]){
        //   }
        //   console.log(currentWord[0] !== vowelsArray[0] + "ay")

        // your code here!
        

        // const vowels = ['a', 'e', 'i', 'o', 'u']
        // function translate(message) {
        //   return message.split('').map(translateWord).join('')
        // }
        // function translateWord(word) {
        //   for (var i=0; i<word.length; i++) {
        //     if(vowel.indexOf(word[i]) !==-1) break;
        //     if(word.slice(i, i+2) ==='qu') i=+1
        //   }
        //   return word.slice(i) + word.slice(0,1) + "yay"
        // }

        // let pigWord = currentWord.slice( , )
        // let vowels = ["a" , "e" , "i" , "o" , "u"]
        // let wordArray = currentWord.split("") 
        // if (vowels.includes(wordArray[0].toLocaleLowerCase())){
        //   return currentWord + "yay"
        // }         
        // // function slicedWord(pigWord){
        // //   return pigWord.slice(false , 1)
        
        // else 
        //   return pigWord + currentWord + "yay"
        
//find the vowel
//slice the word
//store first slice 
//push to the end of element 
        
      
    
    
      
        // Remember: console.log is your friend :)
  
  
        // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      // return currentWord
  })

  
      // your code here!
      // Remember: console.log is your friend :)
      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd wor
    // joining the array back to a string of translated words
    // no need to change this variable
    
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
  }


  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({ phrase: e.target.value })
  }

  render() {
    return (
      <>
        <h1>~~~~Pig Latin Translator~~~~</h1>
        <img
          src="https://i.pinimg.com/236x/f4/6b/90/f46b90aecdad133a9dba0a51e3b8b08c--pig-art-art-clothing.jpg"
          alt="pig with butcher cut names in pig latin"
          id="butcherPig"
        />
        <div id="box">
          <h2>Enter phrase to be translated:</h2>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            id="inputPhrase"
            onChange={ this.handleInput }
            value={ this.state.phrase }
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={ this.setUpPreventDefault }>Submit</button>
          <button onClick={ this.restartGame }>Clear</button>
        </div>
        <p className="phrase">{ this.state.phraseTranslated }</p>
        <footer className="codedBy">Coded by ~Fernando and Guerrero~</footer>
      </>
    )
  }
}

export default App
