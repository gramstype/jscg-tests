const EventHandler = {
    on() {
      console.log('on');
    },
    off: 
        function() {
            function mid() {
                console.log('EventHandler.off.mid');
            }
            console.log('off');
        },
}

EventHandler.on();
EventHandler.off();

function mid() {
    console.log('mid');
}
class A {
    g() {
        console.log('A.g');
        EventHandler.on();
        mid();
        EventHandler.off();
    }
    h() {
        mid();
    }
}

var a = new A();
a.g();      
a.h();
