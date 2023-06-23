// The element containing the id 'ContainerModal' is saved in 'modal'
const modal = document.getElementById('ContainerModal');

// The element containing the id 'Contact' is saved in 'openButton'
const openButton = document.getElementById('Contact');
// When the element is 'onclick' it is assigned the function 'open'
openButton.onclick = open;

/**
 * Modify the styles of the 'modal' element
*/
function open() {
    modal.style.display = 'inline';
}

// The element containing the id 'CloseButton' is saved in 'closeButton'
const closeButton = document.getElementById('CloseButton');
// When the element is 'onclick' it is assigned the function 'close'
closeButton.onclick = close;

/**
 * Modify the styles of the 'modal' element
*/
function close() {
    modal.style.display = 'none';
}