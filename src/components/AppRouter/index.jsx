import React from 'react';
import Login from '../../pages/Login/Login';
import Home from '../../pages/Main/Main';
import About from '../../pages/About/About';
import NotFound from '../../pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import Register from '../../pages/Register/Register';


function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/login" element={<Login />} />
			<Route path="/reg" element={<Register />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default AppRouter;
