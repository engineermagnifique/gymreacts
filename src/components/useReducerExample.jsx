import {useReducer} from 'react';
const initialScore=[
    {
        id:1,
        score:0,
        name:'John',
    },
    {
        id:2,
        score:0,
        name:"Sally"
    },
];

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return state.map((player)=>{
                if(player.id===action.id){
                    return {...player,score:player.score+1};
                } else {
                    return player;
                }
            });
        default:return false;
    }
}