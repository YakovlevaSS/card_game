export function renderPlayingField(baseCardArr: string[], appEl: Element) {
    const appHtml = `
    <div class="wrap playing-field">
    <header class="center-big">
      <div class="timer ">
        <div class="timer__units">
            <p class="timer__min">min</p>
            <p class="timer__sek">sek</p>
        </div>
        <div class="timer__counter">
        <span class="timer__time" id="min">00</span>
        <span class="timer__time">.</span>  
         <span class="timer__time" id="sec">00</span>
        </div>
      </div>  
      <button type="submit" class="button" id="button-new-start" >Начать заново</button>
    </header>
    <div class="game-field center-big" id="suits">${baseCardArr.join('')}</div>
</div>
`
    appEl.innerHTML = appHtml

}
