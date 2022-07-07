// Credits: https://www.c-sharpcorner.com/article/metaclasses-in-javascript-es6/
function createClass(...properties) {
    return class {
        constructor(...values) {
            for (const [index, property] of properties.entries()) {
                this[property] = values[index];
            }
        }

        f() {
            console.log('dynamicClass.f');
        }
        
        g() {
            console.log('dynamicClass.g');
        }
    }
}  

const A = createClass('a1', 'a2'); // o createClass [createClass]
const a = new A('dynamicClassA.a1', 'dynamicClassA.a2'); // ??
a.f(); // ??
a.g(); // ??

const B = createClass('b1', 'b2'); // o createClass [createClass]
const b = new B('dynamicClassB.b1', 'dynamicClassB.b2'); // ??
b.f(); // ??
b.g(); // ??

class C extends A {
    constructor() {
        super('dynamicClassC.c1', 'dynamicClassC.c2');
    }

    h() {
        console.log('C.h');
    }
}

const c = new C('')
c.f(); // ??    
c.g(); // ??
c.h(); // ??