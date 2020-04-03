let currentModal;
let id;
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
document.getElementById("btnStim1").onclick = function() {
    currentModal = document.getElementById("modalStim1");
    currentModal.style.display = "block";
}

document.getElementById("btnStim2").onclick = function() {
    currentModal = document.getElementById("modalStim2");
    currentModal.style.display = "block";
}

document.getElementById("btnUltrasound").onclick = function() {
    currentModal = document.getElementById("modalUltrasound");
    currentModal.style.display = "block";
}

document.getElementById("btnTENS").onclick = function() {
    currentModal = document.getElementById("modalTENS");
    currentModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
document.getElementById("modalStim1Close").onclick = function() {
    // currentModal.style.display = "none";
    // currentModal.getElementsByClassName("choices")[0].style.display = "block";
    // currentModal.getElementsByClassName("summary")[0].style.display = "none";
    reset_page();
}

document.getElementById("modalStim2Close").onclick = function() {
    reset_page();
}

document.getElementById("modalUltrasoundClose").onclick = function() {
    reset_page();
}

document.getElementById("modalTENSClose").onclick = function() {
    reset_page();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == currentModal) {
    // currentModal.style.display = "none";
    // currentModal.getElementsByClassName("choices")[0].style.display = "block";
    // currentModal.getElementsByClassName("summary")[0].style.display = "none";
    reset_page();
  }
}

function reset_page() {
    currentModal.style.display = "none";
    currentModal.getElementsByClassName("choices")[0].style.display = "block";
    currentModal.getElementsByClassName("summary")[0].style.display = "none";

    reset_form();
    
}

function reset_form() {
    currentModal.getElementsByTagName("form")[0].reset();
    rangesToReset = currentModal.getElementsByClassName("range-display");
        for (i = 0; i<rangesToReset.length; i++) {
            rangesToReset[i].innerHTML = '0';
        }
}

function showSummary() {
    currentModal.getElementsByClassName("choices")[0].style.display = "none";
    currentModal.getElementsByClassName("summary")[0].style.display = "block";

    var entries = currentModal.getElementsByClassName("entry");
    var results = currentModal.getElementsByClassName("result");

    for (i = 0; i < results.length; i++){
        results[i].innerHTML = entries[i].options[entries[i].selectedIndex].text;
    }

    var valueEntries = currentModal.getElementsByClassName("value-entry");
    var valueResults = currentModal.getElementsByClassName("value-result");

    for (i = 0; i < valueResults.length; i++){
        valueResults[i].innerHTML = valueEntries[i].value;
    }

    // var textareaEntries = currentModal.getElementsByClassName("textarea-entry");
    // var textareaResults = currentModal.getElementsByClassName("textarea-result");

    // for (i = 0; i < textareaResults.length; i++){
    //     textareaResults[i].innerHTML = textareaEntries[i].value;
    // }
}

function updateRange() {
    document.getElementById("stim2-range-display").innerHTML = document.getElementById("stim2-range").value;
}

document.getElementById("stim2-range").addEventListener("input", updateRange);