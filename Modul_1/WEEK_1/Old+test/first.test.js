const name = require('./first');

test (
    ` 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».`,
    () => {
        expect(name('Антон')).toBe('Привет, Антон !' );
    }
);