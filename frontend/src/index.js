import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './index.css';
import 'antd/dist/antd.less';
import RouteMap from './router/routeMap';
import Api from './utils/api';


React.Component.prototype.$axios = axios;
React.Component.prototype.$api = Api;

ReactDOM.render(<RouteMap/>, document.getElementById('root'));

