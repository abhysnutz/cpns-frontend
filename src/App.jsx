import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import './index.css'
import Signup from './pages/authentication/Signup';
import Signin from './pages/authentication/Signin';
import VerifyMail from './pages/authentication/VerifyMail';
import LayoutUser from './pages/app/Layout';
import AppVerify from './pages/app/Verify';
import AppHome from './pages/app/Home';
import ProtectedRoute from './utils/ProtectedRoute';
import AppAccount from './pages/app/Account';
import ForgotPassword from './pages/authentication/ForgotPassword';
import ResetPassword from './pages/authentication/ResetPassword';
import NotFound from './components/NotFound';

function App() {
    const Home = () => {
        return (<h1>Hello Home</h1>);
    }

    return (
        <Router>
            <Routes>
                <Route path='*' element={<NotFound/>}/>
                <Route path="/" element={<Home/>}/>

                {/* START AUTHENTIKASI */}
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/reset-password/:signature" element={<ResetPassword/>}/>
                <Route path="/verify-email" element={<VerifyMail/>}/>
                {/* END AUTHENTIKASI */}

                {/* START APP */}
                <Route element={<LayoutUser/>}>
                    <Route path="/app" element={<ProtectedRoute element={<AppHome />} />}/>
                    <Route path="/app/akun" element={<ProtectedRoute element={<AppAccount />} />}/>
                    <Route path="/app/verify-email" element={<ProtectedRoute element={<AppVerify />} />}/>
                </Route>
                {/* END APP */}

                {/* 404 */}
            </Routes>
        </Router>
    )
}

export default App
