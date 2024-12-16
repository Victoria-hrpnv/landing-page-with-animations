const sliderButtonLeft = document.querySelector('.slider_button');
const sliderButtonRight = document.querySelector('.button_right');
const slider = document.querySelector('.participants__slider')
const participantsCounter = document.querySelector('.counter')
const counter = document.querySelectorAll('.slider__item').length
let movingParticipants = 0;
let interval;
let isSlidingForward = true;
const windowWidth = window.innerWidth;

function startInterval() {
    interval = setInterval(() => {
        if (isSlidingForward) {
            if (participantsCounter.innerText < counter) {
                slider.style.transform = `translateX(-1242px)`;
                participantsCounter.innerText = Number(participantsCounter.innerText) + 3;
                isSlidingForward = false;
            }

        } else {
            if (participantsCounter.innerText > 3) {
                participantsCounter.innerText = Number(participantsCounter.innerText) - 3;
                slider.style.transform = `translateX(0)`;
                isSlidingForward = true;
            }
        }
    }, 4000);
}

function IntervalClear() {
    clearInterval(interval);
    startInterval();
}

if (windowWidth > 415){
    startInterval()
    participantsCounter.innerText = '3';
} else {
    participantsCounter.innerText = '1'
}

sliderButtonRight.addEventListener("click", function () {
    if (windowWidth > 415){
        if (participantsCounter.innerText < counter) {
            slider.style.transform = `translateX(-1242px)`;
            participantsCounter.innerText = Number(participantsCounter.innerText) + 3;
            isSlidingForward = false;
            }
            IntervalClear()
        } else {
        if (participantsCounter.innerText < counter) {
            movingParticipants+= 355;
            slider.style.transform = `translateX(-${movingParticipants}px)`;
            participantsCounter.innerText = Number(participantsCounter.innerText) + 1;
            isSlidingForward = false;
        }
    }

})

sliderButtonLeft.addEventListener("click", function () {
    if (windowWidth > 415){
        if (participantsCounter.innerText > 3) {
            slider.style.transform = `translateX(0)`;
            participantsCounter.innerText = Number(participantsCounter.innerText) - 3;
            isSlidingForward = true;
        }
        IntervalClear()
    } else {
        if (participantsCounter.innerText > 1) {
            movingParticipants-= 355;
            slider.style.transform = `translateX(-${movingParticipants}px)`;
            participantsCounter.innerText = Number(participantsCounter.innerText) - 1;
            isSlidingForward = false;
        }
    }
})



 // Бегущая строка
const lines = document.querySelectorAll('.transform');
const lineWidth = lines[0].offsetWidth;
const lineWrapperWidth = document.querySelector('.redLine').offsetWidth

lines.forEach(line => {
    function lineTransition () {
        line.style.transform =  `translateX(${lineWrapperWidth}px)`;
        line.style.transition = 'none';
        setTimeout(() => {
            line.style.transform =  `translateX(-${lineWidth+18}px)`
            line.style.transition = 'transform 18s linear';
            line.addEventListener('transitionend', function() {
                setTimeout(lineTransition, 0);
            });
        }, 10);
    }
    lineTransition()
})



//слайдер "шаги" моб.в.
const stepsListMobile = document.querySelector('.steps__list');
const listWidth = stepsListMobile.offsetWidth;
let listCounter = 0;
let moving = 0;
const stepsButtonLeft = document.querySelector('.stepsSlider_button');
const stepsButtonRight = document.querySelector('.reflection');
const stepsSvg = document.querySelectorAll('.steps__svg')

stepsButtonRight.addEventListener('click', () => {
    if (listCounter < 4) {
    stepsSvg[listCounter].style.fill = '#D9D9D9'
    moving += listWidth+20;
    listCounter++;
    stepsSvg[listCounter].style.fill = '#313131'
    stepsListMobile.style.transform = `translateX(-${moving}px)`;
    if (listCounter > 0){
        stepsButtonLeft.style.backgroundColor = '#313131'
    }
}
    if (listCounter === 4){
        stepsButtonRight.style.backgroundColor = 'rgba(49,49,49,0.2)'
    }
})

stepsButtonLeft.addEventListener('click', () => {
    if (listCounter > 0) {
        stepsSvg[listCounter].style.fill = '#D9D9D9'
        moving -= listWidth+20;
        listCounter--;
        stepsSvg[listCounter].style.fill = '#313131'
        stepsListMobile.style.transform = `translateX(-${moving}px)`;
    }
    if (listCounter === 0){
        stepsButtonLeft.style.backgroundColor = 'rgba(49,49,49,0.2)'
    }
    if (listCounter < 4){
        stepsButtonRight.style.backgroundColor = '#313131'
    }
})

