import "./style.css";
import { PlayApp } from "./component/playApp";
import { renderChoicePage } from './component/renderChoicePage';

let appEl: Element | null = document.querySelector('.app');
renderChoicePage(appEl, PlayApp);
