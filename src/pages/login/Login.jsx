import { Form, Input, Button, Alert } from 'antd';
import { useEffect } from 'react';
import { FaSignInAlt } from "react-icons/fa";
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../store/service/loginService';

const Login = () => {

    const navigate = useNavigate();

    const [trigger, { data }] = useLoginMutation();

    const onFinish = (values) => {
        trigger({
            ...values,
            appUrl: window.location.hostname

        })
    };
    
    useEffect(() => {
        if(data?.token){
            localStorage.setItem("token", data?.token);
            localStorage.setItem("userId", data?.userId);
            localStorage.setItem("userType", data?.userType);
            localStorage.setItem("partnership", data?.partnership);
        }
        if(data?.token){
            navigate('/list-clients')
        }
    }, [data]);

    return (
        <>
        <div className='wrapper'>
            <div className='login-mn'>
                <div className='log-logo m-b-20'>
                    <img src='https://dzm0kbaskt4pv.cloudfront.net/v12/static/themes/matchbox9.com/admin/logo.png' alt="Logo" />
                </div>
                <div className='log-fld'>
                    {
                    data?.status === false &&  <Alert message={data?.message} />
                    
                    }
                    <h2>Sign In</h2>
                    <Form
                        className='loginform'
                        name="basic"
                        style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            className='form-group m-b-20'
                            name="userId"
                            rules={[{ required: true, message: 'The username field is required.' }]}
                        >
                            <Input className='form-control' />
                        </Form.Item>

                        <Form.Item
                            className='form-group m-t-20'
                            name="password"
                            rules={[{ required: true, message: 'The password field is required.' }]}
                        >
                            <Input type='password' className='form-control' />
                        </Form.Item>

                        <Form.Item className=''>
                            <Button type="primary" className='btn btn-submit btn-login' htmlType="submit">
                                Login
                                <FaSignInAlt />
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className='log-copy'>
                    <p>
                        © MATCHBOX9
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;
