import React, { Component } from 'react';
import { render } from '@testing-library/react';

export default class UserDelete extends Component {

    state = {

        id: 0,
        name: '',
        lastname: ''
    }

    deleteOnClick = () => {

        this.setState(
            {
                id: this.state.id,
            }
        )

        console.log(this.state.id)
    }

    //id güncellenmesi durumunda tetiklenir.
    idOnChange = (e) => {

        this.setState(
            {
                id: e.target.value
            }
        )
    }

  
    render() {
        return (
            <div className="jumbotron vertical-center">

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Id :</span>
                    </div>
                    <input type="text" value={this.state.id} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={this.idOnChange}></input>
                </div>

                <button type="button" onClick={this.deleteOnClick} className="btn btn-secondary btn-lg btn-block">Sil</button>

            </div>
        )
    }

}