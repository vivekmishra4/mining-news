import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
function Approve() {
  const { currentPage, setCurrentPage } = useOutletContext();
  const {id}=useParams();
  return <div>Approve {id}</div>;
}

export default Approve;
