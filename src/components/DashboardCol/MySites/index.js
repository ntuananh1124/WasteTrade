import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";
import './MySites.scss';
import { Table } from "antd";

const columns = [
    {
        title: 'ADDRESS',
        dataIndex: 'address',
        key: 'address',
        render: text => <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>{text}</span>
            <Link style={{color: 'black', textDecoration: 'underline'}}><b>VIEW</b></Link>
        </div>,
    }
];

const data = [
    {
        key: '1',
        address: '9561 Victoria RoadLondonEC25 3GW'
    },
    {
        key: '2',
        address: '25 Park LaneLondonN59 1LU'
    },
    {
        key: '3',
        address: '25 Park LaneLondonN59 1LU'
    },
    {
        key: '4',
        address: '25 Park LaneLondonN59 1LU'
    },
    {
        key: '5',
        address: '25 Park LaneLondonN59 1LU'
    }
];

export default function MySites() {
    return (
        <div className="my-sites-main">
            <div className="my-sites-main__top">
                <div className="my-sites-main__top__name">
                    <h4>MY SITES</h4>
                </div>
                <div className="my-sites-main__top__see-all">
                    <Link>
                        <span><b>SEE ALL MY SITES</b></span>
                        <FaLongArrowAltRight />
                    </Link>
                </div>
            </div>
            <div className="my-sites-main__content">
                <Table size="small" pagination={false} columns={columns} dataSource={data} />
            </div>
        </div>
    )
}