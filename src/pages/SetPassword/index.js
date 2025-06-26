import { Button, Col, Form, Input, Row } from "antd";

export default function SetPassword() {
    return (
        <>
            <div className="registration__form">
                    <div className="registration__register">
                        <div className="registration__register__name">
                            <h2 style={{textAlign: 'center'}}>Set Password</h2>
                        </div>
                        <div className="registration__register__basic-details">
                            <Form>
                                <Row gutter={[24,6]}>
                                    <Col span={12}>
                                        <div className="registration__register__basic-details__label">
                                            <b>PASSWORD*</b>
                                        </div>
                                        <div className="registration__register__basic-details__input">
                                            <Form.Item name='password'>
                                                <Input.Password className="custom-input" placeholder="Your new password" />
                                            </Form.Item>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="registration__register__basic-details__label">
                                            <b>CONFIRM PASSWORD*</b>
                                        </div>
                                        <div className="registration__register__basic-details__input">
                                            <Form.Item name='cfPassword'>
                                                <Input.Password className="custom-input" placeholder="Confirm your password" />
                                            </Form.Item>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <Button className="login-button" type='primary' htmlType='submit'>SAVE</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
        </>
    )
}