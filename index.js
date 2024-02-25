const elForm = document.querySelector('.form');
const elInput = document.querySelector('#input');
const elStatus = document.querySelector('.status');
const elPopup = document.querySelector('.popup');
const elBtnModal = document.querySelector('.btn-modal');

function validateInput() {
    const inputValue = elInput.value.trim();

    if (inputValue === '') {
        elStatus.textContent = 'Please, complete the input';
        elStatus.className = 'text-[red] font-bold text-[14px]';
        elInput.style.border = '2px solid red';
        elInput.className = 'incorrect border-2 border-[#64748b] py-[10px] px-[20px] text-[1.2rem] mt-[.5rem] mb-[1rem] rounded-md bg-[#fecaca]';
    } else {
        elPopup.classList.remove('invisible');
        document.querySelector('.main-container').classList.add('blur-[30px]', 'duration-200');
    }
}

elBtnModal.addEventListener('click', (e) => {
    e.preventDefault();

    elPopup.classList.add('invisible');
    document.querySelector('.main-container').classList.remove('blur-[30px]', 'duration-200');
})

elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});
