class A {
    
    constructor(a) {
        console.log('a.A.constructor');
    }
}

class B extends A {
    constructor() {
        super();
        console.log('B.constructor')
    }
}

class C extends B {

    constructor() {
        super();
        console.log('C.constructor')
    }
}

var b = new B();

var c = new C();