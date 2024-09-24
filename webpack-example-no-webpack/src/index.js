import { MathUtils } from "./math.js";

// src/index.js
document.getElementById('load-module').addEventListener('click', function () {
    // Dynamically load module.js using <script> tag
    const script = document.createElement('script');
    script.src = '../src/module.js';
    console.log(script);
    
    document.body.appendChild(script);
  
    script.onload = function () {
      GreetModule.greet(); // Call the function after the script is loaded
    };
  });
  
  console.log(`5 + 10 = ${MathUtils.add(5, 10)}`);
  console.log(`5 * 10 = ${MathUtils.multiply(5, 10)}`);
  console.log(`5 * 10 = ${MathUtils.multiply(5, 10)}`);
  console.log(`multiply fun =`, MathUtils.multiply);
  