const EventHandler = {
    on() {
      console.log('on');
    },
    off: 
        function() {
            console.log('off');
        }
    
}

EventHandler.on();
EventHandler.off();

class A {
    g() {
        console.log('A.g');
        EventHandler.on();
        EventHandler.off();
    }
}

var a = new A();
a.g();
