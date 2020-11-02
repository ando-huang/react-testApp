import React, {Component} from 'react';
import HighScore from './HighScore';

class Application extends Component{

    //determines if it needs to rerender
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }
    }

    //function declared as a variable
    handleClick = () => {
        //console.log("Clicked");
        this.setState({count: this.state.count + 1})
    }

    componentDidUpdate(props, state){
        if (this.state.count> 10 && this.state.count != state.count){
            //triggers infinite loop
            this.setState({overTen: true});
        }
    }

    resetCount = (e) => {
        console.log("Event is ", e);
        this.setState({
            count: 0,
            overTen: false
        })
    }
    //standard react method
    render(){
        let name = 'Andrew';
        let {count} = this.state;
        return (
            <div>
                <h1>You clicked the button {count} times</h1>
                <HighScore 
                    overTen = {this.state.overTen}
                    onReset = {(e) => this.resetCount(e)}
                />
                <span>
                    <button onClick = {(e) => this.handleClick()}>
                        Click Me
                    </button>
                </span>
            </div>
        );
    }

}

export default Application;