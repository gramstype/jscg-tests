var A = {  
    f() {  
        console.log(this.name + ' within A.f');  
    }  
 };  
   
 class B {  
    constructor(name) {  
    this.name = name;  
   }  
 }  
   
 Object.setPrototypeOf(B.prototype, A);   
 
 var b = new B('B');  
 b.f();  