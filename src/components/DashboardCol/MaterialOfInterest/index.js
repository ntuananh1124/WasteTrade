import { FaLongArrowAltRight, FaLock } from "react-icons/fa";
import { Link } from "react-router";
import { IoStarOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import './MaterialOfInterest.scss';
import { Button, Col, Row } from "antd";
import img from '../../../images/additional/Baled-LDPE1.jpg';

export default function MaterialOfInterest() {
    return (
        <div className="material-interest-main">
            <div className="material-interest-main__top">
                <div className="material-interest-main__top__name">
                    <h4>MATERIAL OF INTEREST</h4>
                </div>
                <div className="material-interest-main__top__see-all">
                    <Link>
                        <span><b>SEE ALL MATERIAL OF INTEREST</b></span>
                        <FaLongArrowAltRight />
                    </Link>
                </div>
            </div>
            <div className="material-interest-main__content">
                <Row gutter={30}>
                    <Col span={12}>
                        <div className="material-interest-main__content__inner">
                            <div className="material-interest-main__content__left">
                                <div className="material-interest-main__content__left__status">
                                    <div className="material-interest-main__content__left__status__green"></div>
                                    <div className="material-interest-main__content__left__status__text">
                                        <span><b>Available Now</b></span>
                                    </div>
                                </div>
                                <div className="material-interest-main__content__left__img">
                                    <img src={img} alt="img" />
                                </div>
                            </div>
                            <div className="material-interest-main__content__right">
                                <div className="material-interest-main__content__right__head">
                                    <div className="material-interest-main__content__right__head__name"><h4><b>Plastic-LDPE</b></h4></div>
                                    <div className="material-interest-main__content__right__head__star">
                                        <IoStarOutline />
                                    </div>
                                </div>
                                <div className="material-interest-main__content__right__content">
                                    <div className="material-interest-main__content__right__content__location">
                                        <div className="material-interest-main__content__right__content__location__icon">
                                            <MdLocationOn style={{color: '#03985C'}} />
                                        </div>
                                        <div className="material-interest-main__content__right__content__location__text">
                                            <span>Material Location</span>
                                            <span><b>United Kingdom</b></span>
                                        </div>
                                    </div>
                                    <div className="material-interest-main__content__right__content__weight">
                                        <div className="material-interest-main__content__right__content__weight__icon">
                                            <FaLock style={{color: '#03985C'}}/>
                                        </div>
                                        <div className="material-interest-main__content__right__content__weight__text">
                                            <span>Average Weight per Load</span>
                                            <span><b>14 MT</b></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="material-interest-main__content__inner">
                            <div className="material-interest-main__content__left">
                                <div className="material-interest-main__content__left__status">
                                    <div className="material-interest-main__content__left__status__green"></div>
                                    <div className="material-interest-main__content__left__status__text">
                                        <span><b>Available Now</b></span>
                                    </div>
                                </div>
                                <div className="material-interest-main__content__left__img">
                                    <img src={img} alt="img" />
                                </div>
                            </div>
                            <div className="material-interest-main__content__right">
                                <div className="material-interest-main__content__right__head">
                                    <div className="material-interest-main__content__right__head__name"><h4><b>Plastic-PP</b></h4></div>
                                    <div className="material-interest-main__content__right__head__star">
                                        <IoStarOutline />
                                    </div>
                                </div>
                                <div className="material-interest-main__content__right__content">
                                    <div className="material-interest-main__content__right__content__location">
                                        <div className="material-interest-main__content__right__content__location__icon">
                                            <MdLocationOn style={{color: '#03985C'}} />
                                        </div>
                                        <div className="material-interest-main__content__right__content__location__text">
                                            <span>Material Location</span>
                                            <span><b>United Kingdom</b></span>
                                        </div>
                                    </div>
                                    <div className="material-interest-main__content__right__content__weight">
                                        <div className="material-interest-main__content__right__content__weight__icon">
                                            <FaLock style={{color: '#03985C'}}/>
                                        </div>
                                        <div className="material-interest-main__content__right__content__weight__text">
                                            <span>Average Weight per Load</span>
                                            <span><b>18 MT</b></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="material-interest-main__bottom">
                <div className="material-interest-main__bottom__btn">
                    <Link>
                        <Button className="custom-btn">
                            LIST WANTED MATERIAL
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}