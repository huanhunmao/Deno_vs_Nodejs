
// 公共 api
const data = await fetch('https://api.thecatapi.com/v1/images/search')

console.log('fetched data', data);
// fetched data Response {
//     body: ReadableStream { locked: false },
//     bodyUsed: false,
//     headers: Headers {
//       authenticated: "false",
//       "cache-control": "post-check=0, pre-check=0",
//       "content-length": "103",
//       "content-type": "application/json; charset=utf-8",
//       date: "Mon, 22 Apr 2024 08:07:38 GMT",
//       expires: "Tue, 03 Jul 2001 06:00:00 GMT",
//       "last-modified": "Mon Apr 22 2024 08:07:38 GMT+0000 (Coordinated Universal Time)",
//       server: "Google Frontend",
//       "strict-transport-security": "max-age=15552000; includeSubDomains",
//       vary: "Origin",
//       "x-cloud-trace-context": "1d5ec65957eb78fe9163ead2a1dc5840",
//       "x-content-type-options": "nosniff",
//       "x-dns-prefetch-control": "off",
//       "x-download-options": "noopen",
//       "x-frame-options": "SAMEORIGIN",
//       "x-response-time": "44ms",
//       "x-xss-protection": "1; mode=block"
//     },
//     ok: true,
//     redirected: false,
//     status: 200,
//     statusText: "OK",
//     url: "https://api.thecatapi.com/v1/images/search"
//   }