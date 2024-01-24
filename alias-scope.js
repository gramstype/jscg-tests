function x() {
    console.log('x');
}

function f() {
    function g () {
        var y = x;
        y();    
    }

    var g1 = g;

    function h() {
        var y = g;
        y();
    }

    var y = h;
    y();
}

var y = x;
y();

// This means: we are currrently using t.getScope().getAccessibleVars, but only using them as names. 
// Why not match functions that (a) match the name, (b) match the scope of the accessible vars?