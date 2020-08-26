import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import './home.scss'
import './home.less'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sildeArr: [
        {
          id: '1',
          src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2063136626,2651869031&fm=15&gp=0.jpg',
          title: '图片1',
          linkUrl: 'https://www.baidu.com/'
        },
        {
          id: '2',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598348464899&di=f881f20819a17e12937ec25856c1baf0&imgtype=0&src=http%3A%2F%2Fimgs.sgss8.com%2F20170213%2F1552399712.jpg',
          title: '图片2',
          linkUrl: 'https://www.sina.com.cn/'
        },
        {
          id: '3',
          src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3115071029,1356959478&fm=26&gp=0.jpg',
          title: '图片3',
          linkUrl: 'https://www.weibo.com/login.php'
        }
      ],
      featureArr: [
        {
          id:'music',
          name: '音乐',
          routeName: 'music'
        },
        {
          id:'sport',
          name: '体育',
          routeName: 'sport'
        },
        {
          id:'news',
          name: '新闻',
          routeName: 'news'
        },
        {
          id:'map',
          name: '地图',
          routeName: 'map'
        }
      ]
    }
  }
  render() {
    return (
      <div className="auto-page home-page">
        {/* silder */}
        <div className="silde-wrp">
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {
              this.state.sildeArr.map(val => (
                <a 
                  key={val.id}
                  href={val.linkUrl}
                  className="slider-block-a"
                >
                  <img 
                    src={val.src}
                    alt="img"
                    className="slide-img"
                  />
                </a>
              ))
            }
          </Carousel>
        </div>
        {/* 功能模块 */}
        <div className="home-feature-wrp">
          {
            this.state.featureArr.map(item => (
              <div className="feature-squre" key={item.id}>
                <div className="squre-item">{item.name}</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
export default Home;