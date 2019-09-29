import React from 'react';
import { } from 'antd';
import Topbar from '../../components/music/Topbar'
import './Index.scss';

export default class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            noticeOpen: false
        }
    }

    render() {
        return (
            <div id="music">
                <Topbar/>
            </div>
        )
    }
}