import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import Calender from "./Calender";
import moment from "moment";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      showCalender: false,
      userData: this.props.userData.members,
      userId: this.props.userId,
      activityPeriods: "",
      todayActivity: ""
    };
  }

  // Modal Show Function
  handelModal = () => {
    this.setState({
        showModal: !this.state.showModal
      },
      () => this.props.setFalse()
    );
  };

  //Calender Modal Show Function
  handelCalender = () => {
    this.setState({
      showCalender: !this.state.showCalender
    });
  };

  // Setting Show Calender Button back to False after Close
  setShowCalender = () => {
    this.setState({
      showCalender: !this.state.showCalender
    });
  };

  // Getting Dates From Data
  getDate = date => {
    let dateJson = date.split("T");
    return dateJson[0];
  };

  getDates = date => {
    let temp = date.split(" ");
    console.log("temp", temp);
    let temp2 =
      temp[0] +
      " " +
      temp[1] +
      " " +
      temp[2] +
      " " +
      temp[3] +
      " " +
      temp[4].substring(0, temp[4].length - 2) +
      " " +
      temp[4].substring(temp[4].length - 2, temp[4].length);
    console.log("temp2", temp2);
    let dates = new Date(temp2);
    let jsonDate = dates.toJSON();
    let dateJson = jsonDate.split("T");
    return dateJson[0];
  };

  changeFormatStart = date => {
    let temp = date.split(" ");
    let temp2 =
      temp[0] +
      " " +
      temp[1] +
      " " +
      temp[2] +
      " " +
      temp[3] +
      " " +
      temp[4].substring(0, temp[4].length - 2) +
      " " +
      temp[4].substring(temp[4].length - 2, temp[4].length);
    return new Date(temp2);
  };

  changeFormatEnd = date => {
    let temp = date.split(" ");
    let temp2 =
      temp[0] +
      " " +
      temp[1] +
      " " +
      temp[2] +
      " " +
      temp[3].substring(0, temp[3].length - 2) +
      " " +
      temp[3].substring(temp[3].length - 2, temp[3].length);
    return new Date(temp2);
  };

  componentDidMount() {
    const { userId, userData } = this.state;
    let currentUser = userData.filter(item => item.id === userId);
    let active = currentUser[0].activity_periods;

    let act = active.map(e => {
      console.log(
        "abc",
        moment(this.changeFormatStart(e.start_time)).isValid()
      );
      return {
        start_time: this.changeFormatStart(e.start_time),
        end_time: this.changeFormatEnd(e.end_time)
      };
    });
    console.log("act aa", act);

    this.setState({
      activityPeriods: act
    });

    let today = this.getDate(new Date().toJSON());
    let currentDayActivity = active.filter(
      item => this.getDates(item.start_time) === today
    );
    this.setState({
      todayActivity: currentDayActivity
    });
  }

  render() {
    return (
      <>
        <Modal
          show={this.state.showModal}
          onHide={this.handelModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-center text-success p-2">
              User Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="text-center text-primary p-2">Today Activity</h4>
            {this.state.todayActivity.length > 0 &&
              this.state.todayActivity.map(item => (
                <div key={item}>
                  <div>Login - {item.start_time}</div>
                  <div>Logout - {item.end_time}</div>
                </div>
              ))}
            <p>
              <Button onClick={this.handelCalender}>Show Calender</Button>
              {this.state.showCalender && (
                <Calender
                  activityPeriods={this.state.activityPeriods}
                  setShowCalender={this.setShowCalender}
                />
              )}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handelModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

// Accessing Data from Store
const mapStateToProps = state => ({
  userData: state.userData
});

export default connect(mapStateToProps, null)(User);
