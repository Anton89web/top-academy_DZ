const сurrencyConverter = require('./six');

test (`6.	Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.`,
    () => {
        expect(сurrencyConverter(34)). toBe(30.60);
    }
)