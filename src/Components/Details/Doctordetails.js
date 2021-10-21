import { Link, useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
import './doct.css'
const Doctordetails = () => {
  const { id } = useParams();
  const [doctors] = useData();

  const doctor = doctors.find((d) => d.id == id);

  const { name, specialty, Degrees, training, img, works_day, discription } =
    doctor || {
      name: "",
      specialty: "",
      Degrees: "",
      training: "",
      img: "",
      works_day: "",
      discription: "",
    };
  console.log(training);
  console.log(doctor);
  return (
    <div className="d-containier">
      <div className="mx-5 d-left">
        <div>
          <img src={img} alt="img" width="300" />
          <h4 >{name}</h4>
            <p >{specialty}</p>
        </div>
        <Link className="button" to="/bookappointment">Book Appointment</Link>
      </div>
      <div className="d-right">
        <p>{training}</p>
        <hr />
        <p>{discription}</p>
        <hr />
        <div className="Rowdata">
        <h6>Specialty</h6>
        <h6>{specialty}</h6>
        </div>
        <hr />
        <div className="Rowdata">
        <h6>Degrees</h6>
        <h6>{Degrees}</h6>
        </div>
        <hr />
        <div className="Rowdata">
        <h6>Training</h6>
        <h6>{training.slice(0, 37) }</h6>
        </div>
        <hr />
        <div className="Rowdata">
        <h6>work Days</h6>
        <h6>{works_day[0]}</h6>
        <h6>{works_day[1]}</h6>
        <h6>{works_day[2]}</h6>
        </div>
      </div>
    </div>
  );
};

export default Doctordetails;
