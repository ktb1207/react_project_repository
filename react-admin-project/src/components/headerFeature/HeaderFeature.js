import './HeaderFeatrue.scss';
import React, { useState } from 'react';
import { connect } from "react-redux";
import { showLoadingAction, hideLoadingAction } from '../../store/action';
import {
    LogoutOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    UnlockOutlined
} from '@ant-design/icons';
import api from '../../api/index';
import util from '../../utils/utils';
const HeaderFeature = ({showSystemLoading, hideSystemLoading}) => {
    // 全屏状态
    const [fullScreenState, setFullScreen] = useState(false);
    const fullScreenSwitch = () => {
        if (!fullScreenState) {
            fullScreen()
        } else {
            exitScreen()
        }
        setFullScreen(!fullScreenState)
    }
    // 退出登录
    const loginOut = async()=> {
        showSystemLoading();
        const postData = {
            name: 'tom'
        }
        try {
            await api.postUserQuit(postData).then(res => {
                if(res.code === 0){
                    util.clearToken();
                }
            })
        } catch(err) {
            console.log(err)
        }
        hideSystemLoading();
        // showSystemLoading();
        // setTimeout(() => {
        //     hideSystemLoading();
        // }, 3000)
    }
    //全屏
    function fullScreen(){
        const el = document.documentElement;
        const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
        if(typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        };
        return;
    }
    // 退出全屏
    function exitScreen(){
        const el = document.documentElement;
        const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if (document.exitFullscreen) {  
            document.exitFullscreen();  
        }  
        else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
        }  
        else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
        }  
        else if (document.msExitFullscreen) {  
            document.msExitFullscreen();  
        } 
        if(typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        }
    }
    return (
        <div className="header-feature-component">
            <div className="header-left">
                后台管理系统
            </div>
            <div className="header-right">
                <div className="icon-wrp">
                    <UnlockOutlined />
                </div>
                <div className="icon-wrp" onClick={fullScreenSwitch} title={fullScreenState ? '退出全屏' : '全屏'}>
                    {
                        fullScreenState ? <FullscreenExitOutlined /> : <FullscreenOutlined />
                    }
                </div>
                <div className="icon-wrp" title="退出登录" onClick={loginOut}>
                    <LogoutOutlined />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        showSystemLoading: () => {
            dispatch(showLoadingAction())
        },
        hideSystemLoading: () => {
            dispatch(hideLoadingAction())
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(HeaderFeature)
