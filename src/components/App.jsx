import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  
  leaveFeedback = e => {
    const target = e;
     console.log(target);
    // this.setState(prevState => ());
   
   };






  render() {

    const {good, neutral, bad} = this.state;
    
    const options = Object.keys(this.state);
    
   

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: `column`,
          justifyContent: 'start',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.leaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={0}
          positivePercentage={0} />
      </div>
    );
    
  };
};


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
