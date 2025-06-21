import { Input, Select } from 'antd';
import { useState } from 'react';

const { Option } = Select;

export default function PhoneNumberField() {
    const [prefix, setPrefix] = useState('+44');
    const [phone, setPhone] = useState('');

    return (
        <div>
            <Input 
                addonBefore={
                <Select
                    value={prefix}
                    onChange={value => setPrefix(value)}
                    style={{ width: 100 }}
                >
                    <Option value="+44">🇬🇧 +44</Option>
                    <Option value="+84">🇻🇳 +84</Option>
                    <Option value="+1">🇺🇸 +1</Option>
                </Select>
                }
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="7412345678"
            />
        </div>
    );
}
