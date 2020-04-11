//document.querySelector('.vlvarriba').addEventListener('click',volvArriba(event));

function volvArriba(e) {
    e.preventDefault();
    console.log(e);
    window.scrollTo(0, 0);
}