// read file
// const text = await Deno.readTextFile("./deno.json");

// console.log(text)
// {
//     "name":"ppx",
//     "age": 18
// }


// write file
await Deno.writeTextFile("./hello.txt", "Hello World!");

console.log("File written to ./hello.txt");

const text2 = await Deno.readTextFile("./hello.txt");
console.log(text2); // Hello World!