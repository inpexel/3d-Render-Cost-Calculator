const whiteBg = document.querySelector('.whiteBg');
const creative = document.querySelector('.creative');
const headButtons1 = document.querySelector('.headButtons button:first-of-type');
const headButtons2 = document.querySelector('.headButtons button:last-of-type');


function isBtnActive(on, off){
    off.style.display = 'none';
    on.style.display = 'flex';
    console.log('clicked');
}
