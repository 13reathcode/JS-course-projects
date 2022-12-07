'use strict';

// ---------- FUNCTIONS ----------

// Drying out code by defining variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Functions to close and open modal windows by adding and removing classes

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function () {
    console.log('Button pressed');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// ---------- Open modal ----------

// On click
for (let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', openModal);

// ---------- Closing modal ----------

// By pressing on X
btnCloseModal.addEventListener('click', closeModal);

// By pressing on overlay
overlay.addEventListener('click', closeModal);

// By pressing ESCAPE button
document.addEventListener('keydown', function (button) {
    if (button.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
});

// @JonasSchmedtmann Modal-Window practice by @13reathcode