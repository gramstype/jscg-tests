class A {
    get getName() {
        console.log('A.get');
    }

    set set(a) {
        console.log('A.set');
    }
}

class B extends A {
    get() {
        console.log('B.get');
    }

    set(a) {
        console.log('B.set');
    }
}

var a = new A();
a.getName;
a.set;