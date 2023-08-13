import { renderChoicePage } from './renderChoicePage'
export function renderResult(
    appEl: Element,
    modalEl: HTMLElement | null,
    gameProgress: Number,
    //playingField: HTMLElement | null,
    currentDate: Date,
    combDate: string,
) {
    const minutModal: number = 0;
    const secondModal: number = 0;

    function getTimeModalWindow(minutModal: number, secondModal: number) {
        const endDate = new Date();
        const diffDate = endDate.getTime() - currentDate.getTime();

        minutModal = Math.floor(diffDate / 60000);
        secondModal = Math.floor((diffDate % 60000) / 1000);

        combDate = `${
            minutModal < 10
                ? "0" + minutModal.toString()
                : minutModal.toString()
        }:${
            secondModal < 10
                ? "0" + secondModal.toString()
                : secondModal.toString()
        }`;
        return combDate;
    }
    getTimeModalWindow(minutModal, secondModal);

    console.log(combDate);

    const playingField: HTMLElement | null =
    document.querySelector('.playing-field')
console.log(playingField)

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
            <div class="result__timer-time">${combDate}</div>
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
            if (modalEl) {
                modalEl.style.display = 'none'
            }
            renderChoicePage(appEl)
        })
    }

    if (playingField) {
        playingField.style.opacity = '.3'
    }
}
