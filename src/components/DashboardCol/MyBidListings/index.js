import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";
import './MyBidListings.scss';
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
        title: 'OFFERED',
        dataIndex: 'offered',
        key: 'offered',
        render: text => <span>£{text}</span>
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
        key: 'status',
        render: status => status ? <span style={{color: '#03985C'}}><b>Accepted</b></span> : <span><b>Pending</b></span>
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
        offered: 22572,
        status: false,
        view: ''
    },
    {
        key: '2',
        material: 'Non-Ferrous',
        country: 'Italy',
        quantity: 14,
        offered: 10000,
        status: true,
        view: ''
    },
    {
        key: '3',
        material: 'Non-Ferrous',
        country: 'Germany',
        quantity: 14,
        offered: 22572,
        status: false,
        view: ''
    },
    {
        key: '4',
        material: 'Non-Ferrous',
        country: 'United Kingdom',
        quantity: 14,
        offered: 10000,
        status: true,
        view: ''
    }
];

export default function MyBidListings() {
    return (
        <div className="my-bids-main">
            <div className="my-bids-main__top">
                <div className="my-bids-main__top__name">
                    <h4>MY BID LISTINGS</h4>
                </div>
                <div className="my-bids-main__top__see-all">
                    <Link>
                        <span><b>SEE ALL MY BIDDINGS</b></span>
                        <FaLongArrowAltRight />
                    </Link>
                </div>
            </div>
            <div className="my-bids-main__content">
                <Table size="small" pagination={false} columns={columns} dataSource={data} />
            </div>
        </div>
    )
}