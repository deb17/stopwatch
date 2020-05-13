let timer = null

const tenths = document.querySelector('#tenths')
const seconds = document.querySelector('#seconds')
const minutes = document.querySelector('#minutes')
const stopWatch = document.querySelector('#stopwatch')
const laps = document.querySelector('#second')

const list = document.querySelector('ol')

const start = () => {
  if (!timer) {
    timer = setInterval(increment, 100)
  }
}

const increment = () => {
  let tenthsValue = parseInt(tenths.textContent)
  let secondsValue = parseInt(seconds.textContent)
  let minutesValue = parseInt(minutes.textContent)

  tenthsValue += 1
  tenths.textContent = String(tenthsValue)

  if (tenthsValue === 10) {
    tenths.textContent = '0'
    secondsValue += 1
    seconds.textContent =
      secondsValue < 10 ? '0' + secondsValue : String(secondsValue)
    if (secondsValue === 60) {
      seconds.textContent = '00'
      minutesValue += 1
      minutes.textContent =
        minutesValue < 10 ? '0' + minutesValue : String(minutesValue)
    }
  }
}

const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}
const restart = () => {
  stopTimer()
  minutes.textContent = '00'
  seconds.textContent = '00'
  tenths.textContent = '0'
  list.innerHTML = ''
  laps.style.display = 'none'
}
const lap = () => {
  if (timer) {
    laps.style.display = 'block'
    const li = document.createElement('li')
    li.textContent = stopWatch.textContent
    list.appendChild(li)
  }
}

document.querySelector('#one').addEventListener('click', start)
document.querySelector('#two').addEventListener('click', stopTimer)
document.querySelector('#three').addEventListener('click', restart)
document.querySelector('#four').addEventListener('click', lap)
