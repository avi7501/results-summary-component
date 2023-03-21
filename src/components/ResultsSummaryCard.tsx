import React from 'react'
import ResultsCard from './ResultsCard'
import SummaryCard from './SummaryCard'

const ResultsSummaryCard = () => {
  return (
    <div className='flex flex-row'>
        <ResultsCard/>
        {/* <SummaryCard/> */}
    </div>
  )
}

export default ResultsSummaryCard