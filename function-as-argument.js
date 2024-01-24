function f(someFunction) {
    console.log('f');
    someFunction();
}

function g() {
    console.log('g');
}

f(g);