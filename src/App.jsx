import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/authentication/Login';
import './index.css'

function App() {
    const [count, setCount] = useState(0)
    const Home = () => {
        return (<h1>Hello Home</h1>);
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App
