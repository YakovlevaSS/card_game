import { suitCardArray } from './cardArray.js'
import { coverCardArr } from './cardArray.js'
import { renderPlayingField } from './renderPlayingField.js'

export function PlayApp(levelPoint, appEl) {
    let level = levelPoint.value

    //Создаём два сортированных массива
    let sortSuitCardArray = suitCardArray
        .sort(() => Math.random() - 0.5)
        .slice(0, level / 2)
    sortSuitCardArray = sortSuitCardArray
        .concat(sortSuitCardArray)
        .sort(() => Math.random() - 0.5)

    let sortCoverCardArr = coverCardArr.slice(0, level)

    //Создаём массив, который будет показываться
    let baseCardArr = []

    baseCardArr = sortCoverCardArr

    renderPlayingField(sortSuitCardArray, appEl)

    let log = true

    function showCoverCard() {
        renderPlayingField(baseCardArr, appEl)
        const suits = document.getElementById('suits')
        let itemCards = suits.children
        for (const itemCard of itemCards) {
            itemCard.addEventListener('click', () => {
                let cardIndex = itemCard.dataset.index
                console.log(cardIndex)
                let oldCardIndex = cardIndex;
                if (log) {
                    baseCardArr[cardIndex] = sortSuitCardArray[cardIndex]
                    renderPlayingField(baseCardArr, appEl)
                    showCoverCard()
                    
                } else {
                    compareCard(cardIndex, oldCardIndex)
                    renderPlayingField(baseCardArr, appEl)
                    showCoverCard()
                }
                log = !log
            })
        }
    }
    setTimeout(showCoverCard, 5000)

    function compareCard(cardIndex, oldCardIndex) {
        if (sortSuitCardArray[cardIndex] === sortSuitCardArray[oldCardIndex]) {
            baseCardArr = sortCoverCardArr;
            renderPlayingField(baseCardArr, appEl)
            alert('выиграл')
        }
        else{
            baseCardArr = sortCoverCardArr;
            renderPlayingField(baseCardArr, appEl)
            alert("проиграл")
        }
    }
}
