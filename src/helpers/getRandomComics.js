import shuffle from './shuffle';

const getRandomComics = (comics, favorites) => {
  const randomComics = [];
  let indexes = comics.map((_, index) => {
    return index;
  });
  indexes = shuffle(indexes);
  let limit = comics.length < 3 ? comics.length : 3;

  for (let i = 0; i < limit; i += 1) {
    const currentComic = comics[indexes[i]];
    if (currentComic && !favorites[currentComic.id]) {
      randomComics.push(comics[indexes[i]]);
    } else {
      limit = (limit + 1) <= comics.length ? limit + 1 : limit;
    }
  }

  return randomComics;
};

export default getRandomComics;