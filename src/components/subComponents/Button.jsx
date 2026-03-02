import {Button} from 'antd';
export default function ReusableButton({name,onButtonPress}){
return (
   <Button onClick={onButtonPress} style={{padding:'10px', margin:'10px'}} type='primary'>
    {name}
    </Button>
)
}