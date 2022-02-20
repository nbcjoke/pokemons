import { memo } from "react";
import PropTypes from "prop-types";

import { Pagination as MaterialPagination } from "@mui/material";

export const Pagination = memo(({ currentPage, onPageChange, pagesAmount }) => {
  return (
    <MaterialPagination
      page={currentPage}
      onChange={onPageChange}
      count={pagesAmount}
      color="primary"
    />
  );
});

Pagination.defaultProps = {
  pagesAmount: 20,
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesAmount: PropTypes.number,
  handlePageChange: PropTypes.func.isRequired,
};
