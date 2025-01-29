const LIMIT = 1025;

export default async function getSpritesData() {
  const last = LIMIT - (20 - 1) * 3;
  
  const start = Math.floor(Math.random() * last) + 1;
  const end = start + (20 - 1) * 3;

  const spritesData = [];
  for (let i = start; i <= end; i += 3) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;

    const response = await fetch(url);
    const data = await response.json();

    spritesData.push({
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      isSelected: false,
    });
  }
  return spritesData;
}
