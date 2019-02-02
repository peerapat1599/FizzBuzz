const fizzbuzz = require('./fizzbuzz');

test('1.Number is returned if not multiple of 3 or 5', ()=> {
    expect(fizzbuzz(4)).toBe("4")
    expect(fizzbuzz(7)).toBe("7")
    expect(fizzbuzz(8)).toBe("8")

})
test('2.Returns "Fizz" for multiples of 3', ()=> {
    expect(fizzbuzz(3)).toBe("Fizz")
    expect(fizzbuzz(6)).toBe("Fizz")
    expect(fizzbuzz(9)).toBe("Fizz")

})
test('3.Returns "Buzz" for multiples of 5', ()=> {
    expect(fizzbuzz(5)).toBe("Buzz")
    expect(fizzbuzz(10)).toBe("Buzz")
    expect(fizzbuzz(20)).toBe("Buzz")
   
})
test('4.Returns "FizzBuzz" for multiples of 3 and 5', ()=> {
    expect(fizzbuzz(15)).toBe("FizzBuzz")
    expect(fizzbuzz(30)).toBe("FizzBuzz")
    expect(fizzbuzz(45)).toBe("FizzBuzz")
   
})
test('5.Requirement 2 :  A number is "Fizz" if it is divisible by 3 or if it has a 3 in it', ()=> {
    expect(fizzbuzz(13)).toBe("Fizz")
    expect(fizzbuzz(23)).toBe("Fizz")
    expect(fizzbuzz(33)).toBe("Fizz")

})
test('6.Requirement 2 :  A number is "Buzz" if it is divisible by 5 or if it has a 5 in it', ()=> {
    expect(fizzbuzz(25)).toBe("Buzz")
    expect(fizzbuzz(35)).toBe("Buzz")
    expect(fizzbuzz(55)).toBe("Buzz")
   
})