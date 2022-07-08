// Credits: https://teamtreehouse.com/community/adding-methods-to-javascript-prototypes
function A () {
    this.f = function () {
        console.log('A.this.f');
    }
}

A.prototype.g = function () {
    console.log('A.prototype.g');
};

var a = new A();

a.f();
a.g();
