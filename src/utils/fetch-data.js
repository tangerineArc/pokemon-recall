export default async function getSpritesData() {
  const spritesData = [];
  for (let i = 3; i <= 60; i += 3) {
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
