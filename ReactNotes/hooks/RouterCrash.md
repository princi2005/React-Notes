1. React Router kya hai?
React Router ek library hai jo React application me different URLs/pages ke beech navigation karne ke liye use hoti hai.
Without React Router, hume manually decide karna padta ki URL ke according kya component dikhana hai.

3. Sabse important imports
React Router me commonly ye cheezein use hoti hain:
import {
    BrowserRouter,
    Routes,
    Route,
    Link, isme a tag isliye use nhi krte kyuki refresh kr deta h link refresh nhi krta, Link React Router ka ek component hai jo application ke different routes/pages par navigate karne ke liye use hota hai, bina poori webpage ko reload kiye. <Link to="/">
    NavLink,
    useNavigate,
    useParams,
    useLocation,
    Navigate
} from "react-router-dom";

Ye sab alag-alag kaam karte hain.