let quiestionArrows = document.querySelectorAll('.quiestions-arrow')
console.log(quiestionArrows);
if (quiestionArrows.length > 0) {
    for (let index = 0; index < quiestionArrows.length; index++) {
        const quiestionArrow = quiestionArrows[index];
        quiestionArrow.addEventListener('click', function (e) {
            quiestionArrow.parentElement.classList.toggle('_active');
        });
    }
}