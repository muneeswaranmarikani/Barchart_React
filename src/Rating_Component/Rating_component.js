import React, { useState } from 'react';
import './Rating_component.css';

const generatedRatings = [35, 50, 40, 22, 10];
const xAxis = [1, 2, 3, 4, 5];
const yAxis = [50, 40, 30, 20, 10]; 

const RatingComponent = () => {
  const [ratings, setRatings] = useState([0, 0, 0, 0, 0]);

  const regenerateRatings = () => {
    setRatings(generatedRatings);
  };

  return (
    <div className="rating-container">
      <h1 className="title">Rating Chart</h1>
      <div className="chart-container">
        <div className="y-axis-label">No. of ratings</div>
        <div className="bar-chart">
          <div className="y-axis-values">
            {yAxis.map((value, index) => (
              <div key={index} className="y-axis-value">{value}</div>
            ))}
          </div>
          {ratings.map((rating, index) => (
            <div 
              key={index} 
              className="bar" 
              style={{ height: `${rating * 5}px` }}
            >
            </div>
          ))}
        </div>
        <div className='x-axis-values'>
          {xAxis.map((num, index) => (
            <div key={index} className="x-axis-value">{num}</div>
          ))}
        </div>
        <div className="x-axis-label">Rating</div>
      </div>
      <button onClick={regenerateRatings} className="regenerate-button">
        Regenerate
      </button>
    </div>
  );
};

export default RatingComponent;
