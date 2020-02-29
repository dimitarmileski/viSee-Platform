import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      points: []
    };
  }

  componentDidMount() {
    axios.get('/points')
      .then(res => {
        this.setState({ points: res.data });
        console.log(this.state.points);
      });
  }

  render() {
    return (
      <div class="container">

        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-3">🔭viSee</h1>
        </div>
        </div>

        <h2 className="display-6">Points📌</h2>
        
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Add Point➕ </Link></h4>



            <div class="container">
              <div class="row">
                
                {this.state.points.map(p =>
           
           <div class="col-sm-6">
             <div class="card">
               <div class="card-body">
                 <h5 class="card-title"><Link to={`/show/${p.id}`}>{p.name}</Link></h5>
                 <p class="card-text">{p.address}</p>
                 <button type="button" class="btn btn-link"><Link to={`/show/${p.id}`}>Go</Link></button>
               </div>
             </div>
           </div>
            
         
           )}
                
              </div>
            </div>
           
           
          </div>
        
      </div>
    );
  }
}

export default App;
