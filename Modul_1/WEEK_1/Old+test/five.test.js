const speed = require('./five');

test ( `5 Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.`,
    () => {
        expect(speed(250, 3)).toBe(83);
    }
);


