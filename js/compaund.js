let items = document.querySelectorAll('.compaund-list__item-btn')

if (items.length > 0) {
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        item.addEventListener('click', function (e) {
            if (item.textContent === 'О тренере') {
                item.textContent = 'Cкрыть'
            } else {
                item.textContent = 'О тренере'
            }
            item.parentElement.classList.toggle('_choose');
        });
    }
}

// let chs = document.querySelectorAll('.compaund-list__wrapper')

// if (chs.length > 0) {
//     for (let index = 0; index < chs.length; index++) {
//         const ch = chs[index];
//         if (ch.style.display == 'block') {
//             console.log('ok');
//             let els = document.querySelectorAll('.compaund-list__item-btn')

//             if (els.length > 0) {
//                 for (let index = 0; index < els.length; index++) {
//                     const el = els[index];
//                     el.textContent = 'скрыть'
//                 }
//             }
//         }
//     }
// }

