import React, { useState } from 'react';
import './App.css';

function App() {
  const [openDay, setOpenDay] = useState('WED');

  const scheduleData = [
    {
      day: 'MON',
      colors: ['#c4ac08', '#f6f77f'],
      events: []
    },
    {
      day: 'TUE',
      colors: ['#bd08c4', '#d994f3'],
      events: [
        { time: '22.30 - 00.00', place: 'Tiger Ekkamai' }
      ]
    },
    {
      day: 'WED',
      colors: ['#068b06', '#98f77f'],
      events: [
        { time: '23.30 - 01.00', place: 'Hashtag Rangsit' }
      ]
    },
    {
      day: 'THU',
      colors: ['#c44a08', '#f7cb7f'],
      events: [
        { time: '00.30 - 02.00', place: 'BLU Thonglor' }
      ]
    },
    {
      day: 'FRI',
      colors: ['#0869c4', '#7fa6f7'],
      events: [
        { time: '21.30 - 23.00', place: 'Hashtag Rangsit' },
        { time: '00.00 - 01.30', place: 'Ratchhour' }
      ]
    },
    {
      day: 'SAT',
      colors: ['#9108c4', '#9108c4'],
      events: [
        { time: '20.30 - 22.00', place: 'Chilling House in TOKYO' },
        { time: '00.00 - 01.30', place: 'ชงเจริญ Festival' }
      ]
    },
    {
      day: 'SUN',
      colors: ['#c40808', '#c40808'],
      events: [
        { time: '22.30 - 00.00', place: 'Brick Bar' },
        { time: '00.30 - 02.00', place: 'XYZ Pinklao' }
      ]
    },
  ];

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Journey Latest Schedule</h1>
      </header>
      <div className="schedule-container">
        {scheduleData.map((item) => (
          <div key={item.day} className={`day-card ${openDay === item.day ? 'is-open' : ''}`}>
            <button
              className="day-button"
              onClick={() => toggleDay(item.day)}
            >
              <span
                className="day-text"
                style={{
                  backgroundImage: `linear-gradient(to right, ${item.colors[0]}, ${item.colors[1]})`
                }}
              >
                {item.day}
              </span>
              <span className="arrow-icon">
                {openDay === item.day ? '▲' : '▼'}
              </span>
            </button>
            {openDay === item.day && (
              <div className="events-list">
                {item.events.length > 0 ? (
                  item.events.map((event, index) => (
                    <div
                      key={index}
                      className="event-item"
                      style={{ animationDelay: `${index * 0.05}s` }} // เพิ่ม delay ให้แต่ละ item
                    >
                      <span>{event.time}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{event.place}</span>
                    </div>
                  ))
                ) : (
                  <div className="no-events fade-in">Not Found</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;