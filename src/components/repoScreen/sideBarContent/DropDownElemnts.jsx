import React from 'react'
import { NavLink } from 'react-router-dom'

function DropDownElemnts() {
  return (
    <div>
        <ul className='m-6 mt-4 font-sans font-medium text-sm'>
            <li className='m-2'>
              <div className='flex items-center'>
              <img src='../../../../public/Home_icon_black.png'
              className='h-5 mr-2'/>
                <NavLink to="/repoContent">Repositories</NavLink>
                </div>
            </li>

            <li className='m-2'>
            <div className='flex items-center'>
              <img src='../../../../public/icon-review-38.png'
              className='h-4 mr-2 ml-1'/>
              <NavLink to="/AIReview">AI Code Review</NavLink>
              </div>
              </li>
            <li className='m-2'>
            <div className='flex items-center'>
              <img src='../../../../public/pngtree-book-icon-png-image_5143094.jpg'
              className='h-5 mr-2'/>
              <NavLink to="/instructions">How To Use</NavLink>
              </div>
              </li>
            <li className='m-2'>
            <div className='flex items-center'>
              <img src='../../../../public/settings-icon-1964x2048-8nigtrtt.png'
              className='h-4 mr-2 ml-1'/>
              <NavLink to="/settings">Settings</NavLink>
              </div>
              </li>
        </ul>
    </div>
  )
}

export default DropDownElemnts