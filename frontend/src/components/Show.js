import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/points/'+id)
      .then((result) => {
        this.props.history.push("/")
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
              Point Details
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Points📌 </Link></h4>
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.point.name}</dd>
              <dt>Address:</dt>
              <dd>{this.state.point.address}</dd>
              <div class="alert alert-secondary" role="alert">
                <dt>Hub Server Dashboard: 📈 📉</dt>
                <dd><a href={this.state.point.hubServerURL} target="_blank">{this.state.point.hubServerURL}</a></dd>
              </div>
              <dt>Phone Number:</dt>
              <dd>{this.state.point.phone}</dd>
            </dl>
            <Link to={`/edit/${this.state.point.id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.point.id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
