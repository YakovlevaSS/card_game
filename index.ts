import "./style.css";
import { renderChoicePage } from './component/renderChoicePage';

let appEl: Element | null = document.querySelector('.app');
renderChoicePage(appEl);
