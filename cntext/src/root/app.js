import React,{Component} from 'react';
import User from '../component/user';
export const Mycontext =React.createContext();

class App extends Component{
    constructor(props){
       super(props);
       this.state={
           name:'shilpi tyagi',
           age: 27
       }
    }

    render(){
        return(
            <Mycontext.Provider value={this.state}>
                    <h2 className="contxt">Context concept</h2>
                    <User />
                    <style jsx="true"> 
                        {
                            `.contxt{
                                text-align:center;
                            }
                            `
                        }
                    </style>
            </Mycontext.Provider>
        )
    }
};
export default App;