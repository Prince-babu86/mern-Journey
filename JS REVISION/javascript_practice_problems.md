
# JavaScript Practice Problems (Closures, Functions, Arrays, Strings, Loops, HOFs)

## 🔒 Closures

1. **Create a Counter using Closure**
   ```js
   function createCounter() {
     let count = 0;
     return function() {
       count++;
       return count;
     };
   }

   const counter = createCounter();
   console.log(counter()); // 1
   console.log(counter()); // 2
   ```

2. **Create a Function that Remembers a Value**
   ```js
   function createRemember(value) {
     return function() {
       return value;
     };
   }

   const remember = createRemember('JS');
   console.log(remember()); // Output: JS
   ```

3. **Private Variable with Get & Set**
   ```js
   function createPrivate() {
     let value = null;
     return {
       getValue: function() {
         return value;
       },
       setValue: function(newVal) {
         value = newVal;
       }
     };
   }

   const privateObj = createPrivate();
   privateObj.setValue(42);
   console.log(privateObj.getValue()); // 42
   ```

---

## 🧠 Functions

4. **Even or Odd Checker**
   ```js
   function isEven(n) {
     return n % 2 === 0;
   }

   console.log(isEven(4)); // true
   ```

5. **Function Composition**
   ```js
   const compose = (f, g) => (x) => f(g(x));

   const add2 = x => x + 2;
   const multiply3 = x => x * 3;
   const composed = compose(add2, multiply3);
   console.log(composed(5)); // 17
   ```

6. **Curried Add Function**
   ```js
   const add = a => b => a + b;
   console.log(add(2)(3)); // 5
   ```

---

## 🔁 Arrays

7. **Sum All Elements**
   ```js
   const sumArray = arr => arr.reduce((acc, val) => acc + val, 0);
   console.log(sumArray([1, 2, 3])); // 6
   ```

8. **Remove Duplicates**
   ```js
   const uniqueArray = arr => [...new Set(arr)];
   console.log(uniqueArray([1, 2, 2, 3])); // [1, 2, 3]
   ```

9. **Rotate Array Right by K**
   ```js
   function rotateRight(arr, k) {
     k = k % arr.length;
     return arr.slice(-k).concat(arr.slice(0, -k));
   }

   console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
   ```

10. **Intersection of Two Arrays**
   ```js
   function intersect(arr1, arr2) {
     return arr1.filter(value => arr2.includes(value));
   }

   console.log(intersect([1, 2, 3], [2, 3, 4])); // [2, 3]
   ```

---

## 🔡 Strings

11. **Reverse a String**
   ```js
   function reverseString(str) {
     return str.split('').reverse().join('');
   }

   console.log(reverseString("hello")); // "olleh"
   ```

12. **Check Palindrome**
   ```js
   function isPalindrome(str) {
     return str === str.split('').reverse().join('');
   }

   console.log(isPalindrome("racecar")); // true
   ```

13. **Count Vowels**
   ```js
   function countVowels(str) {
     return (str.match(/[aeiou]/gi) || []).length;
   }

   console.log(countVowels("pavani")); // 3
   ```

14. **String Compression (Run-Length Encoding)**
   ```js
   function compress(str) {
     let result = '';
     let count = 1;
     for (let i = 1; i <= str.length; i++) {
       if (str[i] === str[i - 1]) {
         count++;
       } else {
         result += str[i - 1] + count;
         count = 1;
       }
     }
     return result;
   }

   console.log(compress("aaabbcc")); // "a3b2c2"
   ```

---

## 🔄 Loops

15. **FizzBuzz**
   ```js
   for (let i = 1; i <= 100; i++) {
     let output = '';
     if (i % 3 === 0) output += 'Fizz';
     if (i % 5 === 0) output += 'Buzz';
     console.log(output || i);
   }
   ```

16. **Pyramid Pattern**
   ```js
   let n = 3;
   for (let i = 1; i <= n; i++) {
     console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
   }
   ```

17. **Sum of Digits**
   ```js
   function sumDigits(num) {
     return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
   }

   console.log(sumDigits(1234)); // 10
   ```

---

## ⚙️ Higher-Order Functions (HOFs)

18. **Custom `map` Function**
   ```js
   Array.prototype.customMap = function(callback) {
     let result = [];
     for (let i = 0; i < this.length; i++) {
       result.push(callback(this[i], i, this));
     }
     return result;
   };

   console.log([1, 2, 3].customMap(x => x * 2)); // [2, 4, 6]
   ```

19. **Filter Even Numbers**
   ```js
   const evens = [1, 2, 3, 4].filter(num => num % 2 === 0);
   console.log(evens); // [2, 4]
   ```

20. **Find Max with `.reduce()`**
   ```js
   const max = [1, 5, 2, 10].reduce((a, b) => Math.max(a, b));
   console.log(max); // 10
   ```
