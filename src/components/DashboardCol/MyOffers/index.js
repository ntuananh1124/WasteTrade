import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";
import './MyOffers.scss';
import { Table } from "antd";

const columns = [
    {
        title: 'MATERIAL',
        dataIndex: 'material',
        key: 'material'
    },
    {
        title: 'COUNTRY',
        dataIndex: 'country',
        key: 'country'
    },
    {
        title: 'QUANTITY',
        dataIndex: 'quantity',
        key: 'quantity',
        render: text => <span>{text} MT</span>
    },
    {
        title: 'NR OF OFFERS',
        dataIndex: 'nrOffers',
        key: 'nrOffers'
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
        key: 'status',
        render: status => status ? <span style={{color: '#03985C'}}><b>Sold</b></span> : <span><b>On Going</b></span>
    },
    {
        title: '',
        dataIndex: 'view',
        key: 'view',
        render: text => <Link style={{color: 'black', textDecoration: 'underline'}}><b>VIEW</b></Link>,
    }
];

const data = [
    {
        key: '1',
        material: 'Non-Ferrous',
        country: 'United Kingdom',
        quantity: 14,
        nrOffers: 100,
        status: false,
        view: ''
    },
    {
        key: '2',
        material: 'Non-Ferrous',
        country: 'Italy',
        quantity: 14,
        nrOffers: 99,
        status: true,
        view: ''
    },
    {
        key: '3',
        material: 'Non-Ferrous',
        country: 'Germany',
        quantity: 14,
        nrOffers: 13,
        status: false,
        view: ''
    },
    {
        key: '4',
        material: 'Non-Ferrous',
        country: 'United Kingdom',
        quantity: 14,
        nrOffers: 38,
        status: true,
        view: ''
    }
];

export default function MyOffers() {
    return (
        <div className="my-offers-main">
            <div className="my-offers-main__top">
                <div className="my-offers-main__top__name">
                    <h4>MY OFFERS</h4>
                </div>
                <div className="my-offers-main__top__see-all">
                    <Link>
                        <span><b>SEE ALL MY OFFERS</b></span>
                        <FaLongArrowAltRight />
                    </Link>
                </div>
            </div>
            <div className="my-offers-main__content">
                <Table size="small" pagination={false} columns={columns} dataSource={data} />
            </div>
        </div>
    )
}