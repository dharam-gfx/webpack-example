// src/module.js
function greet() {
    console.log('Hello from dynamically loaded module!');
  }
  
  // Expose greet globally
  window.GreetModule = { greet };
  