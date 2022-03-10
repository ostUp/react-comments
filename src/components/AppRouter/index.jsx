import React from 'react';
import Login from '../../pages/Login/Login';
import Home from '../../pages/Main/Main';
import About from '../../pages/About/About';
import NotFound from '../../pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';


function AppRouter() {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default AppRouter;
