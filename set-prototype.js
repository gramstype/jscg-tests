var A = {  
    f() {  
        console.log('A.f');  
    }  
 }  
   
 var B = {  
    g() {  
        console.log('B.g');  
    }  
 }  
   
 Object.setPrototypeOf(B, A);   
 
 B.f();  