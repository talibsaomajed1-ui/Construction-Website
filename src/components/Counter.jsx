import { useEffect, useState } from "react";

function CounterItem({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="col-md-3 text-center mb-4" data-aos="fade-up">
      <h2 className="counter-number">{count}+</h2>
      <p className="counter-label">{label}</p>
    </div>
  );
}

function Counter() {
  return (
    <section className="counter-section">
      <div className="container">

        <div className="row text-center mb-5">
          <div className="col">
            <h2 className="section-title">Our Achievements</h2>
            <p className="text-muted">
              Trusted experience in construction and engineering excellence
            </p>
          </div>
        </div>

        <div className="row">
          <CounterItem end={25} label="Years Experience" />
          <CounterItem end={520} label="Projects Completed" />
          <CounterItem end={150} label="Engineers" />
          <CounterItem end={98} label="Client Satisfaction %" />
        </div>

      </div>
    </section>
  );
}

export default Counter;