// import promptSync from 'prompt-sync';

// const prompt = promptSync();

// const tinggi = parseFloat(prompt("T : "));
// const jariJari = parseFloat(prompt("R : "));


// const luasPermukaan = 2 * 3.14 * jariJari * (jariJari + tinggi);

// console.log(`Output: ${luasPermukaan}`);

// dengan menggunakan let

let  t: number = 20
let  r: number = 4

const total = 2 * 3.14 * r * (r + t);
const input: string = "T = 20 , R = 4 "

console.log(`Input `,input);
console.log(`output`,total);

