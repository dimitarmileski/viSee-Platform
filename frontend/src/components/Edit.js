import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      point: {}
    };
  }

  componentDidMount() {
    axios.get('/points/'+this.props.match.params.id)
      .then(res => {
        this.setState({ point: res.data });
        console.log(this.state.point);
      });
  }

  onChange = (e) => {
    const state = this.state.point
    state[e.target.name] = e.target.value;
    this.setState({point:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, address, hubServerURL, phone } = this.state.point;

    axios.put('/points/'+this.props.match.params.id, { name, address, hubServerURL, phone })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-3">🔭viSee</h1>
        </div>
        </div>
          <div class="panel-heading">
            <h3 class="panel-title">
              Edit Point
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.point.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Points📌 </Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.point.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">Address:</label>
                <input type="text" class="form-control" name="address" value={this.state.point.address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="author">Hub Server URL:</label>
                <input type="text" class="form-control" name="hubServerURL" value={this.state.point.hubServerURL} onChange={this.onChange} placeholder="Hub Server URL" />
              </div>
              <div class="form-group">
                <label for="published_date">Phone Number:</label>
                <input type="text" class="form-control" name="phone" value={this.state.point.phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
            
              <button type="submit" class="btn btn-default">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
