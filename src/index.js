import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'antd-mobile/es/global'

import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import App from './App';
import Seach from './pages/Seach';
import TempDetail from './pages/TempDetail';



ReactDOM.render(
  <BrowserRouter>
   
   <Route path="/pages" component={App}/>

   <Route path="/tempDetail/index/:t/:path" component={TempDetail}/>

   <Route path='/seach' component={Seach}/>
    
   <Redirect to="/pages"/>

  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

