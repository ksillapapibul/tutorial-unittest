var Multiply = require('../function/multiply.js')
describe('test multiply number',()=>{
    it('return 6 when send 3,2',()=>{
        expect(Multiply(3,2)).toBe(6)
    })
})