'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [80325, 55275, 8746650, 3000000, 45672375, 225, 54675];
		assert.strictEqual(euclid(...[...temp, ...temp, ...temp, ...temp, ...temp]), euclid(...temp));
	});
	
	QUnit.test('Функция должна правильно обрабатывать отсутствие аргументов', function (assert) {
		assert.strictEqual(euclid(), undefined);
	});

	QUnit.test('Функция должна правильно находить НОД нескольких натуральных чисел', function (assert) {
		assert.strictEqual(euclid(14641, 121, 44, 161051), 11, 'euclid(14641, 121, 44, 161051)=== 11');
		assert.strictEqual(euclid(135, 945, 255, 1215), 15, 'euclid(135, 945, 255, 1215))=== 15');
		assert.strictEqual(euclid(69, 1173, 115, 345), 23, 'euclid(69, 1173, 115, 345)=== 23');
		assert.strictEqual(euclid(222, 9324, 4662, 2331, 20979, 40404, 242424,6327), 111, 'euclid(222, 9324, 4662, 2331, 20979, 40404, 242424,6327) === 111');
		assert.strictEqual(euclid(1092, 312, 1248, 15288, 2028, 51012), 156, 'euclid(1092, 312, 1248, 15288, 2028, 51012) === 156');
	});
	
	QUnit.test('Функция должна выводить одинаковый результат независимо от порядка аргументов', function (assert) {
		assert.strictEqual(euclid(2, 4, 8, 16 ), euclid(8, 2, 16, 4 ), 'euclid(2, 4, 8, 16 ) === euclid(8, 2, 16, 4 )');
		assert.strictEqual(euclid(22, 144, 166), euclid(166, 22, 144), 'euclid(22, 144, 166) === euclid(166, 22, 144)');
		assert.strictEqual(euclid(17, 13, 34), euclid(17, 13, 34), 'euclid(17, 13, 34) === euclid(17, 13, 34)');
		assert.strictEqual(euclid(121, 44, 14641, 161051), euclid(14641, 121, 44, 161051), 'euclid(121, 44, 14641, 161051) === euclid(14641, 121, 44, 161051)');
		assert.strictEqual(euclid(15765, 346543, 3456543), euclid(3456543, 346543, 15765), 'euclid(15765, 346543, 3456543) === euclid(3456543, 346543, 15765)');
	});
});
