
import ReusableButton from "./Button"
export default function UserCard({obj}){
    return (
       <div style={{borderRadius:4,borderColor:'#bbb',display:'flex',flexDirection:'column'}}>
          <img src={obj.profileUrl} alt={obj.avatar}/>
          <div>
            <h2>{obj.name}</h2>
          <h2>{obj.detail}</h2>
          <ReusableButton
          name='view'
          />
          <ReusableButton
          name='confirm'
          />
          </div>
       </div>
    )
}