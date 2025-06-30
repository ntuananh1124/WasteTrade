import { FaLongArrowAltDown, FaLongArrowAltRight, FaLongArrowAltUp } from "react-icons/fa";
import { Link } from "react-router";
import './MyBiddingPerformance.scss';
import { Flex, Segmented, Row, Col, Tag } from "antd";
import { useState } from "react";

export default function MyBiddingPerformance() {
    const [dayValue , setDayValue] = useState('7 DAYS');

    return (
        <div className="my-bidding-performance-main">
            <div className="my-bidding-performance-main__top">
                <div className="my-bidding-performance-main__top__name">
                    <h4>MY BIDDING PERFORMANCE</h4>
                </div>
                <div className="my-bidding-performance-main__top__see-all">
                    <Link>
                        <span><b>SEE PERFORMANCE</b></span>
                        <FaLongArrowAltRight />
                    </Link>
                </div>
            </div>
            <div className="my-bidding-performance-main__content">
                <Flex gap="middle" align="flex-start" vertical>
                    <Segmented
                        options={['7 DAYS', '30 DAYS', '60 DAYS']}
                        value={dayValue}
                        onChange={dayValue => setDayValue(dayValue)}
                        defaultValue="7 DAYS"
                    />
                    <span style={{color: '#9D9E9E'}}>Compared to last {dayValue}</span>
                    <div className="my-bidding-performance-main__content__performance" style={{width: '100%'}}>
                        <Row gutter={50} justify={"space-between"} >
                            <Col span={8}>
                                <div className="my-bidding-performance-main__content__performance__status">
                                    <span className="my-bidding-performance-main__content__performance__status__name-accepted">ACCEPTED</span>
                                    <span className="my-bidding-performance-main__content__performance__status__percentage">36%</span>
                                    <Tag color="#FADBDF" style={{color: '#EF8491', width: 'fit-content'}}>
                                        <FaLongArrowAltDown />
                                        <span className="my-bidding-performance-main__content__performance__status__percentage-down">25%</span>
                                    </Tag>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="my-bidding-performance-main__content__performance__status">
                                    <span className="my-bidding-performance-main__content__performance__status__name-rejected">REJECTED</span>
                                    <span className="my-bidding-performance-main__content__performance__status__percentage">44%</span>
                                    <Tag color="#D7FEEF" style={{color: '#03985C', width: 'fit-content'}}>
                                        <FaLongArrowAltUp />
                                        <span className="my-bidding-performance-main__content__performance__status__percentage-down">20%</span>
                                    </Tag>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="my-bidding-performance-main__content__performance__status">
                                    <span className="my-bidding-performance-main__content__performance__status__name-pending">PENDING</span>
                                    <span className="my-bidding-performance-main__content__performance__status__percentage">20%</span>
                                    <Tag color="#D7FEEF" style={{color: '#03985C', width: 'fit-content'}}>
                                        <FaLongArrowAltUp />
                                        <span className="my-bidding-performance-main__content__performance__status__percentage-down">35%</span>
                                    </Tag>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Flex>
            </div>
        </div>
    )
}