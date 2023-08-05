import { suitCardArray } from './cardArray.js'
import { coverCardArr } from './cardArray.js'

export function PlayApp(levelPoint, appEl) {
    let level = levelPoint.value

    //Создаём два сортированных массива
    let sortSuitCardArray = suitCardArray
        .sort(() => Math.random() - 0.5)
        .slice(0, level / 2)
    sortSuitCardArray = sortSuitCardArray
        .concat(sortSuitCardArray)
        .sort(() => Math.random() - 0.5)
        .join('')

    let sortCoverCardArr = coverCardArr.slice(0, level).join('')

    //Создаём массив, который будет показываться
    let baseCardArr = []

    baseCardArr = sortSuitCardArray
    function renderPlayingField() {
        const appHtml = `
    <div class="wrap">
    <header class="center-big">
      <div class="timer ">
        <div class="timer__units">
            <p class="timer__min">min</p>
            <p class="timer__sek">sek</p>
        </div>
        <div class="timer__time">00.00</div>
      </div>  
      <button type="submit" class="button" id="button-new-start" >Начать заново</button>
    </header>
    <div class="game-field center-big" id="suits">${baseCardArr}</div>
</div>
`
        appEl.innerHTML = appHtml
    }
    renderPlayingField()

    function showCoverCard() {
        baseCardArr = sortCoverCardArr
        renderPlayingField()
        const suits = document.getElementById('suits')
        let itemCards = suits.children
        for (const itemCard of itemCards) {
            itemCard.addEventListener('click', () => {
                console.log('click')
            })
        }
    }
    setTimeout(showCoverCard, 5000)
}
