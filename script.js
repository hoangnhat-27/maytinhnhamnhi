const btnCalc = document.querySelector('#btn').addEventListener('click', () => {
    const inputAge = document.querySelector('#ageInput').value;
    const show = document.querySelector('.result');
    let result = `Tuổi của bạn DTH là: ${inputAge} tuổi`;
    show.classList.add('show');
    show.textContent = result;
});
