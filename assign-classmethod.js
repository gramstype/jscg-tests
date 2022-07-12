class A {
    f() {
        console.log('A.f');
    }
}

class B extends A {
    f() {
        console.log('B.f');
    }

    g() {
        console.log('B.g');
    }
}

function f() {
    console.log('function f');
}

var a = new A();
var b = new B();

a.f = f;

a.f(); // + f [A.f, B.f, f, B.g]
b.f(); // + B.f [A.f, B.f, f, B.g]
b.g(); // o B.g [B.g]

a.f = b.g;

a.f(); // + B.g [A.f, B.f, f, B.g]
b.f(); // + B.f [A.f, B.f, f, B.g]
b.g(); // o B.g [B.g]

// All 'f's have an alias 'g', so a.f() / b.f() will have all 'f's and all 'g's as targets. 
// This is true at any point in the program, even before assignment of the alias, as our analysis is not flow-sensitive. 