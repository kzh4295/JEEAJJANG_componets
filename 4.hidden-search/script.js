// const container = document.querySelector('.container');
// const input = document.querySelector('.my-input');
// const btn = document.querySelector('.my-btn');

// btn.addEventListener('click', ()=>{
//   input.classList.add('.hidden')
// })

/* ====================================================== */

const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
  search.classList.toggle('active')
  input.focus()
})
