var fa = document.querySelectorAll('.fa');
var contentPara = document.querySelectorAll('.content__para');
var contentHeader = document.querySelector('.content__header');

const playAnimation = () => {
    contentPara.forEach(cP => cP.classList.add('fadein-animation'));
    fa.forEach(f => f.classList.add('fadein-animation'));
    contentHeader.classList.add('fadein-animation');
    setTimeout(() => {
        fa.forEach(f => f.classList.remove('fadein-animation'));
        contentHeader.classList.remove('fadein-animation');
        contentPara.forEach(cP => cP.classList.remove('fadein-animation'));
    }, 2000);
}

window.onload = playAnimation;