import './BMap.scss';
import React, { useEffect }from 'react';
import BMap from 'BMap';

function Map (props) {
  const mapCenter = props.location;
  useEffect(() => {
    // 创建Map实例
    const map = new BMap.Map("bmap");
    // 初始化地图,用城市名设置地图中心点
    map.centerAndZoom(mapCenter, 16);
    //开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true); 
    // 创建地址解析器实例     
    const myGeo = new BMap.Geocoder();   
    myGeo.getPoint(mapCenter, function(point){      
      if (point) {     
        map.addOverlay(new BMap.Marker(point));  
        props.getPoint(point)
      } 
    });  
  },[mapCenter])
  return (
    <div className="b-map" id="bmap"></div>
  )
}

export default Map;