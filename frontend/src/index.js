import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './index.css';
import 'antd/dist/antd.less';
import RouteMap from './router/routeMap';

React.Component.prototype.axios = axios;
ReactDOM.render(<RouteMap/>, document.getElementById('root'));

