// body의 이미지도 변경되야하므로 요소로 선택
const body = document.body;

// leftBtn, rightBtn에 따라 slide의 변화가 있으므로 해당 요소를 선택
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// 현재 슬라이드 인덱스
let activeSlide = 0;

// rightBtn 클릭 시, 슬라이드의 인덱스를 증가시킴
// 현재 슬라이드가 slide의 길이보다 크면 첫 인덱스로 넘김
rightBtn.addEventListener("click", () => {
	activeSlide++;

	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}

	setBgToBody();
	setActiveSlide();
});

// leftBtn 클릭 시, 슬라이드의 인덱스를 감소시킴
// 현재 슬라이드가 0보다 작으면 마지막 인덱스의 슬라이드로 이동해라
leftBtn.addEventListener("click", () => {
	activeSlide--;

	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}

	setBgToBody();
	setActiveSlide();
});

setBgToBody();

// 현재 슬라이드 인덱스에 맞게 backgroundImage를 바꿔라
function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// 현재 슬라이드 인덱스의 슬라이드에 active 클래스를 부여하고 
// 현재 슬라이드 인덱스의 슬라이드가 아닌 것에는 active 클래스를 제거해라
function setActiveSlide() {
	slides.forEach((slide) => slide.classList.remove("active"));

	slides[activeSlide].classList.add("active");
}
