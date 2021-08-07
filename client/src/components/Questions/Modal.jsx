import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Questions.css';
import axios from 'axios';
import Photos from './Photos.jsx';

export default class ModalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      question: '',
      answer: '',
      photos: [],
      photo: ''
    }

    this.onChange = this.onChange.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
    this.postAnswer = this.postAnswer.bind(this);
    this.addPhotos = this.addPhotos.bind(this);
    this.resetAndCloseModal = this.resetAndCloseModal.bind(this);

  }

  postQuestion(event) {
    var questionDetails = {
      body: this.state.question,
      name: this.state.name,
      email: this.state.email,
      product_id: this.props.productId
    }
    axios.post('api/qa/questions', questionDetails)
    .then(() => this.resetAndCloseModal())
    .catch(err => console.log(err))
  }

  postAnswer(event) {
    var answerDetails = {
      body: this.state.answer,
      name: this.state.name,
      email: this.state.email,
      photos: this.state.photos
    }
    axios.post(`api/qa/questions/${this.props.questionId}/answers`, answerDetails)
    .then(() => this.resetAndCloseModal())
    .catch(err => console.log(err))
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addPhotos(event) {
    this.setState({
      photo: URL.createObjectURL(event.target.files[0])
    }, () => (console.log(this.state.photo)))
  }

  resetAndCloseModal() {
    this.setState({
      name: '',
      email: '',
      question: '',
      answer: '',
      photos: [],
      photo: ''
    })
    this.props.closeModal();
  }

  // addPhotos(event) {
  //   this.setState({
  //     photos: [...this.state.photos, event.target.value]
  //   }, () => (console.log(this.state.photos)))
  // }

  // getValidationState() {
  //   const length = this.state.[event.target.name].length;
  //   if (length > 10) return 'success';
  //   if (length > 5) return 'warning';
  //   if (length > 0) return 'error';
  //   return null;
  // }

  render() {
    if (this.props.type === 'add question') {
      // console.log(this.props.productId)
      return (
        <Modal
          show={this.props.show}
          onHide={this.resetAndCloseModal}
        >
        <Modal.Header closeButton closeLabel='' >
          <Modal.Title className='question-modal-title'>Ask Your Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group >
            <Form.Label>Your Question: *</Form.Label>
            <Form.Control
                as='textarea'
                type="text"
                onChange={this.onChange}
                name="question"
                value={this.state.question}
                placeholder="Why did you like the product or not?"/>
            <Form.Control.Feedback type="invalid">
                Please write a question.
            </Form.Control.Feedback>
            <br></br>
            <Form.Label>What is your nickname: *</Form.Label>
            <Form.Control
                type="text"
                onChange={this.onChange}
                name="name"
                value={this.state.name}
              placeholder="Example: jackson11!"/>
            <Form.Control.Feedback type="invalid">
                Please choose a username.
            </Form.Control.Feedback>
            <br></br>
            <Form.Label>Your Email: *</Form.Label>
            <Form.Control
                type="email"
                onChange={this.onChange}
                name="email"
                value={this.state.email}
                placeholder="Email"/>
            <Form.Control.Feedback type="invalid">
                Please provide an email.
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={() => this.postQuestion()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      )
    }
    else {
      // console.log(this.props.questionId)
      return (
        <Modal
          show={this.props.show}
          onHide={this.resetAndCloseModal}
        >
        <Modal.Header closeButton closeLabel='' >
          <Modal.Title className='question-modal-title'>Submit Your Answer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group >
            <Form.Label>Your Answer: *</Form.Label>
            <Form.Control
                as='textarea'
                type="text"
                onChange={this.onChange}
                name="answer"
                value={this.state.answer}
                placeholder="Your answer here"/>
            <Form.Control.Feedback type="invalid">
                Please write an answer.
            </Form.Control.Feedback>
            <br></br>
            <Form.Label>What is your nickname: *</Form.Label>
            <Form.Control
                type="text"
                onChange={this.onChange}
                name="name"
                value={this.state.name}
              placeholder="Example: jack543!"/>
            <Form.Control.Feedback type="invalid">
                Please choose a username.
            </Form.Control.Feedback>
            <br></br>
            <Form.Label>Your Email: *</Form.Label>
            <Form.Control
                type="email"
                onChange={this.onChange}
                name="email"
                value={this.state.email}
                placeholder="Email"/>
            <Form.Control.Feedback type="invalid">
                Please provide an email.
            </Form.Control.Feedback>
            <br></br>
            <Form.Label>Add photos: </Form.Label>
            <Form.Control
                type="file"
                name="photos"
                // value={this.state.photos}
                onChange={this.addPhotos}
                />
            <div>
              <Photos type='modal' photo={this.state.photo}/>
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={() => this.postAnswer()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      )
    }
  }

}
