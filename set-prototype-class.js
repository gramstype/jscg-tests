var A = {
    f() {
        console.log('A.f');
    }
};
class B {
    constructor(name) {
        this.name = name;
    }
    f() {
        console.log('B.f');
    }
}

class C {
    f() {
        console.log('C.f');
    }
}

function f() {
    console.log('function f');
}

Object.setPrototypeOf(B.prototype, A);

var b = new B('B');
b.f(); // + B.f [A.f, B.f, C.f, function f]

 // The analysis resolves targets that are valid by inheritance via the use of 'setPrototypeOf' 