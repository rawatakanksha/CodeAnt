import React from 'react'

function DropDownButton(props) {
    var content=props.content
    var handleClick=props.onClick
  return (
    <div onClick={handleClick}
    className='w-4/5 h-8 border m-4 rounded-md pl-3 hover:cursor-pointer flex items-center
    
    '
    > <p className=''>AkankshaRawat</p>
    <img src='../../../public/drop-down-icon-10.jpg' className=' h-6 ml-2'/>
    </div>
  )
}

export default DropDownButton