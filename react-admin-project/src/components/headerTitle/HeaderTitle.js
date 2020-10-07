import './headerTitle.scss';
import React from 'react';

function HeaderTitle(props) {
    return (
        <div className="header-title-row">
            <div className="left-title">
                {props.children.filter(item => item.props.name === 'left')}
            </div>
            <div className="right-wrp">
                {props.children.filter(item => item.props.name === 'right')}
            </div>
        </div>
    )
}

export default HeaderTitle;