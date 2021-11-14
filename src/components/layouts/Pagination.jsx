import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

const Pagination = () => {
  return (
    <MDBRow>
      <MDBCol className="elegant-color-dark mt-5">  
        <MDBPagination circle>
          <MDBPageItem disabled>
            <MDBPageNav className="page-link bg-white" aria-label="Previous">
              &laquo;
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem active>
            <MDBPageNav className="page-link bg-warning">
              1
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link bg-white">
              &raquo;
            </MDBPageNav>
          </MDBPageItem>                                                    
        </MDBPagination>
      </MDBCol>
    </MDBRow>
    )
}

export default Pagination;