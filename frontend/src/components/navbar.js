import './navbar.css';

function Navbar() {
  return (
    <div className="containerNavBar">
        <div className="left">
            <p>logo</p>
        </div>
        <div className="right">
            <button><span>Create Timetable</span></button>
            <button><span>My Timetables</span></button>
        </div>
    </div>
  );
}

export default Navbar;
