
    const closeButton = document.querySelector('.close-button');
    const subscribeBtn = document.querySelector('.subscribe-button');
    const modalOverlay = document.querySelector('.modal-overlay');
    const loveHoduBtn = document.querySelector('.i-love-hodu');
    const hoduModal = document.querySelector('.hodu-modal');

    function openModal() {
        modalOverlay.classList.add('show');
    }

    function closeModal() {
        modalOverlay.classList.remove('show');
    }

    subscribeBtn.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);

    loveHoduBtn.addEventListener('click', function () {
        // 하트 이모지 여러 개 생성
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.textContent = '❤️'; // 하트 이모지
            heart.classList.add('heart');
            heart.style.left = Math.random() * window.innerWidth + 'px'; // 랜덤한 가로 위치
            heart.style.top = '-50px'; // 위에서 시작
            modalOverlay.appendChild(heart);

            // 애니메이션이 끝나면 요소를 제거합니다.
            heart.addEventListener('animationend', function () {
                heart.remove();
            });
        }
    });
