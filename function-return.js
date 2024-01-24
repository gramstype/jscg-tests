function f() {
    console.log('f');
    return x = function y () {
        console.log('<anonymous-returned-function>')
    }    
}

const g = {
    h: function t () {
        console.log('h');
    }
}

var k = f();

const d = {
    a : f,
    b : f(),
    c : g.h
};


(function () {

})();

k();

f()();

f();

d.a();
d.b();
d.c();