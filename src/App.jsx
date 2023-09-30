import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Signup from './pages/authentication/Signup';
import Signin from './pages/authentication/Signin';

function App() {
    const Home = () => {
        return (<h1>Hello Home</h1>);
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </Router>
    )
}

export default App
