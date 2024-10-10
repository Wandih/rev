class ServiceApi {

    Somar(num1, num2){

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("informe somente números")
        }

        return num1 + num2

    }

    Subtrair(num1, num2){

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("informe somente números")
        }

        return num1 - num2


    }

}

module.exports = new ServiceApi()