import { Col, Row } from 'antd';
import './AvailableMaterial.scss';
import img from '../../../images/additional/pla.png';
import { FaLock } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { LiaStumbleuponCircle } from "react-icons/lia";
import { useState } from 'react';

export default function AvailableMaterial() {
    // eslint-disable-next-line
    const [data, setData] = useState(['1', '2', '3', '4', '5', '6']);
    return (
        <div className='available-material-main__content'>
            <Row gutter={[30, 20]}>
                {data && data.map((item) => <Col span={10} key={item}>
                    <div className="available-material-main__content__inner">
                        <div className="available-material-main__content__left">
                            <div className="available-material-main__content__left__status">
                                <div className="available-material-main__content__left__status__green"></div>
                                <div className="available-material-main__content__left__status__text">
                                    <span><b>Available Now</b></span>
                                </div>
                            </div>
                            <div className="available-material-main__content__left__img">
                                <img src={img} alt="img" />
                            </div>
                        </div>
                        <div className="available-material-main__content__right">
                            <div className="available-material-main__content__right__head">
                                <div className="available-material-main__content__right__head__name"><h4><b>Plastic-LDPE</b></h4></div>
                                <div className="available-material-main__content__right__head__star">
                                    <IoStarOutline />
                                </div>
                            </div>
                            <div className="available-material-main__content__right__content">
                                <div className="available-material-main__content__right__content__location">
                                    <div className="available-material-main__content__right__content__location__icon">
                                        <MdLocationOn style={{color: '#03985C'}} />
                                    </div>
                                    <div className="available-material-main__content__right__content__location__text">
                                        <span>Material Location</span>
                                        <span><b>United Kingdom</b></span>
                                    </div>
                                </div>
                                <div className="available-material-main__content__right__content__weight">
                                    <div className="available-material-main__content__right__content__weight__icon">
                                        <FaLock style={{color: '#03985C'}}/>
                                    </div>
                                    <div className="available-material-main__content__right__content__weight__text">
                                        <span>Average Weight per Load</span>
                                        <span><b>14 MT</b></span>
                                    </div>
                                </div>
                                <div className="available-material-main__content__right__content__bottom">
                                    <div className="available-material-main__content__right__content__bottom__icon">
                                        <LiaStumbleuponCircle style={{color: 'white'}}/>
                                    </div>
                                    <div className="available-material-main__content__right__content__bottom__text">
                                        <span>Material of Interest</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>)}
            </Row>
        </div>
    )
}