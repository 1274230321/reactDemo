import React from 'react';
import './App.css';
import '@ui5/webcomponents/dist/MessageStrip'

export default class ShowMessage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show:true
        }
    }

    componentDidMount() {
    }

    handleWarning=()=>{
        this.setState(state=>({
            show:!state.show
        }))
    }
    render() {
        return(
            <div>
                <WarningBanner warn={this.state.show}/>
                <button onClick={this.handleWarning}> {this.state.show? 'positive':'negative'}</button>
            </div>
        )
    }
}

function WarningBanner(props) {
    if (props.warn){
        return(
            <div>
                <ui5-messagestrip type="Positive" no-close-button>Positive MessageStrip</ui5-messagestrip>
            </div>
        )
    }
    return (
        <div>
            <ui5-messagestrip type="Negative"no-close-button >Negative MessageStrip</ui5-messagestrip>
        </div>
    )

}
