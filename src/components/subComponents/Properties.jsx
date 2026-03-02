import {message, notification} from 'antd';
export default function RenderProperties()
{
    const shoot=(a,b)=>{
        alert(b.type);
        message.success('The event has been displayed')
    }
    return (
        <div>
           <button onClick={(event)=>shoot('Goal!',event)}>Take the shot!</button>
        </div>
    )
}