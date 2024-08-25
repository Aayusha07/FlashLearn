// Get the modal element
var modal = document.getElementById('modal');

// Get the button that opens the modal
var openModalBtn = document.getElementById('open-modal-btn');

// Get the <span> element that closes the modal
var closeModalBtn = document.getElementById('close-modal-btn');

// When the user clicks the button, open the modal 
openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal content, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const addQuestion = document.getElementById("add-flashcard");

let editBool = false;
//to add question when student clicks on add button'Flashcard'
addQuestion.addEventListener("click", () => {
    container.classList.add("hide");
    question.value = "";
    answer.value = "";
    addQuestionCard.classList.remove("hide");
})

//Hide Create flashcard
closeModalBtn.addEventListener(
    "click", 
    (hideQuestion = () => {
        container.classList.remove("hide");
        addQuestionCard.classList.add("hide");
        if(editBool){
            editBool = false;
            submitQuestion();
        }
    })
)

//card generate
function viewList() {
    var listCard = document.getElementsByClassName("card-list-container");
    var div = document.createElement("div");
    div.classList.add("card");
    //Question
    div.innerHTML += `<p class="question-div"${question - value}</p>`;
    //Answer
    var displayAnswer = document.createElement("p");
    displayAnswer.classList.add("answer-div");
    displayAnswer.innerText = "answer-value";
    div.appendChild(displayAnswer);
}
//Testing
document.getElementById('open-modal-btn').addEventListener('click', function() {
    // Open the modal to create a new deck or flashcard
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('close-modal-btn').addEventListener('click', function() {
    // Close the modal
    document.getElementById('modal').style.display = 'none';
});

// Function to handle the deck creation
document.getElementById('flashcard-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the question and answer input values (in case you're repurposing the modal)
    const deckName = document.getElementById('question').value; // Assuming question field is used for deck name

    if (deckName) {
        addDeckToUI(deckName);
        document.getElementById('modal').style.display = 'none'; // Close the modal after adding the deck
    }
});

// Function to add a new deck to the UI
function addDeckToUI(deckName) {
    // Create the deck container div
    const deckDiv = document.createElement('div');
    deckDiv.classList.add('deck');
    deckDiv.setAttribute('onclick', `openDeck('${deckName}')`);

    // Add the deck name
    const deckTitle = document.createElement('span');
    deckTitle.innerText = deckName;
    deckDiv.appendChild(deckTitle);

    // Add progress bar
    const progressDiv = document.createElement('div');
    progressDiv.classList.add('progress');

    const progressBarDiv = document.createElement('div');
    progressBarDiv.classList.add('progress-bar');
    progressBarDiv.style.width = '0%'; // Initially set to 0%
    progressDiv.appendChild(progressBarDiv);
    deckDiv.appendChild(progressDiv);

    // Add the deck progress text
    const deckProgressSpan = document.createElement('span');
    deckProgressSpan.classList.add('deck-progress');
    deckProgressSpan.innerText = '0/0'; // Initially set to 0/0
    deckDiv.appendChild(deckProgressSpan);

    // Append the new deck to the deck list
    document.querySelector('.deck-list').appendChild(deckDiv);

    // Optionally, reset the form fields
    document.getElementById('question').value = '';
    document.getElementById('answer').value = '';
}

// Example function to handle deck opening (you can customize this as needed)
function openDeck(deckName) {
    alert(`Opening deck: ${deckName}`);
    // You can replace this alert with actual logic to open the deck and display flashcards
}

// Function to close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
