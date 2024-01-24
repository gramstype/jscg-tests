function f () {
    return o = {
        g: function () {
            console.log('g');
        }
    }
}

var result = f();
result.g();