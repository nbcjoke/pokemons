import { useCallback, useEffect, useState } from "react";

export const usePagination = (pageName, initialPage = 1) => {
  const startPage = +localStorage.getItem(pageName) || initialPage;

  const [page, setPage] = useState(startPage);

  const handlePageChange = useCallback((_, page) => {
    setPage(page);
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem(pageName, page);
    };
  }, [page]);

  return [page, handlePageChange];
};
