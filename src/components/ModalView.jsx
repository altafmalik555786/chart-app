import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalView(props) {
  const { 
    onChange,
    onChangeTwo,
    onChangeThree,
    onChangeFour,
    onChangeFive,
    onChangeSix,
    one,
    two,
    three,
    four,
    five,
    six
    } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <Button variant="danger" className="modal-view-btn" onClick={handleShow}>
        Change Values
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
          <form>
            <div>
            <label htmlFor="one">1</label>
            <input type="number" value={one} onChange={onChange} id="one" />
            <label htmlFor="two">2</label>
            <input type="number"  value={two} onChange={onChangeTwo} id="two" />
            </div>
            <div>
            <label htmlFor="three">3</label>
            <input type="number"  value={three} onChange={onChangeThree} id="three" />
            <label htmlFor="four">4</label>
            <input type="number"  value={four} onChange={onChangeFour} id="four" />
            </div>
            <div>
            <label htmlFor="five">5</label>
            <input type="number"  value={five} onChange={onChangeFive} id="five" />
            <label htmlFor="six">6</label>
            <input type="number"  value={six} onChange={onChangeSix} id="six" />
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
