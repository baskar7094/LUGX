import React from 'react'

export default function BannerCard(props) {
  return (
    <div>
      <img src={props.img} alt={props.alt} className='object-cover w-full bg-cover mix-blend-plus-darker h-auto ' />
    </div>
  )
}
