import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './components';

import { DashboardPage, LoginPage } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<LoginPage />} />
                <Route path='/dashboard' element={<ProtectedRoute >
                    <DashboardPage />
                </ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
