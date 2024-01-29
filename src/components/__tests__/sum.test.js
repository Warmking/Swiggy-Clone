import { sum } from "../sum"

test('sum of the two numbers',()=>{
    const results = sum(2,9)

    //Assertion
    expect(results).toBe(11)
})