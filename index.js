const elForm = document.querySelector('.form');
const elInput = document.querySelector('#input');
const elStatus = document.querySelector('.status');

function validateInput() {
    const inputValue = elInput.value.trim();

    if (inputValue === '') {
        elStatus.textContent = 'Please, complete the input';
        elStatus.className = 'text-[red] font-bold text-[14px]';
        elInput.style.border = '2px solid red';
        elInput.className = 'incorrect border-2 border-[#64748b] py-[10px] px-[20px] text-[1.2rem] mt-[.5rem] mb-[1rem] rounded-md bg-[#fecaca]';
    }
}

elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});
