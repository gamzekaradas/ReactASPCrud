import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from '@testing-library/react';
import { Add } from '../Actions/UserAction'

class UserAdd extends Component {

    state = {

        id: 0,
        name: '',
        lastname: ''
    }

    addOnClick = () => {

        if (this.state.name !== '' && this.state.lastname !== '') {
            this.setState(
                {
                    name: this.state.name,
                    lastname: this.state.lastname,
                }

            )
           
            this.props.Add(this.state);      
        }
        else {
            console.log('State değeri yoktur.')
        }       
    }

    //İsmin güncellenmesi durumunda tetiklenir.
    nameOnChange = (e) => {

        if (e.target.value !== '') {

            this.setState(
                {
                    name: e.target.value
                }
            )
        }
    }

    //Soyadın değişmesi durumunda tetiklenir.
    lastNameOnChange = (e) => {

        if (e.target.value !== '') {

            this.setState(
                {
                    lastname: e.target.value
                }
            )
        }
    }

    render() {
        return (
            <div className="jumbotron vertical-center">

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Adı :</span>
                    </div>
                    <input type="text" value={this.state.name} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={this.nameOnChange}></input>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Soyadı :</span>
                    </div>
                    <input type="text" value={this.state.lastname} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={this.lastNameOnChange}></input>
                </div>

                <button type="button" onClick={this.addOnClick} className="btn btn-secondary btn-lg btn-block">Kaydet</button>

            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        Add: (state) => { dispatch(Add(state)) }
    }
}

export default connect(null,mapDispatchToProps)(UserAdd);