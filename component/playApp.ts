import { suitCardArray } from './cardArray'
import { coverCardArr } from './cardArray'
import { renderPlayingField } from './renderPlayingField'

export function PlayApp(level: number, appEl: Element) {
    // let level = levelPoint.value

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

    renderPlayingField(sortSuitCardArray, appEl)

    let log: boolean = true
    let firstCard: number;
    let secondCard: number;

    function showCoverCard() {
        renderPlayingField(baseCardArr, appEl)
        const suits = document.getElementById('suits')
        if (suits) {
        let itemCards = suits.children
        const itemCardsArray = Array.from(itemCards);
    
        for (const itemCard of itemCardsArray) {
            itemCard.addEventListener('click', () => {
                let cardIndex = Number((itemCard as HTMLElement).dataset.index)
                console.log(cardIndex);
                if (log && cardIndex) {
                    firstCard = cardIndex;
                    baseCardArr[cardIndex] = sortSuitCardArray[cardIndex]
                    renderPlayingField(baseCardArr, appEl)
                    showCoverCard()
                    
                } else {
                    secondCard = cardIndex
                    compareCard(firstCard, secondCard)
                    renderPlayingField(baseCardArr, appEl)
                    showCoverCard()
                }
                log = !log
            })
        }    
        }        
    }
    setTimeout(showCoverCard, 5000)

    function compareCard(firstCard: number, secondCard:number) {
        if (sortSuitCardArray[firstCard] === sortSuitCardArray[secondCard]) {
            baseCardArr[secondCard] = sortSuitCardArray[secondCard]
            // baseCardArr = sortCoverCardArr;
            // renderPlayingField(baseCardArr, appEl)
            alert('выиграл')
        }
        else{
            baseCardArr = sortCoverCardArr;
            // renderPlayingField(baseCardArr, appEl)
            alert("проиграл")
        }
    }
}
