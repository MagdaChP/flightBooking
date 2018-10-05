import React from 'react';
import ReactDOM from 'react-dom';

export class NewTourists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    showName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    showLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    showCountry = (e) => {
        this.setState({
            country: e.target.value
        })
    }
    showNotes = (e) => {
        this.setState({
            notes: e.target.value
        })
    }
    showBirthDate = (e) => {
        this.setState({
            birthDate: e.target.value
        })
    }
    showSex = (e) => {
        console.log(e.target.value);
        this.setState({
            sex: e.target.value
        })
    }
    showFlight = (e) => {
        this.setState({
            flight: e.target.value
        })
    }
    addTourist = (e) => {
        e.preventDefault();
        let newTourist = {
            name: this.state.name,
            lastName: this.state.lastName,
            sex: this.state.sex,
            country: this.state.country,
            birthDate: this.state.birthDate,
            flight: this.state.flight,
            notes: this.state.notes,
            id: Math.round(Math.random() * 10)
        }
        // this.setState({ number: this.state.number.concat(1) })
        // let number = this.state.number.length
        console.log(newTourist);
        if (typeof this.props.addNewMethod == 'function') {
            console.log('kliknięcie');
            this.props.addNewMethod(newTourist);
        }
    }
    render() {
        return (
            <div className='formWrapper'>
            <form className='newTourist'>
                <div className='leftForm'>
                    <label>Name:
                <input type="text" value={this.state.name} onChange={this.showName} />
                    </label>
                    <label>Last Name:
                <input type="text" value={this.state.lastName} onChange={this.showLastName} />
                    </label>
                    <label className='customSelect'>Gender:
                    <select value={this.state.sex} onChange={this.showSex}>
                            <option value="" disabled selected hidden>Choose gender</option>
                            <option >Female</option>
                            <option >Male</option>
                        </select>
                    </label>
                    <label>Country:
                <input type="text" value={this.state.country} onChange={this.showCountry} />
                    </label>
                </div>
                <div className='rightForm'>
                    <label>Birth date:
                <input type="date" value={this.state.birthDate} onChange={this.showBirthDate} />
                    </label>
                    <label className='customSelect'>Choose your flight:
                <select value={this.state.flight} onChange={this.showFlight}>
                            <option value="" disabled selected hidden>choose flight date</option>
                            {['06.2019', '09.2019', '03.2020', '09.2020'].map((elem) => {
                                return <option className='selectSelected'>{elem}</option>
                            })}
                        </select>
                    </label>
                    <label>Notes:
                <textarea type="text" value={this.state.notes} onChange={this.showNotes} />
                    </label>
                </div>
            </form>
                <button className='addBtn' onClick={this.addTourist}> Add </button>
                </div>
        )
    }
}

ReactDOM.render(
    <NewTourists />,
    document.getElementById('app')
);