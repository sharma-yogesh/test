import React, { useEffect, useState } from 'react'
import "./Home.css"
import Navbar from './Navbar'
import { SlArrowDown } from "react-icons/sl";
import Footer from './Footer';

const Home = () => {
  

  const [click, setClick] = useState(true)
  const city = {
    "data": [{
      id: "1",
      city:'LOS VEGAS',
      code:"NV(LAS)"
    }, {
      id: "1",
      city:"LOS ANGLES",
      code:"CA(LAX)"

    }, {
      id: "1",
      city:"NEW YORK CITY",
      code:"NY(NYC)"
    }, {
      id: "1",
      city:"PALM SPRINGS",
      code:"CA(PSP)"
    },
    {
      id: "1",
      city:"PORTLAND",
      code:"OR(PDX)"
    },
    {
      id: "1",
      city:"ALL CITIES"
    }
  ]
  }
  const [selectedOption, setSelectedOption] = useState("San fransico");


  const onOptionClicked = value => () => {
    setSelectedOption(value);
    // setClick(false);
    console.log(selectedOption);
    };

  return (
    <>
      <Navbar />
    <div className='homePage'>
      <div className='options'>
        <form action=''>
           <div className='radioOption'>
            <input type='radio' name="opt" value="Round Trip" />
            <label>Round Trip</label>
           </div>
           <div className='radioOption'>
            <input type='radio' name="opt" value="One Way" />
            <label>One Way</label>
           </div>
           <div className='radioOption'>
             <input type="radio" name="opt" value="Multi City" />
             <label>Multi City</label>
           </div>
        </form>
      </div>
      <div className='city'>
        <h1>Book from <span className='cityColor'>{selectedOption}</span> <button onClick={() => setClick(!click)}><SlArrowDown /></button> to</h1>
       
      </div>
      <div>
      {click === true ? 
          <div className='cities'>
        {city.data.map((val) =>{
              return(
                  <div  className='box' onClick={onOptionClicked(val.city)} >
                    <h2 >{val.city}</h2>
                    <p>{val.code}</p>
                  </div>
                  )
                })}
                </div>
       :null}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home
