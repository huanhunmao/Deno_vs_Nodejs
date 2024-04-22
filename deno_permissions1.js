
// 需手动给权限 
// Unrecognized option. Allow? [y/n/A] (y = yes, allow; n = no, deny; A = allow all env per
console.log('Hello', Deno.env.get('USER')); // Hello fhj


// 安装 deno install --allow-env deno_permissions1.js

// 之后 直接 输入 deno_permissions1 就能打印 
// Hello fhj
