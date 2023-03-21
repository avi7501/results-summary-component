import React from 'react'

const ResultsCard = () => {
  return (
    <div className='bg-cobaltBlue  flex flex-col w-64 text-white rounded-2xl p-5 justify-center items-center '>
       <p className='text-slateBlue'>Your Result</p>
       <div className='bg-violetBlue rounded-full w-28 h-28'>
        <p className='text-4xl'>76</p>
        <p>of 100</p>
       </div>
       <p className='text-xl font-semibold'>Great</p>
       <p className='text-slateBlue'>You have scored higher than 65% of the people who have taken these tests.</p>
    </div>
  )
}

export default ResultsCard