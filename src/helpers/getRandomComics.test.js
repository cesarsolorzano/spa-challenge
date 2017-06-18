import getRandomComics from './getRandomComics';

describe('getRandomComics', () => {
  it('should generate random comics', () => {
    const result1 = getRandomComics([
      { id: 1 },
    ], {});
    const result2 = getRandomComics([
      { id: 1 }, { id: 2 }
    ], {});
    const result3 = getRandomComics([
      { id: 1 }, { id: 2 }, { id: 3 },
    ], {});
    const result4 = getRandomComics([], {});
    const result5 = getRandomComics([
      { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 5 },
    ], {});

    expect(result1).toEqual([{ id: 1 }]);
    expect(result1.length).toBe(1);
    expect(result2.length).toBe(2);
    expect(result3.length).toBe(3);
    expect(result4.length).toBe(0);
    expect(result5.length).toBe(3);
  });

  it('should generate different random comics from favorites', () => {
    const result = getRandomComics([
      { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    ], { 3: { id: 3 }});
    const result2 = getRandomComics([
      { id: 1 }, { id: 2 }, { id: 3 },
    ], { 3: { id: 3 }});
    const result3 = getRandomComics([
      { id: 1 }, { id: 2 }, { id: 3 },
    ], {
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 },
    });

    const sortedResult = result.sort((a, b) => {
      return a.id > b.id;
    });
    expect(result.length).toBe(3);
    expect(sortedResult ).toEqual([{ id: 1 }, { id: 2 }, { id: 4 }]);

    const sortedResult2 = result2.sort((a, b) => {
      return a.id > b.id;
    });
    expect(result2.length).toBe(2);
    expect(sortedResult2).toEqual([{ id: 1 }, { id: 2 }]);

    expect(result3.length).toBe(0);
    expect(result3).toEqual([]);
  });
});