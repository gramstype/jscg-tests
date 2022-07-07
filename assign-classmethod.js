class A {
    f() {
        console.log('method A.f');
    }
}

class B extends A {
    f() {
        console.log('method B.f');
    }

    g() {
        console.log('method B.g');
    }
}

function f() {
    console.log('function f');
}

var a = new A();
var b = new B();

a.f = f;

a.f(); // o f [A.f, B.f, f]
b.f(); // + B.f [A.f, B.f, f]
b.g(); // o B.g [B.g]