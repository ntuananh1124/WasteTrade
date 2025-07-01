import { Button, Col, Form, Input, Row, Segmented } from 'antd';
import { IoMdSearch } from "react-icons/io";
import './Marketplace.scss';
import { useState } from 'react';
import AvailableMaterial from '../../components/Marketplace/AvailableMaterial';
import WantedMaterial from '../../components/Marketplace/WantedMaterial';

export default function Marketplace() {
    const [segmentStatus, setSegment] = useState('AVAILABLE MATERIAL');

    return (
        <div className='marketplace-main'>
            <div className="marketplace-main__top">
                <Segmented
                    options={['AVAILABLE MATERIAL', 'WANTED MATERIAL']}
                    value={segmentStatus}
                    onChange={segmentStatus => setSegment(segmentStatus)}
                    defaultValue="AVAILABLE MATERIAL"
                />
            </div>
            <div className="marketplace-main__content">
                <div className="marketplace-main__content__search-filter">
                    <div className="marketplace-main__content__search">
                        <Form>
                            <Row gutter={20}>
                                <Col span={20}>
                                    <Form.Item name='username'>
                                        <Input className="custom-input" placeholder="What are you looking for?" />
                                    </Form.Item>
                                </Col>
                                <Col span={4}>
                                    <Button className="custom-btn" type='primary' htmlType='submit' icon={<IoMdSearch />}>SEARCH</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="marketplace-main__content__filter">
                        
                    </div>
                </div>
                <div className="marketplace-main__content__inner">
                    {segmentStatus === 'AVAILABLE MATERIAL' ? <AvailableMaterial /> : <WantedMaterial />}
                </div>
            </div>
        </div>
    )
}