import React from 'react'

export default function UseageCard(props) {
  return (
    <div className='text-center'>
      <img
      className='w-32 h-32 md:w-40 md:h-auto rounded-full mx-auto p-5' 
       src={props.img} alt={props.alt}  />
      <h3 className='font-bold text-xl py-3 capitalize'>{props.name}</h3>
    </div>
  )
}



export function ServiceCard(){
    return(
        <>
        <section>
            <div>
                <div>
                    <div className='mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 '>
                        <div className=' shadow-2xl   my-5'>

                    <UseageCard
                img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ess_a3g9Q3q1GrQeVy3M0PPkEv5qBktIUQeHFc6OVg&s'}
                alt={`data storage img`}
                name="free storege"
                
                />
                </div>
                        <div className=' shadow-2xl  my-5'>

                    <UseageCard
                img={'https://cdn-icons-png.flaticon.com/128/1975/1975672.png'}
                alt={`data storage img`}
                name="free storege"
                
                />
                </div>
                        <div className=' shadow-2xl  my-5'>

                    <UseageCard
                img={'https://cdn-icons-png.flaticon.com/128/568/568717.png'}
                alt={`data storage img`}
                name="free storege"
                
                />
                </div>
                        <div className=' shadow-2xl  my-5'>

                    <UseageCard
                img={'https://cdn-icons-png.flaticon.com/128/8508/8508303.png'}
                alt={`data storage img`}
                name="free storege"
                
                />
                </div >
                        <div className=' shadow-2xl  my-5 sm:-mr-96 md:-mr-0'>

                    <UseageCard
                img={'https://cdn-icons-png.flaticon.com/128/3713/3713201.png'}
                alt={`data storage img`}
                name="free storege"
                
                />
                </div>
                  
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}