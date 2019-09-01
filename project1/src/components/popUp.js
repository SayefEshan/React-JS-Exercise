import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class PopUp extends Component {
  render() {
    return (
      <Modal
        
        show={this.props.isPopUpShow}
        onHide={this.props.toggleModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="popUp" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Remove Row
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="popUp">
          <div className="container">Are you sure want to delete this row?</div>
        </Modal.Body>
        <Modal.Footer className="popUp">
          <Button variant="primary" onClick={this.props.deleteData}>
            Yes
          </Button>
          <Button variant="secondary" onClick={this.props.toggleModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PopUp;
