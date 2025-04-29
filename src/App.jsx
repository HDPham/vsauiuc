import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { HashRouter, Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Vcn from './pages/Vcn';
import Contact from './pages/Contact';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMap,
  faLocationArrow,
  faCalendarAlt,
  faClock,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import MainLayout from './layouts/MainLayout';
import HeaderLayout from './layouts/HeaderLayout';

library.add(faMap, faLocationArrow, faCalendarAlt, faClock, faUserCircle);

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="events" element={<Events />} />
          </Route>
          <Route path="vcn" element={<Vcn />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
