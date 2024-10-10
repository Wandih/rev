const {describe, it, expect} = require ('@jest/globals')
const ServiceApi = require('../src/services/api')

describe("Testando função Somar", () => {

    it("somando dois números positivos", () => {

        const result = ServiceApi.Somar(1, 2)

        expect(result).toBe(3)

    })

    it("somando 1 número e uma letra", () => {

        const result = ServiceApi.Somar(1, "a")

        expect(result).toThrow('informe somente números')

    })

})

describe("Testando função Subtrair", () => {
    
    it("subtraindo dois números positivos", () => {

        const result = ServiceApi.Subtrair(1, 2)

        expect(result).toBe(-1)

    })

    it("subtraindo 1 número e uma letra", () => {

        const result = ServiceApi.Subtrair(1, "a")

        expect(result).toThrow('informe somente números')

    })
})