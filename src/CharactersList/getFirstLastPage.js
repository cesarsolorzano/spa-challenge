const getFirstLastPage = (total, limit, offset) => {
  if (total === 0) {
    return {
      firstPage: 0,
      currentPage: 0,
      lastPage: 0,
      totalPages: 0,
    };
  }

  const totalPages = Math.ceil(total / limit);
  let currentPage = (offset / limit) < 1 ? 1 : (offset / limit) + 1;
  currentPage = currentPage > totalPages ? totalPages : currentPage;

  let firstPage = currentPage <= 2 ? 1 : currentPage - 2;
  const lastPage = Math.min(firstPage + 4, totalPages);
  firstPage = (lastPage - firstPage) < 4 ? 1 : firstPage;

  return {
    firstPage,
    currentPage,
    lastPage,
    totalPages,
  };
};

export default getFirstLastPage;