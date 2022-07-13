var k = function () {
    console.log('function k')
};

function f() {
    console.log('function f');
    let k = function () {
        console.log('function k\'');
    }
}

f(); 
k(); // + function k [function g, function k]

// Analysis does not 