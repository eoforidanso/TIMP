import { useState, useEffect } from 'react';
import './Clock.css';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate rotation angles
  const secondDegrees = (seconds * 6) % 360; // 360 / 60
  const minuteDegrees = (minutes * 6 + seconds * 0.1) % 360; // 360 / 60
  const hourDegrees = (hours * 30 + minutes * 0.5) % 360; // 360 / 12

  return (
    <div className="clock-container">
      <div className="clock-face">
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="hour-marker"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-85px)`
            }}
          >
            <div className="marker-line" />
          </div>
        ))}

        {/* Center dot */}
        <div className="clock-center" />

        {/* Hour hand */}
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        />

        {/* Minute hand */}
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        />

        {/* Second hand */}
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        />
      </div>
    </div>
  );
}
