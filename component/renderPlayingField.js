import { cardArray } from './cardArray.js'

export function renderPlayingField(levelPoint, appEl) {
    let level = levelPoint.value

    const coverCardArr = []

        for (let index = 0; index < level; index++) {
            coverCardArr.push(`<img src="./img/рубашка.png" class="cover-card">`)
        }
        console.log(coverCardArr);

  
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
    <div class="game-field center-big" id="suits">${coverCardArr.join("")}</div>
</div>
`
    appEl.innerHTML = appHtml
    

    const coverCards = document.querySelectorAll(".cover-card");
    for (const coverCard of coverCards) {
        coverCard.addEventListener('click', () => {
            let sortCardArray = cardArray.sort(() =>Math.random() - 0.5 );
            const suits = document.getElementById('suits'); 
            suits.innerHTML = `${sortCardArray.slice(0, level)}`;
        
            setTimeout(() => {
                renderPlayingField(levelPoint, appEl);
               }, 5000);
        })
    }




}
