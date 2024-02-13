import car1 from "../images/car1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function CarItem(props) {
  const { car } = props;
  return (
    <ul className="ps-0 w-100">
      <div>
        <li className="list-group-item d-flex flex-row mb-3">
          <div className="d-flex flex-row w-25">
            <img className="img-fluid" src={car1} alt="araba1" />
          </div>
          <div className="d-flex flex-row w-75 ps-2 justify-content-between">
            <div className="d-flex flex-column justify-content-between text">
              <div>
                <div style={({ color: "#317b52" }, { fontWeight: "700" })}>
                  {car.name}
                  <FontAwesomeIcon
                    className="ms-1"
                    icon={faStar}
                    style={{ color: "#99a59f" }}
                  />
                </div>
                <div
                  className="mt-1"
                  style={({ fontSize: "10px" }, { color: "#6a7670" })}
                >
                  {car.model}
                </div>
              </div>
              <div
                className="d-sm-flex flex-row w-100 align-content-between mb-1 carinfo"
                style={{ fontSize: "12px" }}
              >
                <div
                  className="mx-1 pe-1"
                  style={
                    ({ borderRight: "1px solid #e7eae8" }, { color: "#6a7670" })
                  }
                >
                  {car.product_year}
                </div>
                <div
                  className="mx-1 pe-1 sm"
                  style={
                    ({ borderRight: "1px solid #e7eae8" }, { color: "#6a7670" })
                  }
                >
                  {car.km}
                </div>
                <div
                  className="mx-1 pe-1"
                  style={
                    ({ borderRight: " 1px solid #e7eae8" },
                    { color: "#6a7670" })
                  }
                >
                  {car.gear}{" "}
                </div>
                <div
                  className="mx-1 pe-1"
                  style={
                    ({ borderRight: "1px solid #e7eae8" }, { color: "#6a7670" })
                  }
                >
                  {car.fuel}{" "}
                </div>
                <div className="mx-1">KDV %20</div>
              </div>
            </div>
            <div className="d-flex flex-column text-end justify-content-between text">
              <div>
                <div style={({ fontSize: " 9px" }, { color: "#99a59f" })}>
                  Satış Fiyatı/TL
                  <i
                    className="fa-solid fa-circle-info fa-lg ms-1"
                    style={{ color: "#99a59f" }}
                  ></i>
                </div>
                <div className="mt-1" style={{ fontWeight: "bolder" }}>
                  {car.price}
                </div>
              </div>
              <div className="d-flex flex-column align-items-end">
                <button
                  className="btn btn-success rounded-5 btn login text"
                  style={({ backgroundColor: "#09aa59" }, { fontSize: "1vw" })}
                >
                  Hemen Al
                </button>
              </div>
            </div>
          </div>
        </li>
        <hr></hr>
      </div>
    </ul>
  );
}

export default CarItem;
