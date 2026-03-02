import {useState} from 'react'
import {Form,Input,Button,message} from 'antd';

function MyForm()
{
    const [form]=Form.useForm();

    const handleSubmit=(value)=>{
        message.success(`Submitted successfully: ${value.name}`);
    };
    return (
        <div>
           <Form
            form={form}
            layout='vertical'
            onFinish={handleSubmit}
            style={{width:300,margin:"50px auto"}}
           >
            <Form.Item
            label="Enter your name"
            name="name"
            rules={[
                {required:true,message:'Name is required'},
                {min:3, message:'Name must be at least 3 characters'}
            ]}
            >
            <Input style={{padding:'10px'}} placeholder='Type your name'/>
            </Form.Item>

           </Form>
        </div>
    )
}
export default MyForm;