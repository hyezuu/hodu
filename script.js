const closeButton = document.querySelector('.close-button');
const subscribeBtn = document.querySelector('.subscribe-button');
const modalOverlay = document.querySelector('.modal-overlay');
const loveHoduBtn = document.querySelector('.i-love-hodu');
//모달
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

        heart.style.left = Math.random() * (window.innerWidth - 50) + 'px';
        // 상단에서 시작하도록 설정
        heart.style.top = '-50px'; // 상단에서 시작

        // 떨어지는 애니메이션을 적용
        heart.style.animationDuration = Math.random() * 2 + 1 + 's'; // 애니메이션 지속 시간 (1초에서 3초 사이)
        heart.style.animationDelay = Math.random() * 2 + 's'; // 애니메이션 시작 지연 시간 (0초에서 2초 사이)

        modalOverlay.appendChild(heart);

        heart.addEventListener('animationend', function () {
            heart.remove();
        });
    }
});
//모바일 메뉴
const openMobileMenuBtn = document.querySelector('.mobile-menu button');
const openMobileMenuOverlay = document.querySelector('.mobile-menu-modal-overlay');
const closeMobileMenuBtn = document.querySelector('.menu-close-button')

function openMobileMenuModal() {
    openMobileMenuOverlay.classList.add('show');
}

function closeMobileMenuModal() {
    openMobileMenuOverlay.classList.remove('show');
}

openMobileMenuBtn.addEventListener('click', openMobileMenuModal);
closeMobileMenuBtn.addEventListener('click', closeMobileMenuModal);

//카카오맵
const mapContainer = document.getElementById("kakao-map");
const mapOption = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
};
new window.kakao.maps.Map(mapContainer, mapOption);


//이미지 가져오는부분
const listPic = document.querySelector('.grid-photo');
const showMoreBtn = document.querySelector('.showMore');
let pageToPatch = 1;



showMoreBtn.addEventListener('click', fetchImages);

async function fetchImages() {
    const len = listPic.children.length;
    try {
        for(let i=0; i<3; i++){
            const listItem = document.createElement('li');
            const img = document.createElement('img');
            img.src = "img/cats/FN4c9bragAASHBX.jpeg" // 로딩중 이미지로 설정
            listItem.appendChild(img);
            listPic.appendChild(listItem);
        }

        const response = await fetch(`https://cataas.com/api/cats?skip=${3*(pageToPatch++)}&limit=3`);

        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        // 제이슨 데이터를 자바스크립트 객체로 파싱
        const datas = await response.json();
        console.log(datas);
        makeImageList(datas , len);

    } catch (error) {
        console.error(error);
    }
}

//이미지 넣는부분
function makeImageList(datas, len) {
    datas.forEach((data) => {
        const target = listPic.children[len++].querySelector('img');
        const tempImage = new Image();
        tempImage.src = `https://cataas.com/cat?_id=${data._id}`;
        tempImage.onload = () => {
            target.src = tempImage.src; // 실제 이미지로 교체
        };
        tempImage.onerror = () => {
            console.error('이미지를 로드하는 데 실패했습니다.');
        };
    });
}

const scrollTopBtn = document.querySelector('.scroll-top');

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = window.scrollY / scrollHeight;
    const ratio = 0.3;

    // 특정 비율 이상일 때 버튼을 완전히 보이게 함
    if (scrollRatio >= ratio) {
        scrollTopBtn.style.opacity = '1';
    } else {
        // 특정 비율에 도달하기 전까지 비율에 맞게 불투명하게 함
        scrollTopBtn.style.opacity = scrollRatio * (1/ratio);
    }
});

scrollTopBtn.addEventListener('click' ,() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
})
