/* 
Лабораторна робота №2.1, 2.0
Гринчука Тараса
Лінійні програми
Варіант №4
*/

const a = 0.4; // Створюємо змінну і присвоюєм їй довільне значення

const z1 = (Math.sin(a) + Math.sin(5 * a) - Math.sin(3 * a)) / (Math.cos(a) - Math.cos(3 * a) + Math.cos(5 * a));
console.log("z1 = " + z1); // Виводимо результат 1-го прикладу в консоль

const z2 = Math.tan(3 * a);

const result = Math.floor(z1) === Math.floor(z2);
console.log("z2 = " + z2); // Виводимо результат 2-го прикладу в консоль

console.log("z1 = z2 : " + result);