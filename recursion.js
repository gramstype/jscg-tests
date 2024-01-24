function g(n) {
    return (n != 1) ? n * g(n - 1) : 1;
}

function f() {
    function factorial(n) {
        return (n != 1) ? n * g(n - 1) : 1;
    }
}
  
g(5);