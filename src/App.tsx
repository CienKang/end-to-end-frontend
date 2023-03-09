import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './components';

import { LoginPage } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
