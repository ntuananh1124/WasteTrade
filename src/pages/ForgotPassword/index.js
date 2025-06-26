import { Button, Col, Form, Input, Row } from "antd";
import { useNavigate } from "react-router";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const handleFinish = () => {
        navigate('/account/set-password');
    }

    const rules = [
        { required: true, message: 'Please input your username or email!' }
    ]
    return (
        <>
            <div className="registration__form">
                    <div className="registration__register">
                        <div className="registration__register__name">
                            <h2 style={{textAlign: 'center'}}>Forgotten Password</h2>
                        </div>
                        <div className="registration__register__basic-details">
                            <Form onFinish={handleFinish}>
                                <Row gutter={[24,6]}>
                                    <Col span={24}>
                                        <div className="registration__register__basic-details__label">
                                            <b>ENTER EMAIL*</b>
                                        </div>
                                        <div className="registration__register__basic-details__input">
                                            <Form.Item name='username'>
                                                <Input className="custom-input" placeholder="es.sample@gmail.com" />
                                            </Form.Item>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <Button className="login-button" type='primary' htmlType='submit'>SUBMIT</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
        </>
    )
}