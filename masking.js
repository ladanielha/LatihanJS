// return masked string
function maskify(cc) {
    return cc.length > 4 ? '#'.repeat(cc.length - 4) + cc.slice(-4) : cc;
}

// Examples
const creditCardNumber1 = "4556364607935616"
const maskedCreditCard1 = maskify(creditCardNumber1)
console.log(maskedCreditCard1)

const creditCardNumber2 = "646079356156"
const maskedCreditCard2 = maskify(creditCardNumber2)
console.log(maskedCreditCard2)

const creditCardNumber3 = "1"
const maskedCreditCard3 = maskify(creditCardNumber3)
console.log(maskedCreditCard3)

const emptyString = ""
const maskedEmptyString = maskify(emptyString)
console.log(maskedEmptyString)
