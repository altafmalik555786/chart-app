import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalViewColor(props) {
  const {
    
    onChangeRed,
    onChangeBlue,
    onChangeYellow,
    onChangeGreen,
    onChangePurple,
    onChangeOrange,
    red,
    blue,
    green,
    yellow,
    purple,
    orange
  } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" className="modal-view-btn" onClick={handleShow}>
        Change Colors
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal"
      >
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Update Values</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <form className="form-case">
            <div >
              <label htmlFor="one">1</label>
              <input placeholder="Enter Color Sequencly"  type="color" value={red} onChange={onChangeRed} id="one" />
              <label htmlFor="two">2</label>
              <input placeholder="Enter Color Sequencly"  type="color"  value={blue} onChange={onChangeBlue} id="two" />
            </div>
            <div>
              <label htmlFor="three">3</label>
              <input placeholder="Enter Color Sequencly" type="color" value={yellow}  onChange={onChangeYellow} id="three" />
              <label htmlFor="four">4</label>
              <input placeholder="Enter Color Sequencly" type="color" value={green} onChange={onChangeGreen} id="four" />
            </div>
            <div>
              <label htmlFor="five">5</label>
              <input placeholder="Enter Color Sequencly" type="color" value={purple} onChange={onChangePurple} id="five" />
              <label htmlFor="six">6</label>
              <input placeholder="Enter Color Sequencly" type="color" value={orange} onChange={onChangeOrange} id="six" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
