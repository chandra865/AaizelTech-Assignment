/*
Flatten a Nested Object

Write a recursive function to flatten deeply nested objects.

   Example:
   const input = {
     a: 1,
     b: {
       c: 2,
       d: {
         e: 3,
       },
     },
   };

   // Output: { 'a': 1, 'b.c': 2, 'b.d.e': 3 }

*/

function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
    return result;  
}

const input = {
  a: 1,
    b: {
    c: 2,
    d: {
        e: 3,
    },
    },
};
console.log(flattenObject(input)); 
// Output: { 'a': 1, 'b.c': 2, 'b.d.e': 3 }
