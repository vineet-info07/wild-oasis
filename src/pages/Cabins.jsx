import React, { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return <div>Cabins</div>;
}

export default Cabins;
