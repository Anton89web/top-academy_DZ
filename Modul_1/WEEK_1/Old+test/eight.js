module.exports = function (sum, coast){
    let numberChocolate = `Вы можете купить ${Math.floor(sum / coast)} шоколадок и у Вас отстанется ${sum % coast} рубля`;
    return numberChocolate;
}