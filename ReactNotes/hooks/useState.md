what is react 

=> useState is a React Hook used to manage state in a functional component. It returns the current state value and a setter function to update that state. Whenever the state changes, React re-renders the component.
=> useState React ka built-in Hook hai.
=> Functional component = JavaScript ka ek function jo UI return karta hai.
=> State = component ka aisa data jo time ke saath change ho sakta hai aur change hone par UI bhi update honi chahiye.
=> useState() kya return karta hai?
1. Current state value
2. State ko update karne wala function

Setter Function kya hota hai?
setCount ko setter function kehte hain.
Iska kaam hai state ko update karna.
Kyuki setter React ko batata hai ki state change hui hai aur UI ko update karna hai.

example 
import {useState} from react
function Counter(){
    const [count , setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onclick = {() => setCount(count+1)}>
                increase </button>
        </>
    );
}
steps 
Step 1 — Component render hota hai
React Counter() ko run karta hai.

Step 2 — React state ko remember karta hai
React internally count ki state ko maintain karta hai.
count = 0
Important: React state ko component ke renders ke beech remember karta hai.

Step 3 — useState 2 cheezein deta hai
count
setCount
count    → current state
setCount → state update karne ka function

Step 4 — UI render hoti hai
{count}
ki value: 0 hai.
Screen:0

Step 5 — User button click karta hai
onClick={() => setCount(count + 1)}
Suppose count = 0
To:setCount(0 + 1);
ya:setCount(1);

Step 6 — React ko state update ka signal milta hai
Setter function React ko batata hai:
State ko update karna hai.
Old state:0
New state:1

Step 7 — React component ko re-render karta hai
React component ko dobara render karta hai.
Counter()
   ↓
useState(...)
   ↓
current state = 1
Ab count:1


Step 8 — UI update hoti hai
Pehle:0
Ab:1
React required UI change ko update karta hai.

Complete flow:
Initial Render
      ↓
useState(0)
      ↓
count = 0
      ↓
UI → 0
      ↓
User clicks
      ↓
setCount(1)
      ↓
React state update
      ↓
React re-renders component
      ↓
count = 1
      ↓
UI → 1

9. Normal Variable vs State

Ye interview me bahut important hai.

Normal variable:
let count = 0;
count++;
Value change ho sakti hai, lekin React ko automatically pata nahi chalega ki UI update karni hai.

State:
const [count, setCount] = useState(0);
setCount(count + 1);
Yaha React ko state update ka pata chalta hai aur component re-render hota hai.

Yaad rakho:
Normal variable
→ value change
→ React ko state update ka signal nahi

State
→ setter se update
→ React ko signal
→ re-render
→ UI update

10. State ko directly change kyu nahi karte?
❌
count = count + 1;
✅
setCount(count + 1);
Setter use karne se React ko state update ke process me participate karne ka mauka milta hai.
Isliye React state ko setter function ke through update karte hain.

13. setState ka important behavior
Agar new state previous state par depend karti hai, to functional update useful hota hai:
setCount(prevCount => prevCount + 1);
1. useState = React ka built-in Hook
2. Functional Component = function jo UI return karta hai
3. State = component ka changing data
4. useState(initialValue) = state create karta hai
5. [count, setCount] = current value + setter function
6. setCount() = state update karne ke liye
7. State update → React re-render → UI update