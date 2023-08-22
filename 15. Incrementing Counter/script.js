const counters = document.querySelectorAll(".counter");

// Twitter, YouTube, FaceBook의 팔로워수를 1초 단위고 구함
counters.forEach((counter) => {
  // 처음에는 0으로 innerText를 할당
	counter.innerText = "0";

  // 
	const updateCounter = () => {
    // data-target의 값
		const target = +counter.getAttribute("data-target");
		const c = +counter.innerText;

    // 가시적인 효과를 보여주고자 증가분을 할당, 빨리 증가하고자 할수록 큰 값을 분모에 두기 
		const increment = target / 200;

    // data-target의 값이 현재의 innerText 값보다 크다면
		if (c < target) {
      // counter의 innerText에 현재 innerText값과 증가분을 할당해주고
			counter.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 1);
		} else {
      // data-target의 값이 현재의 innerText 값보다 작거나 같다면 바로 target값을 할당해줘라
			counter.innerText = target;
		}
	};

	updateCounter();
});
