import { renderPlayingField } from './component/renderPlayingField.js'
import { renderChoicePage } from './component/renderChoicePage.js';

let appEl = document.querySelector('.app');
renderChoicePage(appEl, renderPlayingField);
