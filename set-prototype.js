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

function f() {
    console.log('function f');
}

 B.f(); // + A.f [A.f, function f]

  // The analysis resolves targets that are valid by inheritance via the use of 'setPrototypeOf' 