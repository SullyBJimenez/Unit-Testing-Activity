const { expect } = require('@jest/globals');
var utils  = require('course-utilities');
var greet = utils.load('./greeting.js', 'greet');

describe('greeting', () => {

    test('outputs the correct string with name', () => {
        expect(greet('elizabeth')).toBe("Hello, elizabeth");
    });

    test('outputs the correct string without name', () => {
        expect(greet()).toBe("Hello there!");
    });

    test('outputs the correct format', () => {
        expect(greet('JOSE')).toBe("HELLO JOSE!");
    });

    test('outputs with multiple names', () =>{
        expect(greet(['Jose','Pep'])).toBe('Hello, Jose, Pep');
        expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane');
    });
})

