//import React, { Component } from 'react';
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { CardImg } from "reactstrap";
import bingo from '../assets/images/bingo.jpg';


function ProjectCard() {
    //Declare a new state variable, which we'll call "card"
    const [card, setCard] = useState(["project"]);

    //const bull = (
    //    <Box
    //        component="span"
    //        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    //    >
    //        •
    //    </Box>
    //);

    return (
        <div>
            <h1>Project</h1>
            <div>
                <h1>My favorite {card} is Bingo!</h1>

            </div>

            <div>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Bingo
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            This project was to build a bingo game where users can create their own game or join a room of other Bingo players.
                        </Typography>
                        <Typography variant="body2">
                            <img src={bingo}/>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View Projects</Button>
                        <Button size="small">View Github</Button>
                    </CardActions>
                </Card>
            </div>
        </div>



    )


}


export default ProjectCard;




/*
 What are the differences between State and Prop?
 Props refers to the properties being passed into a component in order for it to work correctlt simliar to how a function reeives parameters: "from above." 
 A component receiving props is not allowed to modify those props. (i.e they are "immutable.")

function addTwoNumbers (a, b){
    a= 42
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
 */