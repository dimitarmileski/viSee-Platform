import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      hubServerURL: '',
      phone: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, address, hubServerURL, phone } = this.state;

    axios.post('/points', { name, address, hubServerURL, phone })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, address, hubServerURL, phone } = this.state;
    return (
        <div>
          <header>
            <h1>
              🔭 viSee
            </h1>
            <h4>
              ☁️ IOT web platform
            </h4>
            <h3>
              Web app
            </h3>
          </header>
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  Add Point
                </h3>
              </div>
              <div class="panel-body">
                <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Points📌</Link></h4>
                <form onSubmit={this.onSubmit}>
                  <div class="form-group">
                    <label for="isbn">Name:</label>
                    <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
                  </div>
                  <div class="form-group">
                    <label for="title">Address:</label>
                    <input type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
                  </div>
                  <div class="form-group">
                    <label for="author">Hub Server URL:</label>
                    <input type="text" class="form-control" name="hubServerURL" value={hubServerURL} onChange={this.onChange} placeholder="Hub Server URL" />
                  </div>
                  <div class="form-group">
                    <label for="published_date">Phone:</label>
                    <input type="text" class="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="Phone Number" />
                  </div>
                  <button type="submit" class="btn btn-default">Submit</button>
                </form>
              </div>
            </div>
            <footer>
              <p>🔭viSee 2020 - Dimitar Mileski</p>
            </footer>

          </div>
        </div>
    );
  }
}

export default Create;
