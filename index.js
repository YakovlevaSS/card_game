import "./style.css";
import { PlayApp } from "./component/playApp.js";
import { renderChoicePage } from './component/renderChoicePage.js';

let appEl = document.querySelector('.app');
renderChoicePage(appEl, PlayApp);
