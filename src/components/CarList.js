import CarItem from "./CarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
function CarList({ carList }) {
  return (
    <div className="col-lg-9 col-md-12 d-flex flex-wrap h-100 ">
      <div
        className="alert alert-primary w-100 text align-items"
        style={{ backgroundColor: "#cfdfeb" }}
        role="alert"
      >
        <FontAwesomeIcon
          icon={faCircleInfo}
          size="lg"
          style={{ color: "#5a9ed1" }}
          className="me-2"
        />
        Hemen Al fiyatlarımıza KDV ve tüm hizmet bedelleri
        <span className="text" style={{ fontWeight: "600" }}>
          dahildir
        </span>
        .
      </div>
      {carList.map((car, index) => (
        <CarItem key={index} car={car}></CarItem>
      ))}
    </div>
  );
}

export default CarList;
