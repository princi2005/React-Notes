 json stringify() => "JavaScript me data object, array, string, number ya boolean kisi bhi form me ho sakta hai. Agar API application/json format me data accept karti hai, to hum JSON.stringify() se JavaScript data ko JSON string me convert karke server ko bhejte hain. Server response bhi usually JSON format me deta hai, jise response.json() ya JSON.parse() se dobara JavaScript object ya array me convert kar lete hain. Lekin JSON.stringify() hamesha use nahi hota. Agar hum file upload ya FormData bhej rahe hain, to uski zarurat nahi hoti."

 JSON => (JavaScript Object Notation) ek lightweight data-interchange format hai. Iska use client aur server ke beech data exchange karne ke liye hota hai. Ye human-readable hota hai aur language-independent hai, isliye almost sabhi programming languages ise support karti hain. Most REST APIs data ko JSON format me send aur receive karti hain.SON ek common data format hai jiska use client aur server ke beech data exchange karne ke liye kiya jata hai. Ye lightweight, human-readable aur language-independent hota hai, isliye almost sabhi programming languages ise support karti hain."

 API ek bridge (medium) hai jo client aur server ke beech communication karwata hai. Iske through hum data ko fetch, create, update aur delete kar sakte hain.

 Rest ➜ Collect karta hai (...args)
Spread ➜ Expand karta hai (...array, ...object)

Block scope aur local scope same nahi hote. Block scope {} tak limited hota hai, jabki local scope function tak limited hota hai. Function ke andar bana variable local scope me hota hai, aur let aur const block scope follow karte hain

Closure JavaScript ka ek feature hai jisme inner function apne outer function ke variables ko access kar sakta hai, even agar outer function execute hokar complete ho chuka ho. Ye lexical scope ki wajah se possible hota hai. Closures ka use data hiding, private variables aur callbacks me hota hai

"Lexical scope ki wajah se inner function ko outer function ke variables ka access milta hai. Jab outer function complete ho jata hai, tab closure un variables ko memory me preserve rakhta hai, isliye inner function baad me bhi unhe access kar pata hai."

Ek line me yaad rakho:
Lexical Scope = Access kis variable ka milega.
Closure = Un variables ko baad me bhi yaad rakhna

Hoisting JavaScript ka behavior hai jisme variable aur function declarations ko execution se pehle memory me register kar diya jata hai.
Q. Why can function declarations be called before they are defined, but arrow functions cannot?

Answer:

Function declarations are hoisted with their entire function body. Arrow functions are function expressions stored in variables, so they can only be used after the variable has been initialized.
| Topic                       | `var`       | `let`            | `const`          | `function`          |
| --------------------------- | ----------- | ---------------- | ---------------- | ------------------- |
| Hoisted?                    | ✅ Yes       | ✅ Yes            | ✅ Yes            | ✅ Yes               |
| Memory me kya jata hai?     | `undefined` | Variable (TDZ)   | Variable (TDZ)   | Pura function       |
| Initialization              | `undefined` | Nahi             | Nahi             | Already initialized |
| Declaration se pehle access | ✅ Haan      | ❌ Nahi           | ❌ Nahi           | ✅ Haan              |
| Error                       | `undefined` | `ReferenceError` | `ReferenceError` | Koi error nahi      |


Nahi. JavaScript me var, let, const aur function declarations sab hoist hote hain. Difference ye hai ki var undefined ke saath initialize hota hai, let aur const Temporal Dead Zone (TDZ) me rehte hain isliye declaration se pehle access nahi kiye ja sakte, aur function declarations ko declaration se pehle bhi call kiya ja sakta hai."

"Normal function aur arrow function me sabse bada difference this keyword ka hai. Normal function ka apna this hota hai jo function ko call karne wale object ko refer karta hai. Arrow function ka apna this nahi hota, balki wo lexical this use karta hai, yani parent scope se this inherit karta hai. Isi wajah se object methods me normal function zyada prefer kiya jata hai."Lexical this ka matlab hai ki arrow function ka apna this nahi hota. Wo apne parent (outer scope) ka this use karta hai.

Explicit return me hum return keyword explicitly likhte hain. Implicit return me arrow function bina return keyword ke automatically expression ka result return kar deta hai. Implicit return sirf single expression ke liye use hota hai."

"IIFE ka full form Immediately Invoked Function Expression hai. Ye ek function hota hai jo define hote hi immediately execute ho jata hai. Iska use private scope create karne aur global scope pollution ko avoid karne ke liye kiya jata hai." or semicoolen is compulsory

| Method     | Kis par use hota hai?   | Kya deta hai? |
| ---------- | ----------------------- | ------------- |
| `map()`    | Array                   | Naya array    |
| `for...of` | Array, String, Map, Set | Values        |
| `for...in` | Object (main use)       | Keys          |
 

 dom
 DOM (Document Object Model) ek programming interface hai jo HTML document ko tree structure ke form me represent karta hai. JavaScript DOM ki help se HTML elements ko access, modify, add, delete aur style change kar sakti hai.

Simple Language

Jab browser HTML file ko load karta hai, to wo uska DOM Tree bana deta hai. JavaScript isi tree ke through webpage ko change karti hai.
DOM Tree HTML document ka hierarchical (tree-like) representation hota hai, jisme har HTML tag ek Node hota hai.
nterview Point

Har HTML element ek Node hota hai.

Node types:

Document Node
Element Node (<div>, <h1>)
Text Node ("Hello")
Attribute Node (id, class)

DOM aur BOM me difference?

DOM webpage ke HTML elements ko manage karta hai aur uska entry point document hota hai. BOM browser ko manage karta hai, jaise window, location, history, aur navigator, aur uska entry point window hota hai.

HTMLCollection ek live collection hoti hai, isliye DOM change hone par automatically update ho jati hai. NodeList (jo querySelectorAll() return karta hai) static hoti hai, isliye DOM change hone ke baad automatically update nahi hoti.[] ise access krna h

Ab yahan children property use ki gayi hai.

children hamesha HTMLCollection return karti hai.

Kya V8 Engine browser ka part hai?

Haan. V8 Engine Chrome browser ka JavaScript engine hai. Ye browser ka ek component hai jo JavaScript code ko execute karta hai

Yes, JavaScript has classes. Classes were introduced in ES6. They provide a cleaner and easier syntax for creating objects and implementing inheritance. However, JavaScript is fundamentally prototype-based, so classes are syntactic sugar over the prototype-based inheritance system.

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/