import React from 'react';
import Topbar from '../../components/music/Topbar';
import FindMusic from '../../components/music/FindMusic';
import Ranking from '../../components/music/Ranking';
import './Index.scss';

export default class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: 'find'
        }
    }

    changeSection = section => {
        this.setState({
            section
        })
    }

    render() {
        return (
            <div id="music">
                <Topbar changeSection={this.changeSection}/>
                <FindMusic />
                <Ranking />
            </div>
        )
    }
}