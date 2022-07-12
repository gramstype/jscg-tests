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

const A = createClass('a1', 'a2'); 
class B extends A {
    constructor() {
        super('dynamicClassC.c1', 'dynamicClassC.c2');
    }

    g() {
        console.log('B.g');
    }
}

function g() {
    console.log('function g');
}

const b = new B();

b.f(); // o dynamicClass.f [dynamicClass.f]
b.g(); // + B.g [dynamicClass.g, B.g, function g]

// When dynamic classes are instantiated or extended and instantiated, calls to their functions are resolved only by name. 