import { cardArray } from './cardArray.js'
import { coverCardArr } from './cardArray.js'

export function renderPlayingField(levelPoint, appEl) {
    let level = levelPoint.value

    let sortCardArray = cardArray
        .sort(() => Math.random() - 0.5)
        .slice(0, level / 2)
    sortCardArray = sortCardArray
        .concat(sortCardArray)
        .sort(() => Math.random() - 0.5)
        .join('')

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
    <div class="game-field center-big" id="suits">${sortCardArray}</div>
</div>
`
    appEl.innerHTML = appHtml

    function showCoverCard() {
        let sortCoverCardArr = coverCardArr.slice(0, level).join('')
        const suits = document.getElementById('suits')
        suits.innerHTML = `${sortCoverCardArr}`
    console.log("do");
    }
    setTimeout(showCoverCard, 5000);

    const coverCards = document.querySelectorAll('.cover-card')
    for (const coverCard of coverCards) {
        coverCard.addEventListener('click', () => {
            console.log('click')
        })
    }
}
