const { expect, test, describe } = require("@jest/globals");
const { suitCardArray } = require("./component/cardArray");
const { coverCardArr } = require("./component/cardArray");

describe('Проверяет созданный исходный массив карт мастями вверх',() => {

    test('массив не пустой',() => {
        expect(suitCardArray).not.toBeNull()
    })

    test('длина массива 36',() => {
        expect(suitCardArray).toHaveLength(36)
    })
})

describe('Проверяет созданный исходный массив карт рубашками вверх',() => {

    test('массив не пустой',() => {
        expect(coverCardArr).not.toBeNull()
    })

    test('длина массива 36',() => {
        expect(coverCardArr).toHaveLength(36)
    })

    test('массив включает в себя строку',() => {
        expect(coverCardArr).toContain('<img src="./static/img/рубашка.png" class="cover-card" data-index="0">')
    })
})