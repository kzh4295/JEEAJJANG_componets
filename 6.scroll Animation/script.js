const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

console.log(boxDimensions.top)

function checkBoxes(){
  // window.innerHeight => JS의 프로퍼티 중 하나로 브라 우저의 높이(뷰포트의 높이)를 PX로 나타냄
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxDimensions = box.getBoundingClientRect();
    if(boxDimensions.top < triggerBottom){
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}
