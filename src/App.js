// import logo from './logo.svg';
import { ConfigProvider } from 'antd';
import './App.css';
import AllRoute from './components/AllRoute';

function App() {
  return (
    <ConfigProvider 
      theme={{
        token: {
          colorPrimary: '#03985C'
        }
      }}
    >
      <AllRoute />
    </ConfigProvider>
  );
}

export default App;
