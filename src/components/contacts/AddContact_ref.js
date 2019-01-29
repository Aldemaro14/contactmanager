import React, { Component } from 'react'

class AddContact extends Component {

    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
  

    onSubmit = e =>{
      e.preventDefault();
      const contact = {
          name: this.nameInput.current.value,
          email: this.emailInput.current.value,
          phone: this.phoneInput.current.value
      };
      console.log(contact);
    }

   static defaultProps = {
       name: 'Fredn Smith',
       email: 'fred@yahoo.com',
       phone: '777-777-7777'
   };

  render() {
    const {name, email, phone} = this.state;
    return (
      <div clasName="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
             <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name" 
                    className="form-control form-control-lg"
                    placeholder="Enter Name..." 
                    defaultValue={name}
                    ref={this.nameImput}/>
             </div>
             <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email" 
                    className="form-control form-control-lg"
                    placeholder="Enter Email..." 
                    defaultValue={email}
                    ref={this.emailImput}
                    />
             </div>
             <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    name="phone" 
                    className="form-control form-control-lg"
                    placeholder="Enter phone..." 
                    defaultValue={phone}
                    ref={this.phoneImput}
                    />
             </div>
             <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
          </form>
        </div>
      </div>
    )
  }
}


export default AddContact;
