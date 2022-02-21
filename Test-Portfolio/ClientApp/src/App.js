import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Project } from './components/Project';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/project' component={Project} />
        <Route path='/Skills' component={Skills} />
            <Route path='/Testmonials' component={Testimonials} />
        <Route path='/Contact' component={Contact} />
      </Layout>
    );
  }
}


/*
 What is React Router? 
 It is a standard library for routing in React. 
 It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
 

 What is Components?
 Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.
 Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.


  */