class A{
    f() {
        console.log('A.f');
    }

    g() {
        console.log('g.f');
        this.f();
    }
}

var a = new A();
a.g();