import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import CalenderDisplay from "./CalenderDisplay";

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalCal: true
    };

    this.events = [];
    this.props.activityPeriods.map((event, index) => {
      let tempObject = {};
      tempObject.id = index + 1;
      tempObject.title = "Active Time";
      tempObject.start = event.start_time;
      tempObject.end = event.end_time;
      this.events.push(tempObject);
    });
  }

  // Handeling Modal
  handelModalInCal = () => {
    this.setState(
      {
        showModalCal: !this.state.showModalCal
      },
      () => this.props.setShowCalender()
    );
  };

  render() {
    return (
      <>
        <Modal
          show={this.state.showModalCal}
          onHide={this.handelModalInCal}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-success p-2">
              User Details On Calender
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="text-center text-primary p-2">Activity Periods</h4>
            {/* Calender */}
            {<CalenderDisplay events={this.events} />}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handelModalInCal}>Close</Button>
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

export default connect(mapStateToProps, null)(Calender);
