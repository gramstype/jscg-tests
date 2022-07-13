function f() {
    console.log('function f');
    
    var g = function () {
        console.log('function g nested in f');
    }
    g(); // o function g nested in f [function g nested in f]
}

function g() {
    console.log('function g');
}

f();
g(); // o function g [function g]

// Both 'g' functions are in the scope when calling g(), so the analysis considers them both as possible targets.
// Once again, the analysis is not flow sensitive, else it would resolve the target to only the 'function g'.