import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import './index.css'
import Signup from './pages/authentication/Signup';
import Signin from './pages/authentication/Signin';
import VerifyMail from './pages/authentication/VerifyMail';
import LayoutUser from './pages/app/Layout';
import AppVerify from './pages/app/Verify';
import AppHome from './pages/app/Home';
import ProtectedRoute from './utils/protectedRoute';
// import jwt from 'jsonwebtoken'
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
                <Route path="/verify-email" element={<VerifyMail/>}/>
                
                {/* <Route element={<LayoutDashboard/>}>
                    <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
                    <Route path="/dashboard/soal" element={<ProtectedRoute element={<Soal />} />} />
                    <Route path="/dashboard/profile" element={<ProtectedRoute element={<Profile />} />} />
                </Route> */}

                <Route element={<LayoutUser/>}>
                    <Route path="/app" element={<ProtectedRoute element={<AppHome />} />}/>
                    <Route path="/app/verify-email" element={<ProtectedRoute element={<AppVerify />} />}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
