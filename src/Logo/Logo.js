import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import pers from './person.png'


const Logo =()=>{
    return(
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2' options={{max:55}} style={{height:'150px', width:'150px'}}>
                <div>
                   <div className='Tilt-inner pa3'><img style={{paddingTop:'5px'}} alt='logo' src={pers}/>
                   </div>
                </div>
            </Tilt>

        </div>
    )
}
export default Logo;