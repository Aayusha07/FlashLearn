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
