//javascriptor
    
//get user input
let notificationBoard    =   document.querySelector('.notification');
let userSubmitButton    =   document.querySelector('.userSubmit');
let wordInput    =   document.querySelector('.wordInput');
    
        userSubmitButton.addEventListener('click', function(){
                    processInput(wordInput.value);
        });

        let processInput    =   (input) => {
                
                let flipWord    =   (value) => {
                
                    //clean remove special characters and punctuations
                    let newValue='';
                    value = (value.replace(/([^\w])/g, '*~*')).split('*~*');
                        for(let i=0; i < value.length; i++){
                            newValue += value[i]+ "";
                        }    
                    
                    //flip code
                    let flippedWord='';
                    for(let i = 0; i < newValue.length; i++){
                        flippedWord += (newValue[(newValue.length-i)-1]); 
                    }
                    if (flippedWord.toLowerCase() === newValue.toLowerCase()) {
                        addtoLocalStorage((value.join(" ")).toUpperCase());
                    } else {
                        listNotification('Sorry, Word or Phrase is not a Palindrome')
                    }
                }
                (flipWord(input))
                    clearDOM();
                displayEntry();
        }
        let listNotification    =   (message) => {
                notificationBoard.textContent=(message)
        }
            //search list for word/phrase
        let findWordExist = (word, wordlist) => {
            for(let i=0; i < wordlist.length;i++){
                if (wordlist[i].toLowerCase() == word.toLowerCase()){
                    return true;
                }
            }
                return false;
        }
        
        let addtoLocalStorage = (word) => {            
            let wordlist = localStorage.getItem("wordlist");
            let wordlistJSON = JSON.parse(wordlist);
                if (wordlistJSON != null){
                   if ( findWordExist(word, wordlistJSON)){
                        listNotification('Word or Phrase already in Palindrome entry')
                    } else  {
                        updateStorage(word, wordlistJSON)
                    }     
                } else {
                        registerStorage(word)
                }
        }
        
            let registerStorage = (word) => {
                    let wordlist    =   [word];
                let wordlistJSON = JSON.stringify(wordlist);
                    localStorage.setItem("wordlist", wordlistJSON);
                    listNotification('It\'s a Palindrome')
            }
            let updateStorage = (word, wordlist) => {
                if(wordlist.length > 4){
                    wordlist.pop()
                }
                
                wordlist.unshift(word);
            let wordlistJSON = JSON.stringify(wordlist);
                localStorage.setItem("wordlist", wordlistJSON);
                listNotification('It\'s a Palindrome')
            }
            let displayEntry   =    () =>{
                let wordlist = localStorage.getItem('wordlist');
                    wordlist = JSON.parse(wordlist);
                    if(wordlist == null){
                        return false;
                    }
                for(let i=0; i < wordlist.length; i++){
                    addToDatalist(wordlist[i]);
                }
            }
            let addToDatalist = (words) =>{
                let datalist    =   document.querySelector('#wordlist');
                let list        =   document.querySelector('.list');
                    let datalistOptions = document.createElement('option');
                        datalistOptions.setAttribute('value', words)
                        datalist.appendChild(datalistOptions);
                        
                    let listOptions = document.createElement('li');
                        listOptions.innerHTML = (words)
                        list.appendChild(listOptions);
                        
            }
            let clearDOM    =   () => {
                let datalist    =   document.querySelector('#wordlist');
                let list        =   document.querySelector('.list');
                    datalist.innerHTML ='';
                    list.innerHTML ='';
            }
            clearDOM()
            displayEntry();