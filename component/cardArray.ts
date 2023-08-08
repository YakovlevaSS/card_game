export const suitCardArray: string[] = [
    `<img class="card-suit" src="./static/img/10 бубны.png">`,
    `<img class="card-suit" src="./static/img/10 крести.png">`,
    `<img class="card-suit" src="./static/img/10 пики.png">`,
    `<img class="card-suit" src="./static/img/10 черви.png">`,
    `<img class="card-suit" src="./static/img/6 бубны.png">`,
    `<img class="card-suit" src="./static/img/6 крести.png">`,
    `<img class="card-suit" src="./static/img/6 пики.png">`,
    `<img class="card-suit" src="./static/img/6 черви.png">`,
    `<img class="card-suit" src="./static/img/7 бубны.png">`,
    `<img class="card-suit" src="./static/img/7 крести.png">`,
    `<img class="card-suit" src="./static/img/7 пики.png">`,
    `<img class="card-suit" src="./static/img/7 черви.png">`,
    `<img class="card-suit" src="./static/img/8 бубны.png">`,
    `<img class="card-suit" src="./static/img/8 крести.png">`,
    `<img class="card-suit" src="./static/img/8 пики.png">`,
    `<img class="card-suit" src="./static/img/8 черви.png">`,
    `<img class="card-suit" src="./static/img/9 бубны.png">`,
    `<img class="card-suit" src="./static/img/9 крести.png">`,
    `<img class="card-suit" src="./static/img/9 пики.png">`,
    `<img class="card-suit" src="./static/img/9 черви.png">`,
    `<img class="card-suit" src="./static/img/валет бубны.png">`,
    `<img class="card-suit" src="./static/img/валет крести.png">`,
    `<img class="card-suit" src="./static/img/валет пики.png">`,
    `<img class="card-suit" src="./static/img/валет черви.png">`,
    `<img class="card-suit" src="./static/img/дама бубны.png">`,
    `<img class="card-suit" src="./static/img/дама крести.png">`,
    `<img class="card-suit" src="./static/img/дама пики.png">`,
    `<img class="card-suit" src="./static/img/дама черви.png">`,
    `<img class="card-suit" src="./static/img/король бубны.png">`,
    `<img class="card-suit" src="./static/img/король крести.png">`,
    `<img class="card-suit" src="./static/img/король пики.png">`,
    `<img class="card-suit" src="./static/img/король черви.png">`,
    `<img class="card-suit" src="./static/img/туз бубны.png">`,
    `<img class="card-suit" src="./static/img/туз крести.png">`,
    `<img class="card-suit" src="./static/img/туз пики.png">`,
    `<img class="card-suit" src="./static/img/туз черви.png">`  
]

const coverCardArr: string[] = []

for (let index = 0; index < 36; index++) {
    coverCardArr.push(
        `<img src="./static/img/рубашка.png" class="cover-card" data-index="${index}">`,
    )
};
export {coverCardArr};