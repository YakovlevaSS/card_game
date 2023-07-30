export function renderPlayingField(levelPoint, appEl) {
    const appHtml = `
    <div class="wrap">
    <div class="game-field">
    <h2 class="game-field__title">${levelPoint.value} карточек
    </h2>
    </div>
    </div>`;
    appEl.innerHTML = appHtml;
}