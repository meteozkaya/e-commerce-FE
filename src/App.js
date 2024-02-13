import { useEffect, useState } from "react";
import logo from "./images/logo.png";

import Filter from "./components/Filter";
import CarList from "./components/CarList";

function App() {
  const [filt, setFilt] = useState({
    minkm: "",
    maxkm: "",
    minYear: "",
    maxYear: "",
    minValue: "",
    maxValue: "",
    checkStatus: false,
    filterItem: "",
    filterArr: [],
    searchInput: "",
  });

  const [carList, setCarList] = useState([]);

  const apiUrl = "http://localhost:8000/cars";
  var templist = [];
  var filterName;

  // const fetchData = async () => {
  //   await fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => setCarList(data));
  // };

  useEffect(() => {
    allFilter();
  }, [filt]);

  const allFilter = async (e) => {
    filterName = e?.target.name;
    var filterValue = e?.target.value;

    if (filterName === "search") {
      setFilt((prevState) => ({ ...prevState, searchInput: filterValue }));
      console.log(filt.searchInput);
    }

    if (filterName === "brand") {
      if (e.target.checked !== undefined) {
        if (e.target.checked) {
          setFilt({ ...filt, filterArr: [...filt.filterArr, filterValue] });
        } else {
          setFilt((prevState) => ({
            ...prevState,
            filterArr: prevState.filterArr.filter(
              (item) => item !== filterValue
            ),
          }));
        }
      }
    }

    if (filterName === "maxvalue") {
      setFilt({ ...filt, maxValue: filterValue });
    }
    if (filterName === "minvalue") {
      setFilt({ ...filt, minValue: filterValue });
    }
    if (filterName === "maxyear") {
      setFilt({ ...filt, maxYear: filterValue });
    }
    if (filterName === "minyear") {
      setFilt({ ...filt, minYear: filterValue });
    }
    if (filterName === "maxkm") {
      setFilt({ ...filt, maxkm: filterValue });
    }
    if (filterName === "minkm") {
      setFilt({ ...filt, minkm: filterValue });
    }

    console.log("after fetch: ", carList);
    applyFilter();
  };

  const applyFilter = async () => {
    // fetchData();

    await fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => (templist = data));

    if (filt.searchInput.length >= 3) {
      templist = templist.filter((element) =>
        element.name.toLowerCase().includes(filt.searchInput.toLowerCase())
      );
    }

    if (filt.filterArr.length !== 0) {
      templist = templist.filter((item) =>
        filt.filterArr.some((filtername) =>
          item.name.toLowerCase().includes(filtername.toLowerCase())
        )
      );
    }

    if (filt.maxValue !== "") {
      templist = templist.filter((item) => item.price <= filt.maxValue);
    }
    if (filt.minValue !== "") {
      templist = templist.filter((item) => item.price >= filt.minValue);
    }
    if (filt.maxYear !== "") {
      templist = templist.filter((item) => item.product_year <= filt.maxYear);
    }
    if (filt.minYear !== "") {
      templist = templist.filter((item) => item.product_year >= filt.minYear);
    }
    if (filt.maxkm !== "") {
      templist = templist.filter((item) => item.km <= filt.maxkm);
    }
    if (filt.minkm !== "") {
      templist = templist.filter((item) => item.km >= filt.minkm);
    }

    setCarList(templist);
  };

  return <body></body>;
}

export default App;
