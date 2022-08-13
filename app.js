const img = document.querySelector('.img');

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');

const saturate = document.querySelector('.saturate');
const brighten = document.querySelector('.brighten');
const sepia = document.querySelector('.sepia');
const b_w = document.querySelector('.b-w');

const btns = [btn1, btn2, btn3, btn4];
const filters = [saturate, brighten, sepia, b_w];

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.filter(_btn => _btn !== btn).forEach(_btn => _btn.classList.remove('active'));
        btn.classList.toggle('active');
        
        img.className = "";
        if(btn.classList.contains('active')) {
            img.classList.add(btn.classList[0]);
        }

        filters.forEach(filter => {
            if((btn.classList.contains('btn-1') && filter.classList.contains('saturate')) 
            || (btn.classList.contains('btn-2') && filter.classList.contains('brighten'))
            || (btn.classList.contains('btn-3') && filter.classList.contains('sepia'))
            || (btn.classList.contains('btn-4') && filter.classList.contains('b-w'))) {
                filter.classList.toggle('show');
            }
        })
    });
});
