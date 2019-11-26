import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@ui5/webcomponents/dist/Icon'
import '@ui5/webcomponents/dist/icons/nav-back'

function HelloWorld() {
    return (
        <div className="App">
            This is a icon <ui5-icon src="sap-icon://nav-back"/>
        </div>
    );
}

export default HelloWorld;
