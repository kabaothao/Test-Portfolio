import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


export class Project extends Component {
    static displayName = Project.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

                <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>

                <Button variant="contained">Material UI</Button>

            </div>
        );
    }
}

/*
 What are the differences between State and Prop?
 Props refers to the properties being passed into a component in order for it to work correctlt simliar to how a function reeives parameters: "from above." 
 A component receiving props is not allowed to modify those props. (i.e they are "immutable.")

function addTwoNumbers (a, b){
    a=42
    return a + b
}

console.log(addTwoNumbers (1,2))



function Navbar(props) {
    props.coverImage = "something else"

Basically on line 45 is incorrect. You cannot pass something in prop. 
}


State refers to values that are managed by the component, simliar to variables declared inside a function. 
Any time you have changing values that should be saved/displayed, you'll likely be using state.

function greeting(name) {

}

greeting("Bob)

 */