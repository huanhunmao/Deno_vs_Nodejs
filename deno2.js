
// 试试 deno api 
// 拿到 传的第一个参数
const food = Deno.args[0]

if(food === 'love' && food === 'hate'){
    console.log('good ✅'); 
} else if( food === 'love'){
        // deno run deno2.js 'love' 'hate'
        // deno run deno2.js 'love' 
    console.log('hahhaha 😊');
}else{
    // deno run deno2.js 
    console.log('bad 🙅');
}