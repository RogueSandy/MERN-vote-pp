import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import Chart from "react-apexcharts";

import { vote } from '../store/actions'

import '../styles/poll.css'

const Poll = ({ poll, vote }) => {

  const answers = poll.options && poll.options.map(option => (
    <button
      key={`o_${option._id}`}
      onClick={() => vote(poll._id, { answer: option.option })}
    >
      <span className='bg'></span>
      {option.option}
    </button>
  ))

  const [chartState, setChartState] = useState({
    options: {
      chart: {
        id: "Vote-bar"
      },
      xaxis: {
        categories: poll.options?.map(option => option.option)
      },
      yaxis: [
        {
          labels: {
            formatter: function (val) {
              return val.toFixed(0);
            }
          }
        }
      ],
      tooltip: {
        enabled: true,
        offsetX: 0,
      }
    },
    series: [
      {
        name: "Votes",
        // data: [35, 29, 23, 29]
        data: poll.options?.map(option => option.votes)
      }
    ]
  })



  return (
    <div className='pollcontainer'>
      <h3>{poll.question}</h3>
      <section>
        <div className="poll">
          <h3>Options:</h3>
          <div className='options'>{answers}</div>
        </div>
        <div className='chart'>
          <h3>Vote Chart:</h3>
          <Chart
            className="barchart"
            options={chartState.options}
            series={chartState.series}
            type="bar"
          />
          {/* <p>Total votes: 116</p> */}
        </div>
      </section>
      {/* <p className='winner'>The winner is : <span>Action</span></p> */}
    </div>
  )
}

export default connect(store => ({
  poll: store.currentPoll
}), { vote })(Poll)