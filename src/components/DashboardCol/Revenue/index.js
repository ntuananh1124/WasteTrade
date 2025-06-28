import { Link } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";
import './Revenue.scss';
import { Col, Row, Table } from "antd";

const columns = [
    {
        title: 'MATERIAL',
        dataIndex: 'material',
        key: 'material',
    },
    {
        title: 'COUNTRY',
        dataIndex: 'country',
        key: 'country'
    },
    {
        title: 'NR OF OFFERS',
        dataIndex: 'nrOffers',
        key: 'nrOffers'
    },
    {
        title: 'REVENUE',
        dataIndex: 'revenue',
        key: 'revenue',
        render: text => <span style={{color: '#03985C'}}>£{text}</span>,
    }
];

const data = [
    {
        key: '1',
        material: 'Non-Ferrous',
        nrOffers: 100,
        country: 'United Kingdom',
        revenue: 12.7168,
    },
    {
        key: '2',
        material: 'Non-Ferrous',
        nrOffers: 99,
        country: 'United Kingdom',
        revenue: 11.7168,
    },
    {
        key: '3',
        material: 'Non-Ferrous',
        nrOffers: 13,
        country: 'United Kingdom',
        revenue: 77.7168,
    },
    {
        key: '4',
        material: 'Non-Ferrous',
        nrOffers: 51,
        country: 'United Kingdom',
        revenue: 92.7168,
    },
    {
        key: '5',
        material: 'Non-Ferrous',
        nrOffers: 51,
        country: 'United Kingdom',
        revenue: 92.7168,
    }
];

export default function Revenue() {

    return (
        <div className='revenue-main'>
            <div className="revenue-main__top">
                <div className="revenue-main__top__name">
                    <h4>REVENUE</h4>
                </div>
                <div className="revenue-main__top__see-all">
                    <Link>
                        <span><b>SEE ALL REVENUE</b></span>
                        <FaLongArrowAltRight />
                    </Link>
                </div>
            </div>
            <div className="revenue-main__content">
                <Row gutter={8} style={{height: '100%'}}>
                    <Col span={5}>
                        <div className="revenue-main__content__left">
                            <span className="revenue-main__content__left__text"><b>TOTAL</b></span>
                            <span className="revenue-main__content__left__price"><b>£120,000.35</b></span>
                        </div>
                    </Col>
                    <Col span={19}>
                        <div className="revenue-main__content__right">
                            <Table size="small" pagination={false} columns={columns} dataSource={data} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}