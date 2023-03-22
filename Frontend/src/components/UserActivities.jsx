import React, { Component } from 'react';
// import back2 from '../images/back2.jpg'
import donation from '../images/donation.png';
import epass from '../images/epass.png'
import pass from '../images/pass.png'
import donate from '../images/donate.png'


import back6 from '../images/back6.jpg'
class UserActivities extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
          
            id:''

        

        }
        this.donation=this.donation.bind(this);
        this.bookEpass=this.bookEpass.bind(this);
        this.updateProfile=this.updateProfile.bind(this);
    }

    updateProfile(id){
        this.props.history.push(`/update/${id}`);
    }
    bookEpass(passId){
        this.props.history.push(`/book-Epass/${passId}`);
    }
    donation(){
        this.props.history.push('/donation');
    }
  
  
    componentDidMount(){
        const userData=window.localStorage.getItem('user');
            const UserDate=JSON.parse(userData);
           
                 let UserId=UserDate.id;
               console.log(UserId)
                 this.setState({id:UserId})
    }
    render() {
        return (
           <body
        //     className="container-fluid"  style={{
        //     width:'100vw',
        //     height:'100vh',
        //     margin:'0',
        //     alignItems:'center',
        //     overflow:'hidden',
           
        //     marginRight:'0',
        //     marginTop:'0',
        //     padding:'0',
           
        //   }}
          >
             
            {/* <div className="bg-image"  style={{ */}
       <div className="container-fluid"  style={{

    
       backgroundImage: `url('${back6}')` ,
    //    backgroundRepeat:'no-repeat',
    //    backgroundColor: 'lightblue',
    //    width:'100vw',
       height:'100vh',
    //    marginRight:'0px',
    //    backgroundSize: 'cover',
    //    alignItems:'center',
    //  padding:'0',
    //  margin:'0',
   }} >


           <p  align="right">   
                   <button style={{marginRight:'0px'}} className="btn btn-primary" onClick={()=>this.updateProfile(this.state.id)}>Update Profile</button></p>
                  <div className="row flex-row flex-nowrap" style={{ marginLeft: '230px',  marginTop:'80px',}}>
        <div className="col-4">
            <div className="card border border-warning shadow-0 mb-3" style={{maxWidth: "18rem"}}>  <button className="btn btn-primary" onClick={() => this.bookEpass()} >Book E-Pass</button>
            <div className="mycontainer">
                    {/* <img   width="400" height="400" src={epass} ></img> */}
                    <img height="400" src={pass} ></img>

                </div></div>
        </div>
        <div className="col-"  style={{   marginLeft: '205px',}}>
            <div className="card border border-warning shadow-0 mb-3" style={{maxWidth: "18rem"}}>  <button className="btn btn-primary" onClick={this.donation}>Donation</button>
            <div className="mycontainer">
                    {/* <img  width="400" height="400" src={donation} ></img> */}
                  <img height="400" src={donate} ></img>

                </div></div>
        </div>
     
     
    </div>
    </div> 
      
        </body>
        );
    }
}

export default UserActivities;