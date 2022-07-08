function A () {
    this.f = function () {
        console.log('A.this.f');
    }
}

//second method uses constructor.prototype.methodName
A.prototype.g = function () {
    console.log('A.prototype.g');
};

var a = new A();

a.f();
a.g();
