let btnAdd = document.querySelector('.button.success');
let btnSubtract = document.querySelector('.button.warning');
let input = document.querySelector('#result');


btnAdd.addEventListener ('click',function() {
    input.innerHTML = parseInt(input.innerHTML) + 1;
});


btnSubtract.addEventListener ('click',function() {
    input.innerHTML = parseInt(input.innerHTML) - 1;
});
