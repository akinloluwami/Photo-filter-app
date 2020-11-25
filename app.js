const img = document.querySelector('.img');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const saturate = document.querySelector('.saturate');
const brighten = document.querySelector('.brighten');
const sepia = document.querySelector('.sepia');
const b_w = document.querySelector('.b-w');

btn1.addEventListener('click', function () {
    img.classList.toggle('filter1');
    btn1.classList.toggle('active');
    img.classList.remove('filter2');
    img.classList.remove('filter3');
    img.classList.remove('filter4');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    brighten.classList.remove('show');
    sepia.classList.remove('show');
    b_w.classList.remove('show');
    saturate.classList.toggle('show');
})

btn2.addEventListener('click', function () {
    img.classList.toggle('filter2');
    btn2.classList.toggle('active');
    img.classList.remove('filter1');
    img.classList.remove('filter3');
    img.classList.remove('filter4');
    btn1.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    saturate.classList.remove('show');
    sepia.classList.remove('show');
    b_w.classList.remove('show');
    brighten.classList.toggle('show');
})
btn3.addEventListener('click', function () {
    img.classList.toggle('filter3');
    btn3.classList.toggle('active');
    img.classList.remove('filter2');
    img.classList.remove('filter1');
    img.classList.remove('filter4');
    btn2.classList.remove('active');
    btn1.classList.remove('active');
    btn4.classList.remove('active');
    brighten.classList.remove('show');
    saturate.classList.remove('show');
    b_w.classList.remove('show');
    sepia.classList.toggle('show');
})
btn4.addEventListener('click', function () {
    img.classList.toggle('filter4');
    btn4.classList.toggle('active');
    img.classList.remove('filter2');
    img.classList.remove('filter3');
    img.classList.remove('filter1');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn1.classList.remove('active');
    saturate.classList.remove('show');
    brighten.classList.remove('show');
    sepia.classList.remove('show');
    b_w.classList.toggle('show');
})