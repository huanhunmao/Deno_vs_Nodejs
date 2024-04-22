import { desc, run, task, sh } from "https://deno.land/x/drake@v1.7.0/mod.ts";

desc("Minimal Drake task");
task("hello", [], function () {
  console.log("Hello World!");
  sh('deno run --allow-env deno_permissions1.js')
});

run();


// 运行这个
// deno run -A Drakefile.js hello

// run: started
// hello: started
// Hello World!
// hello: finished (1ms)
// run: finished (1ms)
// Hello fhj