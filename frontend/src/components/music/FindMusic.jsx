import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd';

import './FindMusic.scss';

class FindMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recommedSongsList: [],
            banners: []
        };
    }

    componentWillMount = () => {
        this.getRecommedSongs();
        this.getBanner();
    }

    getRecommedSongs = () => {
        this.$axios.get(this.$api.recommedSongsList,{
            params:{
                limit: 12
            }
        }).then(res => {
            this.setState({
                recommedSongsList: res.data.result
            })
        });
    }

    getBanner = () => {
        this.$axios.get(this.$api.banner).then(res => {
            this.setState({
                banners: res.data.banners
            })
        })
    }

    render() {

        return (
            <div id="find-music">
                <h2 className="find-title">热门专辑</h2>
                <div className="swiper">
                    <Carousel autoplay>
                        {
                            this.state.banners.map(item => (
                                <div className="banner-item" key={item.imageUrl}>
                                    <img src={item.imageUrl} />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                <h2 className="find-title">推荐歌单</h2>
                <div className="song-list">
                    {
                        this.state.recommedSongsList.map(item => (
                            <div className="recommed-item" key={item.id}>
                                <img src={item.picUrl} />
                                <p className="recommed-title">{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default FindMusic;
