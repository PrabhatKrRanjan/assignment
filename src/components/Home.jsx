import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
import PageList from './PageList'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      show : false,
      userId : ''
    }
  }
  
  // Modal Show Function
  handeShow = (id) => {
    this.setState({
      show : !this.state.show,
      userId : id
    })
  }

  // Setting Modal back to False after Close
  setFalse = () => {
    this.setState({
      show : !this.state.show
    })
  };

  render() {
    const { page, perPage, userData }= this.props;
    return (
      <div>
        <div className="container-fluid bg bg-dark">
          <div className="display-3 text-center text-white font-weight-bold p-4">
            User Data
          </div>
        </div>
        <div className="container">
          <table className="table table-striped text-center mt-5">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Zone</th>
              </tr>
            </thead>
            <tbody>
              {/* Maping Members Data */}
              {userData.members.filter((a, i) => i >= perPage * (page - 1) && i < perPage * page).map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td onClick={()=>this.handeShow(item.id)}>{item.real_name}</td>
                  <td>{item.tz.split('/').join(' ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {this.state.show && <User 
          userId = {this.state.userId}
          setFalse = {this.setFalse}  
          />}
        </div>
        <div className="d-flex justify-content-center">
                    {<PageList />}
                </div>
      </div>
    );
  }
}

// Accessing Data from Store
const mapStateToProps = state => ({
  userData: state.userData,
  page: state.page,
  perPage: state.perPage
});


export default connect(mapStateToProps, null)(Home);
