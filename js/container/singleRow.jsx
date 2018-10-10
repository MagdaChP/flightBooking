import React from 'react';
import ReactDOM from 'react-dom';

import { NewTourists } from './newTourists.jsx';
import { Button } from './button.jsx';
import ContentEditable from "react-contenteditable";

export class SingleRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerIndex: this.props.showHeader,
            edit: false,
            newElName: this.props.newElName,
            newElLastName: this.props.newElLastName,
            newElSex: this.props.newElSex,
            newElCountry: this.props.newElCountry,
            newElBirthDate: this.props.newElBirthDate,
            newElFlight: this.props.newElFlight,
            newElNote: this.props.newElNote
        }

    }
    handleNameChange = evt => {
        this.setState({
            newElName: evt.target.value,
        });
    };
    handleLastNameChange = evt => {
        this.setState({
            newElLastName: evt.target.value,
        });
    };
    handleSexChange = e => {
        this.setState({
            newElSex: e.target.value,
        });
    };
    handleCountryChange = e => {
        this.setState({
            newElCountry: e.target.value,
        });
    };
    handleBirthChange = e => {
        this.setState({
            newElCountry: e.target.value,
        });
    };
    handleFlightChange = e => {
        this.setState({
            newElCountry: e.target.value,
        });
    };
    handleNotesChange = e => {
        this.setState({
            newElCountry: e.target.value,
        });
    };
    handleClick = (e) => {
        const buttonId = this.props.id;
        console.log('handle click id', this.props.id)
        this.removeMethod(e.target, buttonId);
    }
    handleEditClick = (e) => {
        this.editMethod();
    }
    removeMethod(elem, id) {
        console.log('id', id, elem);
        let index
        this.props.elemToRemove.map((e, i) => {
            console.log(i, 'i wewn mapa')
            if (id == e.id) {
                index = i
            }
        })
        console.log('porównane i', index);
        if (typeof this.props.removeEl == 'function') {
            console.log('kliknięcie singleRow');
            this.props.removeEl(index);
        }
    }
    // editMethod(){
    //     console.log('odpalam editMethod');
    //     this.setState({
    //         edit: true
    //     }, ()=>{console.log(this.state.edit)})
    //     console.log('state nie w callbacku',this.state.edit);
    // }
    toggleEditable = () => {
        this.setState({ editable: !this.state.editable });
    };
    render() {
        // if (this.state.headerIndex == 1) {
        return (
            <div>
                <table className='listBody'>
                    <tbody>
                        <tr>
                            <td>
                                <ContentEditable
                                    className="editable"
                                    tagName="pre"
                                    html={this.state.newElName} // innerHTML of the editable el
                                    disabled={!this.state.editable} // use true to disable edition
                                    onChange={this.handleNameChange} // handle innerHTML change
                                    onBlur={this.sanitize}
                                /></td>
                            <td><ContentEditable
                                className="editable"
                                tagName="pre"
                                html={this.state.newElLastName}
                                disabled={!this.state.editable}
                                onChange={this.handleLastNameChange}
                                onBlur={this.sanitize}
                            /></td>
                            <td><ContentEditable
                                className="editable"
                                tagName="pre"
                                html={this.state.newElSex}
                                disabled={!this.state.editable}
                                onChange={this.handleSexChange}
                                onBlur={this.sanitize}
                            /></td>
                            <td><ContentEditable
                                className="editable"
                                tagName="pre"
                                html={this.state.newElCountry}
                                disabled={!this.state.editable}
                                onChange={this.handleCountryChange}
                                onBlur={this.sanitize}
                            /></td>
                            <td><ContentEditable
                                className="editable"
                                tagName="pre"
                                html={this.state.newElBirthDate}
                                disabled={!this.state.editable}
                                onChange={this.handleBirthChange}
                                onBlur={this.sanitize}
                            /></td>
                            <td><ContentEditable
                                className="editable"
                                tagName="pre"
                                html={this.state.newElFlight}
                                disabled={!this.state.editable}
                                onChange={this.handleFlightChange}
                                onBlur={this.sanitize}
                            /></td>
                            <td><ContentEditable
                                className="editable"
                                tagName="pre"
                                html={this.state.newElNote}
                                disabled={!this.state.editable}
                                onChange={this.handleNotesChange}
                                onBlur={this.sanitize}
                            /></td>
                            {/* <td>{this.props.id}</td> */}
                            <td><Button className='deleteBtn' key={this.props.id} handleBtnClick={this.handleClick} btnName='delete' /> </td>
                            <td><button onClick={this.toggleEditable}>
                                {this.state.editable ? "OK" : "edit"}
                            </button></td>
                            {/* <td><Button className='editBtn' handleBtnClick={this.handleEditClick} btnName='edit' editable={this.state.edit} /></td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


ReactDOM.render(
    <SingleRow />,
    document.getElementById('app')
);