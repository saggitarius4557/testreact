import {CHANGE_NAME,CHANGE_AGE} from './actionType'
export default{
    [CHANGE_NAME](){
        return(dispatch)=>{
            setTimeout(()=>{
                let action={
                    type:CHANGE_NAME,
                    payload:'哎呀呀'
                }
            dispatch(action)
            },1000)
        }
    },
    [CHANGE_AGE](){
        return{
            type:CHANGE_AGE,
            payload:99
        }
    }
}