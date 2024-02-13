function Filter(props) {
  const {
    // setFilterItem,
    // setCheckStatus,
    // setMinValue,
    // setMaxValue,
    // setMinYear,
    // setMaxYear,
    // setMinKm,
    // setMaxKm,
    allFilter,
  } = props;
  const brands = ["Audi", "BMW", "Mercedes", "Renault", "Toyota"];

  return (
    <div className="col-3 filter d-lg-flex flex-column h-100 ">
      <ul
        className="mt-2 ps-3 pb-2 w-100"
        id="marka"
        style={({ borderBottom: "1px solid #e7eae8" }, { fontSize: "1em" })}
      >
        Marka
        <li className="list-group-item mt-2">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="firstCheckboxStretched"
          />
          <label
            className="form-check-label stretched-link"
            htmlFor="firstCheckboxStretched"
          >
            Tümü
          </label>
        </li>
        {brands.map((item) => (
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value={item}
              id={item}
              name="brand"
              onChange={(e) => {
                allFilter(e);
              }}
            />
            <label className="form-check-label stretched-link" htmlFor={item}>
              {item}
            </label>
          </li>
        ))}
      </ul>

      <hr></hr>
      <div className="row d-flex align-items-center justify-content-between w-100 ms-0 mb-1 ">
        <label className="ps-0 mb-2">Fiyat</label>
        <input
          type="number"
          placeholder="Min"
          name="minvalue"
          onInput={(e) => allFilter(e)}
          style={{ width: "33%" }}
        ></input>
        <input
          type="number"
          placeholder="Max"
          name="maxvalue"
          onInput={(e) => allFilter(e)}
          style={{ width: "33%" }}
        ></input>
      </div>
      <hr></hr>
      <div className="row d-flex align-items-center justify-content-between w-100 ms-0 mb-1 ">
        <label className="ps-0 mb-2">Model Yılı</label>
        <input
          type="number"
          placeholder="2008"
          name="minyear"
          onInput={(e) => allFilter(e)}
          style={{ width: "33%" }}
        ></input>
        <input
          type="number"
          placeholder="2023"
          name="maxyear"
          onInput={(e) => allFilter(e)}
          style={{ width: "33%" }}
        ></input>
      </div>
      <hr></hr>
      <div className="row d-flex align-items-center justify-content-between w-100 ms-0 mb-2 ">
        <label className="ps-0 mb-2">Km</label>
        <input
          type="number"
          placeholder="400"
          name="minkm"
          onInput={(e) => allFilter(e)}
          style={{ width: "33%" }}
        ></input>
        <input
          type="number"
          placeholder="248.500"
          name="maxkm"
          onInput={(e) => allFilter(e)}
          style={{ width: "33%" }}
        ></input>
      </div>
    </div>
  );
}

export default Filter;
