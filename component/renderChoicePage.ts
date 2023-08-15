import { PlayApp } from './playApp'
export function renderChoicePage(appEl: Element | null) {
    const appHtml = `
    <div class="wrap center">
    <form class="choice" id="form" method = "POST" action = "#">
        <h2 class="choice__title">
            Выбери<br>сложность
        </h2>
        <div class="choice__items-wrap">

            <input class="choice__item" type="radio" id="radio1" name="radios" value="6" checked>
            <label for="radio1">1</label>

            <input class="choice__item" type="radio" id="radio2" name="radios" value="12">
            <label for="radio2">2</label>

            <input class="choice__item" type="radio" id="radio3" name="radios" value="18">
            <label for="radio3">3</label>
        </div>
        <button class="button choice__button" type="submit">
            Старт
        </button>
    </form>
    </div>`

    if (appEl) {
        appEl.innerHTML = appHtml
        const form = document.getElementById('form')
        if (form) {
            form.addEventListener('submit', (element) => {
                element.preventDefault()

                let levelPoints = document.querySelectorAll('.choice__item')
                const levelPointsArray = Array.from(levelPoints)
                for (let levelPoint of levelPointsArray) {
                    if ((levelPoint as HTMLInputElement).checked) {
                        let level: number = Number(
                            (levelPoint as HTMLInputElement).value,
                        )
                        PlayApp(level, appEl)
                    }
                }
            })
        }
    }
}
