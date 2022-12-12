let {returnTwo, greeting, add} = require('./functions.js')

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

test('adds 5 and 9 and equals 14', ()=> {
    expect(add(5,9)).toEqual(14)
})