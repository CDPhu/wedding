import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Main from './service/main/Main';
import Register from './service/register/Register';
import Share from './service/share/Share';

import ImageMain from './assets/images/main.png';
import ImageFinished from './assets/images/finished.png';

import { PAGE } from './config/common';

import './App.css';

const preloadImages = [{ src: ImageMain }, { src: ImageFinished }];

function App() {
    useEffect(() => {
        // preloading image
        preloadImages.forEach((image) => {
            const img = new Image();
            img.src = image.src;
        });
    }, []);
    return (
        <HashRouter>
            <Routes>
                <Route path={PAGE.REGISTER.PATH} element={<Register />} />
                <Route path={PAGE.SHARE.PATH} element={<Share />} />
                <Route path={PAGE.MAIN.PATH} element={<Main />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
