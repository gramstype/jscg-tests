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

function g() {
    console.log('function g');
}

a.g(); // + A.prototype.g [A.prototype.g, function g]

// When a function is attached/added to a prototype via assignment, our analysis adds an alias to the existing function with that name. 