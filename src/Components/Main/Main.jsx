import React from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import cruz from '../../oranpic/cruz.jpg'
import cathedral from '../../oranpic/cathedral.jpg'
import theatre from '../../oranpic/theatre.jpg'
import frontdemer from '../../oranpic/frontdemer.jpg'
import zoo from '../../oranpic/zoo.jpg'
import park from '../../oranpic/park.jpg'
import mosquepacha from '../../oranpic/mosquepacha.jpg'
import ibnbadis from '../../oranpic/ibnbadis.jpg'
import emir from '../../oranpic/emir.jpg'
import center from '../../oranpic/center.jpg'
import grand from '../../oranpic/grand.jpg'
import  coolpark from '../../oranpic/coolpark.jpg'
import hipodrom from '../../oranpic/hipodrom.jpg'






const Data =[
  {
    id:1,
    imgSrc:cruz,
    destTitle:'Fort Santa cruz',
    location: 'Chapelle Santa Cruz, Oran',
    grade: 'Historical Sites',
    fees: '500DA',
    description:"Perched atop Mount Aïdour, Fort de Santa Cruz is a 17th-century Spanish military marvel offering stunning views of Oran. Named after a Spanish governor, this imposing fort is a testament to the citys historical battles. Below the fort lies the Chapel of the Virgin, built in the 19th century to honor Oran is protector, Notre-Dame-du-Salut. Recently restored, the site boasts a basilica and a new panoramic platform, allowing visitors to admire the city, the Sebkha Lake,and the Mediterranean coastline in all its glory. While accessing the fort by car requires caution due to steep roads, avoid visiting after dark for safety reasons.Mornings and daytime offer the perfect opportunity to explore this historical landmark and symbol of Oran ."
  },
 
  {
    id:2,
    imgSrc:cathedral,
    destTitle:'Sacred Heart Cathedral',
    location: 'Oran centre-ville',
    grade: 'Historical Sites',
    fees: '100DA',
    description:'This 20th-century Roman Catholic cathedral is another remarkable example of Oran is architecture.'
  },


  {
    id:3,
    imgSrc:theatre,
    destTitle:'ABDELKADER ALLOULA Theater',
    location: 'Place d arme ',
    grade: 'Historical Sites',
    fees: '250DA',
    description:'This 19th-century theater is a cultural hub in Oran. It regularly hosts theater productions, musical performances, and dance shows.',
  },


  {
    id:3,
    imgSrc:frontdemer,
    destTitle:'Oran Waterfront',
    location: 'Oran Front de mer ',
    grade: 'Leisure Sites',
    fees: '0DA',
    description:'The Oran waterfront promenade is an ideal spot to relax and enjoy the sea views. You will also find numerous restaurants, cafes, and shops along the way.    ',
  },


  {
    id:4,
    imgSrc:zoo,
    destTitle:'Oran Zoological Garden',
    location: 'Av. Cheikh Abdelkader, Oran',
    grade: 'Leisure Sites',
    fees: '250DA',
    description:'This zoo houses a diverse range of animals from around the world. It is a perfect outing for families.',
  },


  {
    id:5,
    imgSrc:park,
    destTitle:'Oran Amusement Park',
    location: 'El hamri',
    grade: 'Leisure Sites',
    fees: '1000DA',
    description:'This amusement park offers rides and attractions for all ages. It is the ideal place for a fun-filled day with family or friends.',
  },
  {
    id: 7,
    imgSrc: mosquepacha,
    destTitle: 'Pacha Mosque',
    location: 'Oran city center',
    grade: 'Historical Sites',
    fees: 'Free', // Assuming no entrance fee
    description: 'This 18th-century mosque is one of Oran\'s most stunning religious structures. Its Ottoman architecture is particularly remarkable.'
  },


  {
    id: 8,
    imgSrc: ibnbadis,
    destTitle: 'Mosquée Ibn Badis',
    location: 'Oran city center',
    grade: 'Historical Sites',
    fees: 'Free',
    description: 'A prominent mosque in Oran, known for its architectural style and religious significance.'
  },


  {
    id: 9,
    imgSrc: emir,
    destTitle: 'Mosquée Amir Abdelkader (Barkiou)',
    location: 'Oran (Barkiou district)',
    grade: 'Historical Sites',
    fees: 'Free',
    description: 'A beautiful mosque named after the Algerian emir, Abdelkader El Djezairi.'
  },


  {
    id: 10,
    imgSrc: center,
    destTitle: 'Sénia Center',
    location: 'Sénia, Oran',
    grade: 'Shopping',
    fees: '0DA',
    description: 'A popular shopping center in Sénia, offering a variety of stores, restaurants, and entertainment options.'
  },


  {
    id: 11,
    imgSrc: grand,
    destTitle: 'Grand Oran',
    location: 'Oran city center',
    grade: 'Shopping',
    fees: '0DA',
    description: 'A large shopping mall in the heart of Oran, featuring a wide range of shops, cafes, and a cinema.'
  },


  {
    id: 12,
    imgSrc: coolpark,
    destTitle: 'Cool Park',
    location: 'Oran city center',
    grade: 'Leisure Sites',
    fees: '350DA',
    description: 'A family-friendly amusement park with various rides, games, and a food court.'
  },


  {
    id: 13,
    imgSrc: hipodrom,
    destTitle: 'Hippodrome Sénia',
    location: 'Sénia, Oran',
    grade: 'Leisure Sites',
    fees: '500DA',
    description: 'A horse racing track and event venue in Sénia, offering exciting races and events throughout the year.'
  },


]


const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Most visited distinations
        </h3>
      </div>
      <div className="secContent grid">
      {/*utilise higher order array method map  ,
        use list d'objet dans une arrey , =+ create une array
       "data" fyha ndiro .map()array to fetch each distination a  la fois */}
        {
          Data.map(({ id, imgSrc, destTitle,location,grade,fees,description }) => {
            return (
              <div key={id} className="singleDistination">
                <div className="imgDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
       
                <div className="cardInfo">
                  <h4 className="destTitel">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon' />
                  </button>


                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  )
}


export default Main
