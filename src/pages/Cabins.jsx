import React, { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Cabins</h1>
      <img src="https://wvgmybxowixrniygtywn.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg" />
    </div>
  );
}

export default Cabins;
