import React, { Component } from 'react';
import axios from 'axios';

import Add from './Add';
import Search from './Search';
import Contact from './Contact';

import { fetchAll, search } from '../utils'

class Main extends Component {
    state = {
        contacts: [],
        searchTerm: '',
        visible: []
    };

    componentDidMount = () => {
        fetchAll(this)
    }

    handleAdd = (e) => {
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const phone = e.target.phone.value

        axios.post('/contacts/', {
            firstName,
            lastName,
            phone
        }).then((res) => {
            fetchAll(this)
          })
          .catch((err) => {
            console.log(err)
          })
    }

    handleUpdate = (e) => {
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const phone = e.target.phone.value
        const id = e.target.id.value

        axios.put(`/contacts/${id}`, {
            firstName,
            lastName,
            phone
        }).then((res) => {
            fetchAll(this)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    handleDelete = (id) => {
        axios.delete(`/contacts/${id}`)
        .then((res) => {
            fetchAll(this)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    handleSearch = (e) => {
        const searchTerm = e.target.value
        this.setState({ searchTerm })
        const filteredVisible = search(searchTerm, this.state.contacts);
        this.setState({ visible: filteredVisible })
    }

    render() {
        return (
            <div>
                <Search 
                    searchTerm={this.state.searchTerm} 
                    handleSearch={this.handleSearch}
                />
                <Add handleAdd={this.handleAdd}/>
                <br/>
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Telephone number</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.visible.map((contact) => {
                            return <Contact 
                                    key={contact.id}
                                    contact={contact}
                                    handleUpdate={this.handleUpdate} 
                                    handleDelete={this.handleDelete}
                                />
                            })}
                    </tbody>
                </table>
            </div>        
        )
    }
}
export default Main