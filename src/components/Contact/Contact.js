import React, {Component} from 'react'
import axios from '../../axios-contact';


class Contact extends Component {
 
    state = {
        name: '',
        email: '',
        message: '',
        emailStatus: ''
    }


    onNameChange(event){
        console.log(event.target.value)
        this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
    this.setState({email: event.target.value})
    }
    
    onMessageChange(event) {
    this.setState({message: event.target.value})
    }
    
    handleSubmit(e){
        e.preventDefault();

        const contact = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/contact.json', contact)
        .then(response =>  console.log(response))
        .catch(error => console.log(error));
      }
    
      resetForm(){
         this.setState({name: '', email: '', message: ''})
      }
  
  render() {

   return(

    <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
     </div>
   )
  }
}

export default Contact;