const LIMIT = 1025;

export default async function getSpritesData(count) {
  const last = LIMIT - (count - 1) * 3;

  const start = Math.floor(Math.random() * last) + 1;
  const end = start + (count - 1) * 3;

  const fetchPromises = [];
  for (let i = start; i <= end; i += 3) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    fetchPromises.push(fetch(url).then((response) => response.json()));
  }

  const results = await Promise.all(fetchPromises);

  return results.map((data) => ({
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    isSelected: false,
  }));
}
