import React from 'react'
import { Outlet, ReactLocation, Router } from 'react-location';
import About from './pages/about/About';
import Game from './pages/game/Game';
import Home from './pages/home/Home';
const location = new ReactLocation();
const Main = () => {
    const routes = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/game",
            element: <Game />
        },
        {
            path: "about",
            element: <About />,
        },
    ]
    return (
        <Router location={location} routes={routes}>
            <Outlet />
        </Router>
    )
}

export default Main
