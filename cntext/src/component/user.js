import React,{Component} from 'react';
import Guest from '../component/guest';

class User extends Component{

    render(){
        const {value}=this.props;
        console.log(value)
        return(
            <React.Fragment>
                <h3>User Component</h3>
                <Guest />  
            </React.Fragment>
        )
    }
};

export default User;