import { createRoot } from 'react-dom/client'
import Abc from './App.jsx'
import {first} from "./App.jsx"

console.log(first);


createRoot(document.getElementById('root')).render(
    <Abc/>
)
