// Poster artwork for MCU series currently included in the library.
// Kept separate so poster updates do not disturb the main release data.
const tvPosterMap = {
  'WandaVision': 'https://upload.wikimedia.org/wikipedia/en/2/20/WandaVision_teaser_poster.jpg',
  'The Falcon and the Winter Soldier': 'https://upload.wikimedia.org/wikipedia/en/7/7e/The_Falcon_and_the_Winter_Soldier_logo.jpg',
  'Loki': 'https://upload.wikimedia.org/wikipedia/en/4/4e/Loki_%28TV_series%29_poster.jpg',
  'Loki Season 2': 'https://upload.wikimedia.org/wikipedia/en/4/4e/Loki_%28TV_series%29_poster.jpg',
  'Moon Knight': 'https://upload.wikimedia.org/wikipedia/en/2/24/Moon_Knight_%28TV_series%29_poster.jpg',
  'Ms. Marvel': 'https://upload.wikimedia.org/wikipedia/en/7/76/Ms._Marvel_%28TV_series%29_poster.jpg',
  'She-Hulk: Attorney at Law': 'https://upload.wikimedia.org/wikipedia/en/3/3f/She-Hulk_Attorney_at_Law_poster.jpg',
  'Secret Invasion': 'https://upload.wikimedia.org/wikipedia/en/3/36/Secret_Invasion_%28miniseries%29_poster.jpg',
  'Echo': 'https://upload.wikimedia.org/wikipedia/en/8/8e/Echo_%28miniseries%29_poster.jpg',
  'Agatha All Along': 'https://upload.wikimedia.org/wikipedia/en/4/4f/Agatha_All_Along_%28miniseries%29_poster.jpg',
  'Daredevil: Born Again': 'https://upload.wikimedia.org/wikipedia/en/1/13/Daredevil_Born_Again_poster.jpg',
  'Ironheart': 'https://upload.wikimedia.org/wikipedia/en/5/5d/Ironheart_%28miniseries%29_poster.jpg'
};

Object.assign(posterMap, tvPosterMap);
libraryItems.forEach(item => {
  if (tvPosterMap[item.title]) item.poster = tvPosterMap[item.title];
});
renderLibrary();
