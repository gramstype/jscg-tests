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

a.f(); // o Expect target: A.f
b.f(); // + Expect target: A.f, B.f, function f
b.g(); // o Expect target: B.g