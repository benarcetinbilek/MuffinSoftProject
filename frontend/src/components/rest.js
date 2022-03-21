import './rest.css';
import future from "../images/future.png"

function Rest() {
  return (
    <div className="containerRest">
        <div className='restLeft'>
          <p className='p1'>PLAN YOUR</p>
          <p className='p2'>FUTURE</p>
          <p className='p3'>WİTH US</p>
          <button className='restButton'><span>Login</span></button>
        </div>
        <div className='restRight'>
          <img src={future} className="futureImg" />
        </div>
    </div>
  );
}

export default Rest;
