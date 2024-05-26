import React from 'react'
import './home.css'
import oranmap from '../../oranpic/oranmap.mp4'
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsListTask} from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';








const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={oranmap} muted autoPlay loop type='video/mp4'></video>
      <div className="homeContent container">
        <div className="textDiv">


          <span className="smallText">
            Our packages
          </span>


          <h1 className="homeTitles">
            Search your Holiday
          </h1>


        </div>
        <div className="cardDiv grid">


          <div className="distinationInput">
            <label htmlFor="city" > Search your distination : </label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here ...'/>
              <GrLocation className='icon' />
            </div>
          </div>


          <div className="dateInput">
            <label htmlFor="date" > Select your date : </label>
            <div className="input flex">
              <input type="date" />
              <GrLocation  className='icon'/>
            </div>


          </div>


          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price :</label>
              <h3 className="total">5000DA</h3>
            </div>
            <div className="input flex">
              <input type="range"  max="5000" min="0"/>
            </div>
          </div>
         
          <div className="searchOptions flex">
          <HiFilter className='icon' />
          <span>MORE FILTERS</span>


          </div>


        </div>
        <div className="homeFooterIcons flex">


          <div className="rightIcons">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
          </div>


          <div className="leftIcons">
          <BsListTask className='icon'/>
          <TbApps className='icon'/>
          </div>
       
        </div>


       
      </div>
    </section>
  )
}


export default Home

