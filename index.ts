import './style.css'
import { renderChoicePage } from './component/renderChoicePage'

const appEl: Element | null = document.querySelector('.app')
renderChoicePage(appEl)
