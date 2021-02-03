import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Profit = () => {
  const id = useSelector((state: RootState) => state.profit.id);
  const profit = useSelector((state: RootState) => state.profit.profit);

  return (
    <div>
      <h2>{id ?? ""}</h2>
      <h3>PROFIT!!: {profit ?? 0}</h3>
    </div>
  );
};

export default Profit;
