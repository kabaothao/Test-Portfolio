import React, { Component } from 'react';


// repeat the same basic structure for all 6 components

export class About extends Component { }





/*
How to write your first React.js component

A function component is the simplest form of a React component. It is a simple function with a simple contract:

A class component is a more featured way to define a React component. 
It also acts like a function that receives props, but that function also considers a private internal state as additional input that controls the returned JSX.


The State and Props objects have one important difference. 
Inside a class component, the State object can be changed while the Props object represents fixed values.
Class components can only change their internal state, not their properties. This is a core idea to understand in React and this article will have an example of that.


//export default function About() { }
 This would work if it Props object are fix. But because we need to change the internal state, therefore we use a class component. 
  */