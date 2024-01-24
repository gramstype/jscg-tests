function x() {
    console.log('x');
}

function f() {
    function x() {
        console.log('f.g');
    }
    x(); // f.g
}

x(); // x
