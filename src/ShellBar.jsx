import React from 'react';
import './App.css';
import sapLogo from './sap-logo-svg.svg'
import "@ui5/webcomponents/dist/ShellBar"
import logo from './logo.svg'

export default class ShellBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ui5-shellbar
                primary-title="Corporate Portal"
                profile={logo}
                secondary-title="secondary title"
                logo={sapLogo}
                notification-count="99+"
                show-notifications
                show-product-switch
                show-co-pilot
            >
                <ui5-icon src="./logo.svg" slot="icon"></ui5-icon>

                <ui5-shellbar-item id="disc" src={logo} text="Disconnect"></ui5-shellbar-item>
                <ui5-shellbar-item id="call" src="sap-icon://incoming-call" text="Incoming Calls"></ui5-shellbar-item>

                <ui5-input slot="searchField"></ui5-input>

                <ui5-li slot="menuItems">Application 1</ui5-li>
                <ui5-li slot="menuItems">Application 2</ui5-li>
                <ui5-li slot="menuItems">Application 3</ui5-li>
                <ui5-li slot="menuItems">Application 4</ui5-li>
                <ui5-li slot="menuItems">Application 5</ui5-li>
            </ui5-shellbar>
            </ui5-

        )
    }
}
