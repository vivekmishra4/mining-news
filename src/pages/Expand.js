import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

function Expand({children}) {
  const { currentPage, setCurrentPage } = useOutletContext();
 const {id}=useParams();
  return (
    <div>
        {id}
    </div>
  )
}

export default Expand