

function makeGreeter() {
    return() => "hi"
}
const greeter = makeGreeter();
console.log(greeter())