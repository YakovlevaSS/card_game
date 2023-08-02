import { cardArray } from './cardArray.js'

export function renderPlayingField(levelPoint, appEl) {
    let level = levelPoint.value

    const coverCardArr = []
    function getCoverArr() {
        for (let index = 0; index < level; index++) {
            coverCardArr.push(`<img src="./img/рубашка.png">`)
        }
        console.log(coverCardArr)
        return coverCardArr
    }
    getCoverArr()

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
    <div class="game-field center-big">${coverCardArr}</div>
</div>
`
    appEl.innerHTML = appHtml
}
