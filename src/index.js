import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './task1/Profile';
import Stats from './task2/Stats';
import FriendList from './task3/FriendList';
import reportWebVitals from './reportWebVitals';
import TableList from './task4/Table';


ReactDOM.render(
  <React.StrictMode>
    <Profile />
    <Stats/>
    <FriendList />
<TableList/>
  </React.StrictMode>,
  document.getElementById('root')
);