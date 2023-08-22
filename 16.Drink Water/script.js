smallCups = document.querySelectorAll('.cup.small');
percentage = document.querySelector('.percentage');
liters = document.querySelector('.liters');


// 작은 컵 클릭 
// 큰 컵의 채워진 퍼센트 증가
// 큰 컵의 남은 용량 감소
// 작은 컵 ui 색깔 칠해짐
// 클릭한 컵의 인덱스가 

smallCups.forEach((ele, idx1)=>{
  ele.addEventListener('click', () => {
    handlerWater(idx1)
    ele.classList.add('full')
  })
})

// console.log(smallCups)

const handlerWater = (idx2) =>{
  percentage.innerText = ((250 * (idx2+1))/2000 * 100) + '%';
  percentage.style.height = 100 + 'px';
  liters.innerText = (2000 - (250 * (idx2+1)))/1000 + 'L'; 
  // liters.style.height = '200px'
  liters.style.backgroundColor ='red'

}

//----------------------------------------------------------------------
// const smallCups = document.querySelectorAll('.cup-small')
// const liters = document.getElementById('liters')
// const percentage = document.getElementById('percentage')
// const remained = document.getElementById('remained')

// updateBigCup()

// smallCups.forEach((cup, idx) => {
//     cup.addEventListener('click', () => highlightCups(idx))
// })

// function highlightCups(idx) {
//     if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
//     else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
//         idx--
//     }

//     smallCups.forEach((cup, idx2) => {
//         if(idx2 <= idx) {
//             cup.classList.add('full')
//         } else {
//             cup.classList.remove('full')
//         }
//     })

//     updateBigCup()
// }

// function updateBigCup() {
//     const fullCups = document.querySelectorAll('.cup-small.full').length
//     const totalCups = smallCups.length

//     if(fullCups === 0) {
//         percentage.style.visibility = 'hidden'
//         percentage.style.height = 0
//     } else {
//         percentage.style.visibility = 'visible'
//         percentage.style.height = `${fullCups / totalCups * 330}px`
//         percentage.innerText = `${fullCups / totalCups * 100}%`
//     }

//     if(fullCups === totalCups) {
//         remained.style.visibility = 'hidden'
//         remained.style.height = 0
//     } else {
//         remained.style.visibility = 'visible'
//         liters.innerText = `${2 - (250 * fullCups / 1000)}L`
//     }
// }