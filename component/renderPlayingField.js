import { cardArray } from "./cardArray.js"

export function renderPlayingField(levelPoint, appEl) {
    
    let level = levelPoint.value;

    const coverCardArr = [];
    for (let index = 0; index < level; index++) {
        coverCardArr.push(`<img src="./img/рубашка.png">`)
        console.log(coverCardArr);        
    }
    
    const appHtml = `
    <div class="wrap">
    <div class="game-field">
    <h2 class="game-field__title">${levelPoint.value} карточек
    </h2>
    </div>
    </div>`
    appEl.innerHTML = appHtml
}
