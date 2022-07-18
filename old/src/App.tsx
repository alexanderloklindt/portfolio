import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedPage from './pages/Project';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/protectedpage" element={<AuthRoute><ProtectedPage /></AuthRoute>}/>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
    );
};

export default Application;