import React, {Component} from 'react';
import './HeightPage.less';

import ReactApi from '../../compontents/ReactApi/ReactApi';
import ReactLiveCycle from '../../compontents/ReactLiveCycle/ReactLiveCycle';
class HeightPage extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <div className="height-page">
                <div className="home-demo">
                    <p className="demo-title">height1:关于react api的总结整理</p>
                    <ReactApi></ReactApi>
                </div>
                <div className="home-demo">
                    <p className="demo-title">height2:关于react新旧生命周期分析</p>
                    <ReactLiveCycle></ReactLiveCycle>
                </div>
            </div>
        )
    }
}

export default HeightPage;