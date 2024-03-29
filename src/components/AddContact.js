import React from 'react';

class AddContact extends React.Component{
    state={
        name: "",
        email: "",
    };

    add = (e) =>{
        e.preventDefault();   //to prevent page from refreshing
        if(this.state.name==="" || this.state.email===""){
            alert("All the field are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});   
        //console.log(this.state);
    }

    render(){
        return(
            <div className="ui main" style={{width: '50%', marginLeft: '25%', marginRight:'25%'}}>
                <h2 style={{textAlign:'center', marginTop: '4%'}}>Add Contact</h2>

                <form className="ui form" onSubmit={this.add}>
                    <div className= "field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
                    </div>

                    <div className= "field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={this.state.email}  onChange={(e)=> this.setState({email: e.target.value})} />
                    </div>
                    <button className="ui primary button">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;