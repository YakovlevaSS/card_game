(()=>{"use strict";const s=['<img class="card-suit" src="./static/img/10 бубны.png">','<img class="card-suit" src="./static/img/10 крести.png">','<img class="card-suit" src="./static/img/10 пики.png">','<img class="card-suit" src="./static/img/10 черви.png">','<img class="card-suit" src="./static/img/6 бубны.png">','<img class="card-suit" src="./static/img/6 крести.png">','<img class="card-suit" src="./static/img/6 пики.png">','<img class="card-suit" src="./static/img/6 черви.png">','<img class="card-suit" src="./static/img/7 бубны.png">','<img class="card-suit" src="./static/img/7 крести.png">','<img class="card-suit" src="./static/img/7 пики.png">','<img class="card-suit" src="./static/img/7 черви.png">','<img class="card-suit" src="./static/img/8 бубны.png">','<img class="card-suit" src="./static/img/8 крести.png">','<img class="card-suit" src="./static/img/8 пики.png">','<img class="card-suit" src="./static/img/8 черви.png">','<img class="card-suit" src="./static/img/9 бубны.png">','<img class="card-suit" src="./static/img/9 крести.png">','<img class="card-suit" src="./static/img/9 пики.png">','<img class="card-suit" src="./static/img/9 черви.png">','<img class="card-suit" src="./static/img/валет бубны.png">','<img class="card-suit" src="./static/img/валет крести.png">','<img class="card-suit" src="./static/img/валет пики.png">','<img class="card-suit" src="./static/img/валет черви.png">','<img class="card-suit" src="./static/img/дама бубны.png">','<img class="card-suit" src="./static/img/дама крести.png">','<img class="card-suit" src="./static/img/дама пики.png">','<img class="card-suit" src="./static/img/дама черви.png">','<img class="card-suit" src="./static/img/король бубны.png">','<img class="card-suit" src="./static/img/король крести.png">','<img class="card-suit" src="./static/img/король пики.png">','<img class="card-suit" src="./static/img/король черви.png">','<img class="card-suit" src="./static/img/туз бубны.png">','<img class="card-suit" src="./static/img/туз крести.png">','<img class="card-suit" src="./static/img/туз пики.png">','<img class="card-suit" src="./static/img/туз черви.png">'];function i(c,t){let a=c.value;const r=[];for(let s=0;s<a;s++)r.push('<img src="./static/img/рубашка.png" class="cover-card">');console.log(r);const n=`\n    <div class="wrap">\n    <header class="center-big">\n      <div class="timer ">\n        <div class="timer__units">\n            <p class="timer__min">min</p>\n            <p class="timer__sek">sek</p>\n        </div>\n        <div class="timer__time">00.00</div>\n      </div>  \n      <button type="submit" class="button" id="button-new-start" >Начать заново</button>\n    </header>\n    <div class="game-field center-big" id="suits">${r.join("")}</div>\n</div>\n`;t.innerHTML=n;const g=document.querySelectorAll(".cover-card");for(const r of g)r.addEventListener("click",(()=>{let r=s.sort((()=>Math.random()-.5)).slice(0,a/2);r=r.concat(r).sort((()=>Math.random()-.5)).join(""),document.getElementById("suits").innerHTML=`${r}`,setTimeout((()=>{i(c,t)}),5e3)}))}!function(){let s=document.querySelector(".app");s.innerHTML='\n    <div class="wrap center">\n    <form class="choice" id="form" method = "POST" action = "#">\n        <h2 class="choice__title">\n            Выбери<br>сложность\n        </h2>\n        <div class="choice__items-wrap">\n\n            <input class="choice__item" type="radio" id="radio1" name="radios" value="6" checked>\n            <label for="radio1">1</label>\n\n            <input class="choice__item" type="radio" id="radio2" name="radios" value="12">\n            <label for="radio2">2</label>\n\n            <input class="choice__item" type="radio" id="radio3" name="radios" value="18">\n            <label for="radio3">3</label>\n        </div>\n        <button class="button choice__button" type="submit">\n            Старт\n        </button>\n    </form>\n    </div>',document.getElementById("form").addEventListener("submit",(c=>{c.preventDefault();let t=document.querySelectorAll(".choice__item");for(const c of t)c.checked&&(console.log(c.value),i(c,s))}))}()})();