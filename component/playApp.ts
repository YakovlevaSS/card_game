import { suitCardArray } from './cardArray'
import { coverCardArr } from './cardArray'
import { renderPlayingField } from './renderPlayingField'
import { renderResult } from './renderResult'
import { renderChoicePage } from './renderChoicePage'

export function PlayApp(level: number, appEl: Element) {
    //Создаём два сортированных массива
    let sortSuitCardArray = suitCardArray
        .sort(() => Math.random() - 0.5)
        .slice(0, level / 2)
    sortSuitCardArray = sortSuitCardArray
        .concat(sortSuitCardArray)
        .sort(() => Math.random() - 0.5)

    let sortCoverCardArr = coverCardArr.slice(0, level)

    //Создаём массив, который будет показываться
    let baseCardArr: string[]

    baseCardArr = sortCoverCardArr

    renderPlayingField(sortSuitCardArray, appEl,)
const playingField: HTMLElement | null = document.querySelector(".playing-field")
console.log(playingField);

    let log: boolean = true
    let firstCard: number
    let secondCard: number
    let gameProgress: number = level

    function showCoverCard() {
        renderPlayingField(baseCardArr, appEl)

        const resturtButton = document.getElementById('button-new-start')
        if (resturtButton) {
            resturtButton.addEventListener('click', () => {
                renderChoicePage(appEl)
            })
        }

        const suits = document.getElementById('suits')
        if (suits) {
            let itemCards = suits.children
            const itemCardsArray = Array.from(itemCards)

            for (const itemCard of itemCardsArray) {
                itemCard.addEventListener('click', () => {
                    let cardIndex = Number(
                        (itemCard as HTMLElement).dataset.index,
                    )
                    if (log && cardIndex) {
                        firstCard = cardIndex
                        gameProgress = --gameProgress
                        console.log(gameProgress)
                        baseCardArr[cardIndex] = sortSuitCardArray[cardIndex]
                        renderPlayingField(baseCardArr, appEl)
                        showCoverCard()
                    } else {
                        secondCard = cardIndex
                        gameProgress = --gameProgress
                        baseCardArr[cardIndex] = sortSuitCardArray[cardIndex]
                        renderPlayingField(baseCardArr, appEl)
                        showCoverCard()
                        compareCard(firstCard, secondCard)
                    }
                    log = !log
                })
            }
        }
    }
    setTimeout(showCoverCard, 5000)

    function compareCard(firstCard: number, secondCard: number) {
        if (sortSuitCardArray[firstCard] === sortSuitCardArray[secondCard]) {
            baseCardArr[secondCard] = sortSuitCardArray[secondCard]
            gameProgress === 0
                ? renderResult(appEl, gameProgress, playingField)
                : showCoverCard

        } else {
            baseCardArr = sortCoverCardArr
            renderResult(appEl, gameProgress, playingField)
            log = false
        }
    }
}
