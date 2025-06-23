import { Link } from 'react-router';
import './Registration.scss';
import { Row, Col, Input, Select } from 'antd';
import PhoneNumberField from '../../components/PhoneNumberField';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default function Registration() {
    return (
        <>
            <div className="registration">
                <div className="registration__ques">
                    <span>Do you have a WasteTrade account?</span>
                    <Link to="/account/login"> Login?</Link>
                </div>
                <div className="registration__form">
                    <div className="registration__register">
                        <div className="registration__register__name">
                            <h2>Register</h2>
                        </div>
                        <div className="registration__register__basic-details">
                            <h3>BASIC DETAILS</h3>
                            <Row gutter={[24,24]}>
                                <Col span={8}>
                                    <div className="registration__register__basic-details__label">
                                        <b>PREFIX*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <Select
                                            defaultValue="Mr."
                                            className="custom-select"
                                            options={[
                                                { value: 'Mr.', label: 'Mr.' },
                                                { value: 'Dr.', label: 'Dr.' },
                                                { value: 'Mrs.', label: 'Mrs.' },
                                            ]}
                                        />
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className="registration__register__basic-details__label">
                                        <b>FIRSTNAME*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <Input className="custom-input" placeholder="e.g. Mark" />
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className="registration__register__basic-details__label">
                                        <b>LASTNAME*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <Input className="custom-input" placeholder="e.g. Fernandes" />
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="registration__register__basic-details__label">
                                        <b>JOB TITLE*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <Input className="custom-input" placeholder="Type here" />
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="registration__register__basic-details__label">
                                        <b>PHONE NUMBER*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <PhoneNumberField />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="registration__register__basic-details__label">
                                        <b>ENTER EMAIL*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <Input className="custom-input" placeholder="sample@gmail.com" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="registration__register__basic-details__label">
                                        <b>CONFIRM EMAIL*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <Input className="custom-input" placeholder="sample@gmail.com" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="registration__register__basic-details__label">
                                        <b>ENTER PASSWORD*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <Input.Password iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} className="custom-input" placeholder="********" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="registration__register__basic-details__label">
                                        <b>CONFIRM PASSWORD*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <Input.Password iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} className="custom-input" placeholder="********" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="registration__register__basic-details" style={{marginTop: 40}}>
                            <h3>COMPANY INFORMATION</h3>
                            <Row gutter={[24,24]}>
                                <Col span={24}>
                                    <div className="registration__register__basic-details__label">
                                        <b>COMPANY NAME*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <Input className="custom-input" placeholder="Type here" />
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="registration__register__basic-details__label">
                                        <b>COMPANY INTEREST*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <Select
                                            defaultValue="Select"
                                            className="custom-select"
                                            options={[
                                                { value: 'Sport Supplier', label: 'Sport Supplier' },
                                                { value: 'Gaming', label: 'Gaming' },
                                                { value: 'Fashion', label: 'Fashion' },
                                            ]}
                                        />
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="registration__register__basic-details__label">
                                        <b>COMPANY REGISTRATION NUMBER*</b>
                                    </div>
                                    <div className="registration__register__basic-details__input">
                                        <Input className="custom-input" placeholder="Type here" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="registration__register__basic-details"></div>
                    </div>
                </div>
            </div>
        </>
    )
}