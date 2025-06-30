import { Col, Row } from "antd";
import { getCookie } from "../../helpers/cookie";
import './Home.scss';
import Revenue from "../../components/DashboardCol/Revenue";
import MySites from "../../components/DashboardCol/MySites";
import MyOffers from "../../components/DashboardCol/MyOffers";
import MyOffersPerformance from "../../components/DashboardCol/MyOffersPerformance";
import MyBiddingPerformance from "../../components/DashboardCol/MyBiddingPerformance";
import MyBidListings from "../../components/DashboardCol/MyBidListings";
import MaterialOfInterest from "../../components/DashboardCol/MaterialOfInterest";

export default function Home() {
    const username = getCookie('username');

    return (
        <>
            {username && 
            <div className="hello">
                <h4><b>Hi {username}!</b></h4>
                <span>WasteTrade</span>
            </div>}
            <div className="dashboard-main">
                <Row gutter={[40, 40]}>
                    <Col span={16}>
                        <Revenue />
                    </Col>
                    <Col span={8}>
                        <MySites />
                    </Col>
                    <Col span={10}>
                        <MyOffersPerformance />
                    </Col>
                    <Col span={14}>
                        <MyOffers />
                    </Col>
                    <Col span={10}>
                        <MyBiddingPerformance />
                    </Col>
                    <Col span={14}>
                        <MyBidListings />
                    </Col>
                    <Col span={24}>
                        <MaterialOfInterest />
                    </Col>
                </Row>
            </div>
        </>
    )
}