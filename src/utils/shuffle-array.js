export default function randomShuffler(array) {
  const allIndicesSet = new Set();
  const randomIndicesSet1 = new Set();

  for (let i = 0, limit = array.length; i < limit; i++) {
    allIndicesSet.add(i);

    const index = Math.floor(Math.random() * limit);
    randomIndicesSet1.add(index);
  }

  const randomIndicesSet2 = allIndicesSet.difference(randomIndicesSet1);

  const shuffledArray = [];

  const randomIndicesArray1 = Array.from(randomIndicesSet1);
  for (let i = 0; i < randomIndicesArray1.length; i++) {
    shuffledArray.push(structuredClone(array[randomIndicesArray1[i]]));
  }

  const randomIndicesArray2 = Array.from(randomIndicesSet2);
  for (let i = 0; i < randomIndicesArray2.length; i++) {
    shuffledArray.push(structuredClone(array[randomIndicesArray2[i]]));
  }

  return shuffledArray;
}
