function removeTransition(event) {
    if (event.propertyName !== 'transform') { return }
    this.classList.remove('playing')
}

function playAudio(audio, key) {
    if (!audio) { return }
    else {
        audio.currentTime = 0
        audio.play()
        key.classList.add('playing')
    }
}

function setKeyEventListeners(keys) {
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
}

function playSound(event) {
    const audio = this.document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key="${event.keyCode}"]`)
    const keys = this.document.querySelectorAll(`.key`)
    setKeyEventListeners(keys)
    playAudio(audio, key)
}

window.addEventListener('keydown', playSound)