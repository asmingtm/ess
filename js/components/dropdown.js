// //------------------------> DROPDOWN <------------------------//

// const allDropdowns = document.querySelectorAll('.dropdown');

// function closeAllDD() {
//     allDropdowns.forEach(d => d._input.checked = false);
// }

// function openDD(dropdown) {
//     closeAllDD();
//     dropdown._input.checked = true;
// }

// function selectDDitem(dropdown, itemDD){
//     dropdown._label.textContent = itemDD.textContent;
// }

// allDropdowns.forEach(dropdown => {
//     dropdown._input = dropdown.querySelector('input');
//     dropdown._label = dropdown.querySelector('b p');

//     dropdown.addEventListener('click', e => {
//         const item = e.target.closest('label');

//         if (item) {
//             e.stopPropagation();
//             selectDDitem(dropdown, item);
//             closeAllDD();
//             return;
//         }

//         if (!e.target.closest('li')) {
//             dropdown._input.checked ? closeAllDD() : openDD(dropdown);
//         }
//     });
// });