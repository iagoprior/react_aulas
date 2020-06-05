import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import './index.css';

function soma(a, b) {
    alert (a + b);
}

function App() {

    return (
        <div className="App">
             Hello World
             <Button onClick={() => soma(10,20)} name="Iago Prior"/>
             <ComponentA>
                 <ComponentB>
                    <Button onClick={() => soma(20,40)} name="Iago Prior2"/>
                 </ComponentB>
             </ComponentA>
        </div>     
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

