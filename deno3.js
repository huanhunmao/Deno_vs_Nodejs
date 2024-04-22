
function error(){
    console.log('error',Deno.errors.BadResource); // error [class BadResource extends Error]
}

error()

