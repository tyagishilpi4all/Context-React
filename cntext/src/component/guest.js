import React,{Component} from 'react';
import { Mycontext } from '../root/app';
class Guest extends Component{

    render(){
        
        return(
          <React.Fragment>
                  <Mycontext.Consumer>
                    {data=>
                       <div> 
                           <h4>{data.name} {data.age}</h4>
                       </div> 
                    }
                </Mycontext.Consumer>
          </React.Fragment>
        )
    }
};
export default Guest;