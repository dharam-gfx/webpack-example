// src/index.js
import { add, multiply } from './math';  // Tree shaking removes unused imports

console.log(`5 + 10 = ${add(5, 10)}`);
console.log(`5 * 10 = ${multiply(5, 10)}`);

// const myfun =  function () { return multiply };
// console.log(`multiply fun =`, multiply, myfun);

// Dynamically load the module with Webpack's import()
document.getElementById('load-module').addEventListener('click', () => {
  import('./module').then(module => {
    module.greet();  // Loaded dynamically
  });
});

