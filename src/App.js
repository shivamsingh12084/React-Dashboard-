import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import Ecommerce from './pages/Ecommerce';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Orders from './pages/Orders';
import Employees from './pages/Employees';
import Customers from './pages/Customers';

import Kanban from './pages/Kanban';
import Editor from './pages/Editor';
import Calender from './pages/Calender';

import ColorPicker from './pages/ColorPicker';
import Line from './pages/Charts/Line';
import Area from './pages/Charts/Area';
import Bar from './pages/Charts/Bar';
import Pie from './pages/Charts/Pie'
import Doughnut from './components/Charts/Pie';
import Financial from './pages/Charts/Financial';
import ColorMapping from './pages/Charts/ColorMapping';
import Pyramid from './pages/Charts/Pyramid';
import Stacked from './components/Charts/Stacked';
import ThemeSettings from './components/ThemeSettings';

import { useStateContext } from './contexts/ContextProvider';


 


import './App.css'

function App() {

    const {activeMenu, setActiveMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();
   

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ""}>
          <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
              <div className="fixed right-4 bottom-4" style={{ zIndex: '1000', }}>
                <TooltipComponent
                  content="Settings"
                  position="Top"
                >
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: '50%' }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <FiSettings />
                  </button>
    
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
              <div
                className={
                  activeMenu
                    ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                    : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                }
              >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                  <Navbar />
                </div>
                <div>
                  {themeSettings && <ThemeSettings /> }
    
                  <Routes>
                    {/* dashboard  */}
                    <Route path="/" element={(<Ecommerce />)} />
                    <Route path="/ecommerce" element={(<Ecommerce />)} />
    
                    {/* pages  */}
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />
    
                    {/* apps  */}
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/calendar" element={<Calender />} />
                    <Route path="/color-picker" element={<ColorPicker />} />
    
                    {/* charts  */}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/color-mapping" element={<ColorMapping />} />
                    <Route path="/pyramid" element={<Pyramid />} />
                    <Route path="/stacked" element={<Stacked />} />
    
                  </Routes>
                </div>
                
                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </div>
      );
    };

export default App
