import { suitCardArray } from './cardArray'
import { coverCardArr } from './cardArray'
import { renderPlayingField } from './renderPlayingField'
import { renderResult } from './renderResult'
import { renderChoicePage } from './renderChoicePage'
import { counterTime } from './getTime'

export function PlayApp(level: number, appEl: Element) {
    const min: number = 0
    const sec: number = 0
    let currentDate: Date
    let combDate: string

    function getCurrentDate() {
        return (currentDate = new Date())
    }
    let id: NodeJS.Timer

    //Создаём два сортированных массива
    let sortSuitCardArray = suitCardArray
        .sort(() => Math.random() - 0.5)
        .slice(0, level / 2)
    sortSuitCardArray = sortSuitCardArray
        .concat(sortSuitCardArray)
        .sort(() => Math.random() - 0.5)

    const sortCoverCardArr = coverCardArr.slice(0, level)

    //Создаём массив, который будет показываться
    let baseCardArr: string[]

    baseCardArr = sortCoverCardArr

    renderPlayingField(sortSuitCardArray, appEl)

    const modalEl = document.getElementById('modal')

    setTimeout(() => {
        id = counterTime(min, sec)
        getCurrentDate()
        console.log('таймер')
    }, 5000)

    let log: boolean = true
    let firstCard: number
    let secondCard: number
    let gameProgress: number = level

    function showCoverCard() {
        const suits: HTMLElement | null = document.getElementById('suits')
        if (suits) {
            suits.innerHTML = `${baseCardArr.join('')}`
        }

        const resturtButton = document.getElementById('button-new-start')
        if (resturtButton) {
            resturtButton.addEventListener('click', () => {
                renderChoicePage(appEl)
            })
        }

        if (suits) {
            const itemCards = suits.children
            const itemCardsArray = Array.from(itemCards)

            for (const itemCard of itemCardsArray) {
                itemCard.addEventListener('click', () => {
                    const cardIndex = Number(
                        (itemCard as HTMLElement).dataset.index,
                    )
                    if (
                        log &&
                        cardIndex &&
                        baseCardArr[cardIndex] != sortSuitCardArray[cardIndex]
                    ) {
                        firstCard = cardIndex
                        gameProgress = --gameProgress
                        baseCardArr[cardIndex] = sortSuitCardArray[cardIndex]
                        if (suits) {
                            suits.innerHTML = `${baseCardArr.join('')}`
                        }
                        showCoverCard()
                        log = !log
                    } else if (
                        baseCardArr[cardIndex] != sortSuitCardArray[cardIndex]
                    ) {
                        secondCard = cardIndex
                        gameProgress = --gameProgress
                        baseCardArr[cardIndex] = sortSuitCardArray[cardIndex]
                        if (suits) {
                            suits.innerHTML = `${baseCardArr.join('')}`
                        }
                        showCoverCard()
                        compareCard(firstCard, secondCard)
                        log = !log
                    }
                })
            }
        }
    }
    setTimeout(showCoverCard, 5000)

    function compareCard(firstCard: number, secondCard: number) {
        if (sortSuitCardArray[firstCard] === sortSuitCardArray[secondCard]) {
            baseCardArr[secondCard] = sortSuitCardArray[secondCard]
            if (gameProgress === 0) {
                ;(modalEl as HTMLElement).style.display = 'block'
                renderResult(
                    appEl,
                    modalEl,
                    gameProgress,
                    currentDate,
                    combDate,
                )
                clearInterval(id)
            } else {
                showCoverCard()
            }
        } else {
            baseCardArr = sortCoverCardArr
            ;(modalEl as HTMLElement).style.display = 'block'
            renderResult(appEl, modalEl, gameProgress, currentDate, combDate)
            clearInterval(id)
            log = false
        }
    }
}
