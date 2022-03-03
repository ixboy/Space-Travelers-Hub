import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  // let reserved = false;
  console.log(missions);

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {missions.map((element) => (
            <tr key={element.id}>
              <td>{element.name}</td>
              <td>{element.description}</td>
              <td className="align-middle wdt">
                {element.reserved ? (
                  <p className="fs bg-secondary text-center rounded fc mg-0 p-1">Active Member</p>
                ) : (
                  <p className="fs bg-secondary text-center rounded fc mg-0 p-1">NOT A MEMBER</p>
                )}
              </td>

              <td className="align-middle fs wdt">
                {
                  element.reserved ? (
                    <button className="btn-outline-secondary rounded py-2">LEAVE MISSION</button>
                  ) : (
                    <button className="btn-outline-secondary rounded py-2">JOIN MISSION</button>
                  )
                }

              </td>

            </tr>
          ))}
        </tbody>

      </Table>

    </div>
  );
};

export default Missions;
