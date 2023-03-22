import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import kedar from '../images/kedar.jpg'

import { render } from "react-dom";

class TemplePageComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tempdata : [
            {tempid:1,tempname:"Kedarnath Temple",img:kedar},
            {tempid:2,tempname:"Somanath Temple",img:"https://media.gettyimages.com/id/946880772/photo/old-and-beautiful-shiva-temple-called-deo-somnath-built-in-the-12th-century-in-rajasthan-on.jpg?s=612x612&w=0&k=20&c=uE9xv5GGbLLOsLfA5epJ-TlJtvAHWMvS7pvHSifDlUg="},
            {tempid:3,tempname:"Tirupati Balaji",img:"https://media.istockphoto.com/id/1007659410/photo/the-tirupati-temple.jpg?s=612x612&w=is&k=20&c=wUfhuE7oMU3iit_vuVYJ97wlOzHuo6gDTiYu4SHP-HY="},
            {tempid:4,tempname:"Dagdusheth Halwai Ganpati Temple",img:"https://t3.ftcdn.net/jpg/05/50/28/30/240_F_550283062_tHlPLRYI0ZAE5dsURXdRt2jlWSPfHL6S.jpg"}

     
          ],
        // history :useHistory(),

      };
      this.handleDelete = this.handleDelete.bind(this);
    }
    
  
    handleDelete(index) {
        // code for delete temples
    //   let tempdata = [...this.state.tempdata];
    //   tempdata.splice(index, 1);
    //   this.setState({ tempdata });

    // this.props.history.push(`/user-activities/${index}`)

    this.props.history.push('/user-activities')

    }
  
    render() {
      return (
        <div>
        {this.state.tempdata.map((temp, index) => (
        <div className="d-flex flex-row bd-highlight mb-3 justify-content-between m-5 mytemple">
            <div className='tempimg'>
                <img src={temp.img} alt="opps" srcset=""/>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{color:"darkred"}}> 
                <h2>{temp.tempname}</h2>
                <div style={{color:"black"}}>Temple discription</div>
            </div>
            <div className="d-flex align-items-center">
                <button className="btn btn-success" onClick={() => this.handleDelete(index)}>Book Slot</button>
            </div>
        </div>
        ))}
        
        
        </div>
        )
    }
  }
export default TemplePageComponent;

// export default function TemplePageComponent() {
// const history =useHistory()

//  // Tempararly hardcoding data;
// //  const [prop,setprop]=useState([])
// //  setprop([{"tempid":1,"tempname":"Ram Mandir","img":"https://images.pexels.com/photos/7366019/pexels-photo-7366019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{"tempid":2,"tempname":"somanath temple","img":"https://images.pexels.com/photos/9495985/pexels-photo-9495985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}])

//  let prop = [{tempid:1,"tempname":"Ram Mandir",img:"https://images.pexels.com/photos/7366019/pexels-photo-7366019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{"tempid":2,"tempname":"somanath temple","img":"https://images.pexels.com/photos/9495985/pexels-photo-9495985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}];
//  // make axios get request to get data from temples table 
// //   const  getproperties= async()=>{
// //     await axios.get("http://localhost:8080/spring-mvc-boot/users/temples").then((res)=>setprop(res.data)).catch((err)=>console.log(err))
             
// //   }

// //this is useEffect hook witch will get data when the componet in render
// //  useEffect(()=>{
// //   getproperties()
// //  },[])

//     return (
// <>
//       <h1 style={{"margin":"4%","fontFamily":"italic"}}>Temples</h1>
//       <hr style={{"color":"black"}}></hr>        
//         <div>
//         {prop.map((proper)=>{
//             console.log(proper);
//             console.log(proper.img);
//         <div  className="card" style={{"width": "40vw","margin":"4%"}} >
//         <img className="card-img-top" src={proper.img} />
//         <div className="card-body" >
//           <h5 className="card-title">hiiii</h5>
//           <p className="card-text">{proper.tempid}</p>  
//           <button onClick={()=>{
//                         history.push("/user-activities")
//           }} className="btn btn-primary">Book Now</button> 
//         </div>
//       </div>
//         })}
//         </div>

//  </>

//     );

// }


 

























// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'
// import { Link, useHistory } from 'react-router-dom'
// import { render } from "react-dom";
// import { useReactToPrint } from "react-to-print";
// // import { Pagination } from '../Pagination/pagination'
// // import{ GoogleMap }from '@react-google-maps/api'
// // import StripeCheckout  from 'react-stripe-checkout'

// // import url  from '../../config'

// export default function TemplePageComponent() {
//  const history =useHistory()

//  // Tempararly hardcoding data;
//  const [prop,setprop]=useState([])
//  setprop([{"tempid":1,"tempname":"Ram Mandir","img":"https://images.pexels.com/photos/7366019/pexels-photo-7366019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{"tempid":2,"tempname":"somanath temple","img":"https://images.pexels.com/photos/9495985/pexels-photo-9495985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}])
 
//  // make axios get request to get data from temples table 
// //   const  getproperties= async()=>{
// //     await axios.get("http://localhost:8080/spring-mvc-boot/users/temples").then((res)=>setprop(res.data)).catch((err)=>console.log(err))
             
// //   }

// //this is useEffect hook witch will get data when the componet in render
// //  useEffect(()=>{
// //   getproperties()
// //  },[])
 
// render(){

// } 
//     return(
// <>
//      <h1 style={{"margin":"4%","fontFamily":"italic"}}>Temples</h1>
//      <hr style={{"color":"black"}}></hr>
       
        
//     <iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3867250.9286021274!2d76.77476745!3d18.815426549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677051620764!5m2!1sen!2sin"} width="800" height="1000" style={{"border":"0" ,"allowfullscreen":"" ,"loading":"lazy" ,"referrerpolicy":"no-referrer-when-downgrade",} }align="right"></iframe>  
     
//       return(
//         <>    
//         {prop.map((proper)=>{
//         <div  className="card" style={{"width": "18rem","margin":"4%"}} >
//         <img className="card-img-top" src={proper.img} />
//         <div className="card-body" >
//           <h5 className="card-title">{proper.tempname}</h5>
//           <p className="card-text">{proper.tempid}</p>
          
            
//           <button onClick={()=>{
//                         history.push("login")
//           }} className="btn btn-primary">Book Now</button> 
//         </div>
//       </div>
//         })}

// </>
// )

// export default TemplePageComponent;
