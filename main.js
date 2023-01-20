const words = [];

// recives the form's elements, adds the word to the dictionary and prints it on the page
function addWords(formData) {
    if (words.includes(formData.input.value)) {
        formData.repetitive.innerHTML = "The word is in the dictionary. Make sure you search for it.";
        formData.input.value = '';
        return 0;
    }
    formData.repetitive.innerHTML = '';
    formData.dictionary.innerHTML += formData.input.value + " ";
    words.push(formData.input.value);
    formData.input.value = '';
}

// gets the input of the user and returns the terms that start with the input
function searchInput(input) { 
    return words.filter(function(term) {
        if (term.startsWith(input)) {
            return term;
        }
    });
}

// gets the terms that matches the input and prints them in a list
function showResults(val) { 
    document.getElementById("result").innerHTML = '';
    let list = '';
    let terms = searchInput(val);
    if (terms.length == 0) { 
        list += "This word does not exist. Please, add it to the dictionary! :)"
    }
    if (val == '') {
        list = '';
        return 0;
    }
    for (i = 0; i < terms.length; ++i) {
        list += '<li>' + terms[i] + '</li>';
    }
    document.getElementById("result").innerHTML = '<ul>' + list + '</ul>';
}