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

    baseCardArr = sortSuitCardArray

    renderPlayingField(baseCardArr, appEl)

    function showCoverCard() {
        baseCardArr = sortCoverCardArr
        renderPlayingField(baseCardArr, appEl)
        const suits = document.getElementById('suits');
        let itemCards = suits.children;
        let log = true;
        for (const itemCard of itemCards) {
            itemCard.addEventListener('click', () => {
                if (log) {
                    baseCardArr[3] = sortSuitCardArray[3];
                    renderPlayingField(baseCardArr, appEl)
                } else {
                    console.log("сравнить карты");
                }
                log = !log;
                console.log(log);
            })
        }
    }
    setTimeout(showCoverCard, 5000)
}
