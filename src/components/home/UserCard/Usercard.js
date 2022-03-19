import { Avatar } from '@mui/material'
import React from 'react'
import './usercard.css'

const Usercard = () => {
  return (
    <div className='usercard'>
        <div className='usercard__top'>
        <Avatar aria-label="recipe" style={{
                     width:"60px",
                     height:"60px",
                     backgroundColor:"#42A5F5",
                     marginRight:"20px"
                     }}>
            M
          </Avatar>
          <div>
              <h3>Marshal Yordanos</h3>
              {/* <p>marshalyordanos32@gmail.com</p> */}
          </div>

        </div>
        <div className='usercard_des'>
            <p>Give yourself the flexibility to work when, 
                where and how you work best.Take control
                 of notifications, collaborate live
                  or on your own time, and find answers in 
                  conversations from across your company.</p>
        </div>
    </div>
  )
}

export default Usercard