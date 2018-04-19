# ABOUT PALINDROME APP
    By  [Emmanuel Daniel](mailto: ecomje@gmail.com)
        [emmsdan.github.io](https://github.com/emmsdan/palindromes)
        
   **--Description--**
   
            ++  remove space and puntuations
            ++  flip to word right to left
            ++  compare flipped string with orginal input
```
                --- if word/phrase is same (strict === word) 
                    return true check if it exist in localStorage()
                    if not store in localStorage(),
                    if exist discard and return a message that it alread exist.
                --- if word/phrase is not same
                    just inform user it is not a palindrome word/phrase
```

## PRODUCTION INSTRUCTIONS

    **--Installation--**
            1. To use the palindrome app for your project set the following
               > a. clone locally using
                    `git clone git@github.com:emmsdan/palindromes.git`
               > b. download and copy file to development folder
            
            2.Dependencies
                  
                  - code are pure vanilla javascript
                  - compatable with es5+
                  - html + css are responsive

            3. Usage

  **{html}**

                        <datalist id="wordlist"></datalist>
                        ++Also Include ++
                            ".list as a class to a 'ul' tag e.i"
                            <ul class="list"></ul>
  **{/html}**

  **{javascript}**

                    <code>
                        var notificationBoard    =   document.querySelector('.notification'); //where notification will display
                        var userSubmitButton     =   document.querySelector('.userSubmit'); //submit button
                        var wordInput    =   document.querySelector('.wordInput'); // text input field.
                    </code>
**{/javascript}**

**{Main Functions}**
                        __Some of the method/functions can be used as an individual component.__

        > ++  notification(message);                      //call this function to display result to user
        > ++  storeLocalStorage(name, value)              //store palindrome in localStorage
        > ++  findWordExist(word, wordlist)               //check if word exist in list
                >++  updateStorage()                         //update localStorage with word/phrase
                >++  registerStorage()                       //register new localStorage with word/phrase
        > ++  displayEntry()                              //display last five entries.
        > ++  addToDatalist()                             //add word/phrase to dom/datalist

**{Main Functions}**
## YOU ARE FREE TO CONTRIBUTE AND SHARE.
### FREELY YOU HAVE RECIEVED
### FREELY GIVE
# @emmsdan
