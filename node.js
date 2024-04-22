
// node node.js 
// ❌ ReferenceError: window is not defined
// console.log('window', window);


// 可打印出 global 内容 但 缺少 浏览器 window 一些内容 比如 fetch 导致 每次需手动安装
console.log('global', global); 