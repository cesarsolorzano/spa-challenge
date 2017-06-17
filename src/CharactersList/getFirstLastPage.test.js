import getFirstLastPage from './getFirstLastPage';

describe('getFirstLastPage', () => {
   it('should render only next and prev items', () => {

    expect(getFirstLastPage(0, 0, 0)).toEqual({
      firstPage: 0,
      currentPage: 0,
      lastPage: 0,
      totalPages: 0,
    });
    
    expect(getFirstLastPage(10, 10, 0)).toEqual({
      firstPage: 1,
      currentPage: 1,
      lastPage: 1,
      totalPages: 1,
    });

    expect(getFirstLastPage(0, 10, 0)).toEqual({
      firstPage: 0,
      currentPage: 0,
      lastPage: 0,
      totalPages: 0,
    });

    expect(getFirstLastPage(10, 10, 10)).toEqual({
      firstPage: 1,
      currentPage: 1,
      lastPage: 1,
      totalPages: 1,
    });

    expect(getFirstLastPage(20, 10, 0)).toEqual({
      firstPage: 1,
      currentPage: 1,
      lastPage: 2,
      totalPages: 2,
    });

    expect(getFirstLastPage(20, 10, 10)).toEqual({
      firstPage: 1,
      currentPage: 2,
      lastPage: 2,
      totalPages: 2,
    });

    expect(getFirstLastPage(100, 10, 50)).toEqual({
      firstPage: 4,
      currentPage: 6,
      lastPage: 8,
      totalPages: 10,
    });
  });
});