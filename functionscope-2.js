function f() {
    console.log('function f');
    function g() {
        console.log('function g nested in f');
    }
}

function h() {
    console.log('function h');
    function g() {
        console.log('function g nested in h');
    }
}


g(); // + function g [function g nested in f, function g]

// Both 'g' functions are in the scope when calling g(), so the analysis considers them both as possible targets.
// Once again, the analysis is not flow sensitive, else it would resolve the target to only the 'function g'.