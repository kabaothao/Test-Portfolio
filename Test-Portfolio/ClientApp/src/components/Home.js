import React, { Component } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';


export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hi, I'm Olivia.</h1>
        <b>Building digital products, brands, and experience.</b>
        <p>Welcome to my new single-page application, built with:</p>
        <p><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</p>
        <p><a href='https://facebook.github.io/react/'>React</a> for client-side code</p>
            <p><a href='https://mui.com/'>Material UI</a> for layout and styling</p>
            <p><a href='https://tailwindcss.com/'>Tailwindcss UI</a> for layout and styling</p>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>

            <Button variant="contained">CONNECT WITH ME</Button>
        </div>
    );
  }
}
