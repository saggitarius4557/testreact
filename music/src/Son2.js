import React,{Component} from 'react'
import {connect} from 'react-redux'
import actionCreator from './store/actionCreator'
import {bindActionCreators} from 'redux'
class Son2 extends Component{
    render(){
        let {name,age,CHANGE_AGE}=this.props
        return(
            <div>
                {name}{age}
                <button onClick={()=>{
                    CHANGE_AGE()
                }}>1232</button>
            </div>
        );
    }
}
export default connect(state=>state,dispatch=>
    bindActionCreators(actionCreator,dispatch)
)(Son2)