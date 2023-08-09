import { renderChoicePage } from './renderChoicePage'
export function renderResult(appEl: Element, gameProgress: Number, playingField: HTMLElement | null ) {
    let modalEl = document.getElementById('modal')
    const modalHtml = `
    <div class="wrap">
    <div class="result">
        <div class="result__img">
        ${
            gameProgress === 0
                ? '<img src="static/img/выиграл.svg" alt="выиграл" />'
                : '<img src="static/img/проиграл.svg" alt="проиграл" />'
        }
        </div>
        <h2 class="result__title">${
            gameProgress === 0 ? 'Вы выиграли!' : 'Вы проиграли'
        }</h2>
            <p class="result__timer-text">Затраченное время</p>
            <div class="result__timer-time">01.20</div>
        <button class="button" id = "result__button" type="submit">
            Играть снова
        </button>
    </div>
</div>
`
    if (modalEl) {
        modalEl.innerHTML = modalHtml
    }
    const resturtButton = document.getElementById('result__button')
    if (resturtButton) {
        resturtButton.addEventListener('click', () => {
            renderChoicePage(appEl)
        })
    }
    console.log(playingField);

    if (playingField) {
        console.log(playingField);
        playingField.style.opacity = ".3";   
    }
}
