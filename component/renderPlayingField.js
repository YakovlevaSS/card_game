export function renderPlayingField(baseCardArr, appEl) {
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
    <div class="game-field center-big" id="suits">${baseCardArr.join('')}</div>
</div>
`
        appEl.innerHTML = appHtml
    }
    