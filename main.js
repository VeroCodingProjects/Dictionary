const words = []; //the list will contain the added words

function addWords() {
    let userInput = document.getElementById("user-input").value;
    if (words.includes(userInput)) {
        return 0;
    } else {
        words.push(userInput);
    }
}

function searchInput(input) { // searching for all the words that start with the input
    let reg = input;
    return words.filter(function(term) {
        if (term.startsWith(reg)) {
            return term;
        }
    });
}
  
function showResults(val) { // printing the result
    let res = document.getElementById("result");
    res.innerHTML = '';
    let list = '';
    let terms = searchInput(val);
    if (terms.length == 0) { // if the word doesn't exist, then it should be added to the dictionary
        list += "This word does not exist. Please, add it to the dictionary! :)"
    }
    for (i = 0; i < terms.length; ++i) {
        list += '<li>' + terms[i] + '</li>';
    }
    res.innerHTML = '<ul>' + list + '</ul>';
}