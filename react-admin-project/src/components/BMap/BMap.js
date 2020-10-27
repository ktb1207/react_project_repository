import './BMap.scss';
import React, { useEffect }from 'react';
import BMap from 'BMap';

function Map () {
  useEffect(() => {
    // 创建Map实例
    const map = new BMap.Map("bmap");
    // 初始化地图,用城市名设置地图中心点
    map.centerAndZoom("北京", 11);
    //开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true);  
    map.addEventListener('click', function (e) {
      console.log('点击经纬度：' + e.point.lng + ',' + e.point.lat)
    }); 
  },[])
  return (
    <div className="b-map" id="bmap"></div>
  )
}

export default Map;