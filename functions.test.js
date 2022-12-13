let {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions.js')

test('function returnTwo should return integer 2', ()=> {
    expect(returnTwo()).toBe(2)
})

test('function greeting(James) returns Hello, James', ()=> {
    expect(greeting('James')).toBe('Hello, James')
})

test('function greeting(Jill) returns Hello, Jill', ()=> {
    expect(greeting('Jill')).toBe('Hello, Jill')
})

test('adds 1 and 2 and equals 3', ()=> {
    expect(add(1,2)).toEqual(3)
})


describe('Math functions', ()=> {
    test('function multiply takes in 5 and 5 as input and returns their product', ()=> {
        expect(multiply(5, 5)).toEqual(25)
    })
    test('function divide takes in 36 and 3 and returns their division', ()=> {
        expect(divide(36, 3)).toBeGreaterThanOrEqual(12)
        expect(divide(36, 3)).toBeLessThan(13)
    })
    test('function divide takes in 36 and 3 and return value should be greater than 11', ()=> {
        expect(divide(36, 3)).toBeGreaterThan(11)
    })

    test('function subtract takes 9 and 2 and returns their difference', ()=> {
        expect(subtract(9, 2)).toEqual(7)
    })
    test('function subtract takes 11 and 11 to return not undefined', ()=> {
        expect(subtract(11, 11)).not.toBeUndefined()
    })
    test('adds 5 and 9 and equals 14', ()=> {
        expect(add(5,9)).toEqual(14)
    })
})

