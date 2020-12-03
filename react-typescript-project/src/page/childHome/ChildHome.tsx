import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './childHome.scss';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import image1 from '../../static/images/fen.jpg';
import image2 from '../../static/images/bu.jpg';
import image3 from '../../static/images/jian.jpg';
import image4 from '../../static/images/zuo.jpg';
import image5 from '../../static/images/zao.png';
import { equipmentEnum } from '@/enums/enums';
SwiperCore.use([Autoplay, Pagination]);
const ChildHome: React.FC = () => {
  const history = useHistory();
  const [playAuto] = useState<boolean>(true);
  const hrefEquipment = (typeNum: number): void => {
    console.log(typeNum);
    history.push({
      pathname: '/equipmentPage'
    });
  };
  return (
    <div className="child-home-wrp">
      <Swiper
        autoplay={true}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          type: 'bullets'
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide key="a">
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide key="b">
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide key="c">
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide key="d">
          <img src={image4} />
        </SwiperSlide>
        <SwiperSlide key="e">
          <img src={image5} />
        </SwiperSlide>
      </Swiper>
      <div className="feature-wrp">
        <div className="feature-item" onClick={() => hrefEquipment(equipmentEnum['clothes'])}>
          洗衣
        </div>
        <div className="feature-item" onClick={() => hrefEquipment(equipmentEnum['shoes'])}>
          洗鞋
        </div>
        <div className="feature-item" onClick={() => hrefEquipment(equipmentEnum['dry'])}>
          烘干
        </div>
      </div>
    </div>
  );
};

export default ChildHome;
