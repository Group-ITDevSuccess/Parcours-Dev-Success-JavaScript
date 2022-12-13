const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;


document.write(`<p>${one}</p>`);
document.write(`<p>${two}</p>`);
document.write(`<p>${rest}</p>`);