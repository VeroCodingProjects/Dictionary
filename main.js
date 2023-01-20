const words = []; 

function addWords(formData) {
    if (words.includes(formData.input.value)) {
        return 0;
    } else {
        words.push(formData.input.value);
    }
}

function searchInput(input) {
    return words.filter(function(term) {
        if (term.startsWith(input)) {
            return term;
        }
    });
}
  
function showResults(val) {
    let res = document.getElementById("result");
    res.innerHTML = '';
    let list = '';
    let terms = searchInput(val);
    if (terms.length == 0) {
        list += "This word does not exist. Please, add it to the dictionary! :)"
    }
    for (i = 0; i < terms.length; ++i) {
        list += '<li>' + terms[i] + '</li>';
    }
    res.innerHTML = '<ul>' + list + '</ul>';
}