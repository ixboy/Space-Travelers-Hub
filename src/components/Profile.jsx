import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);
  // console.log(missions);
  return (
    <div className="container d-flex gap-2 justify-content-around">

      {reservedMissions.length ? (
        <div>
          <h2>My Missions</h2>
          <ul>
            {reservedMissions.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>My Missions</h2>
          <h4>No missions reserved</h4>
        </div>

      )}

      <div>
        <h2>My Rockets</h2>
      </div>

    </div>
  );

};

export default Profile;
