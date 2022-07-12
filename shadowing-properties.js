class A {
    f () {
        console.log('A.f');
    }

    g () {
        console.log('A.g');
    }
}

var a = new A();

a.g = function g () {
    console.log('function g');
}

a.f(); // o A.f [A.f]
a.g(); // + function g [A.g, function g]

// When properties are shadowed, the analysis adds new aliases to the function.