const $right = document.querySelector(".main__button--right");
const $left = document.querySelector('.main__button--left');
const img = document.querySelector('.images');
const $testimonial1 = document.querySelector('.testimonial1')
const $testimonial2 = document.querySelector('.testimonial2')


$right.addEventListener('click',(e)=>{
    e.preventDefault();
    img.src = './images/image-john.jpg';
    $testimonial1.setAttribute('class','disabled');
    $testimonial2.removeAttribute('class','disabled');
})

$left.addEventListener('click',(e)=>{
    e.preventDefault();
    img.src = './images/image-tanya.jpg';
    $testimonial1.removeAttribute('class','disabled');
    $testimonial2.setAttribute('class','disabled');
   
})

const changeImg = ()=>{

}
console.log($right);

