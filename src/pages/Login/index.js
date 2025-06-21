import { Link, useNavigate } from 'react-router';
import './Login.scss';
import { Row, Col, Input, Button, Form } from 'antd';
import { setCookie } from '../../helpers/cookie';

const dataSampleLogin = {
    username: 'newuser8@example.com',
    password: 'securepassword'
}

export default function Login() {
    const navigate = useNavigate();
    const handleFinish = (data) => {
        console.log(data);
        if (dataSampleLogin && data) {
            if (data.username === dataSampleLogin.username && data.password === dataSampleLogin.password) {
                alert('LOGIN SUCCESSFULLY!');
                navigate('/');
                setCookie('username', data.username, 1);
            } else alert('Uncorrect username & password!!!')
        } else alert('Please try again!');
    };

    return (
        <>
            <div className="registration">
                <div className="registration__ques">
                    <span>Need a WasteTrade account?</span>
                    <Link to="/registration"> Create an account?</Link>
                </div>
                <div className="registration__form">
                    <div className="registration__register">
                        <div className="registration__register__name">
                            <h2>Login</h2>
                        </div>
                        <div className="registration__register__basic-details">
                            <h3>Welcome back!</h3>
                            <Form onFinish={handleFinish}>
                                <Row gutter={[24,6]}>
                                    <Col span={24}>
                                        <div className="registration__register__basic-details__label">
                                            <b>USERNAME OR EMAIL ADDRESS</b>
                                        </div>
                                        <div className="registration__register__basic-details__input">
                                            <Form.Item name='username' rules={[{ required: true, message: 'Please input your username or email!' }]}>
                                                <Input className="custom-input" placeholder="es.sample@gmail.com" />
                                            </Form.Item>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className="registration__register__basic-details__label">
                                            <b>PASSWORD</b>
                                        </div>
                                        <div className="registration__register__basic-details__input">
                                            <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
                                                <Input.Password className="custom-input" placeholder="Your password" />
                                            </Form.Item>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <Button className="login-button" type='primary' htmlType='submit'>LOGIN</Button>
                                    </Col>
                                    <Col span={24}>
                                        <Button className="lost-pwd">
                                            <Link to='/forgot-password'>LOST YOUR PASSWORD?</Link>
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}