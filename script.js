
    const closeButton = document.querySelector('.close-button');
    const subscribeBtn = document.querySelector('.subscribe-button');
    const modalOverlay = document.querySelector('.modal-overlay');
    const loveHoduBtn = document.querySelector('.i-love-hodu');

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

            heart.style.left = Math.random() * (window.innerWidth - 50) + 'px'; // 랜덤한 가로 위치 (화면 가장자리에서 벗어나지 않게 -50)
            // 상단에서 시작하도록 설정
            heart.style.top = '-50px'; // 상단에서 시작

            // 떨어지는 애니메이션을 적용
            heart.style.animationDuration = Math.random() * 2 + 1 + 's'; // 애니메이션 지속 시간 (1초에서 3초 사이)
            heart.style.animationDelay = Math.random() * 2 + 's'; // 애니메이션 시작 지연 시간 (0초에서 2초 사이)

            modalOverlay.appendChild(heart);

            // 애니메이션이 끝나면 요소를 제거합니다.
            heart.addEventListener('animationend', function () {
                heart.remove();
            });
        }
    });
