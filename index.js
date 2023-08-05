import { PlayApp } from './component/renderPlayingField.js'
import { renderChoicePage } from './component/renderChoicePage.js';

let appEl = document.querySelector('.app');
renderChoicePage(appEl, PlayApp);
