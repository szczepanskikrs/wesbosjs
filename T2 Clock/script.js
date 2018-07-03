const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')
const clockOverhead = 90

function setTime(){
const currentDate = new Date()
const seconds = currentDate.getSeconds()
const minutes = currentDate.getMinutes()
const hours = currentDate.getHours()
calculateDegrees(seconds,minutes,hours)
}

function calculateDegrees(seconds,minutes,hours){
    let secondsDegree = ((seconds/60)*360)+clockOverhead
    setHand(secondHand, secondsDegree)
    let minuteDegree = (minutes*6)+clockOverhead
    setHand(minuteHand,minuteDegree)
    let hourDegree = 360/hours
    setHand(hoursHand,hourDegree)
}

function setHand(hand,degrees){
hand.style.transform = `rotate(${degrees}deg)`
}

setInterval(setTime, 1000)