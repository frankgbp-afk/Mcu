// Verified promotional artwork for MCU series currently included in the library.
// Uses Disney/Marvel-hosted assets where available; trailer artwork is used as a safe fallback.
const tvPosterMap = {
  'WandaVision': 'https://lumiere-a.akamaihd.net/v1/images/br_digital_payoff_keyart_v3_lg_44751099.jpeg',
  'The Falcon and the Winter Soldier': 'https://lumiere-a.akamaihd.net/v1/images/fws_digital_payoff_keyart_v1b_lg_c87a0542.jpeg',
  'Loki': 'https://lumiere-a.akamaihd.net/v1/images/loki_digital_keyart_payoff_943c5bc1.jpeg',
  'Loki Season 2': 'https://lumiere-a.akamaihd.net/v1/images/loki_digital_keyart_payoff_943c5bc1.jpeg',
  'Moon Knight': 'https://lumiere-a.akamaihd.net/v1/images/moon_knight_digital_keyart_vert_v9_lg_cf9d31f8.jpeg',
  'Ms. Marvel': 'https://lumiere-a.akamaihd.net/v1/images/ms_11f28a6a.jpeg',
  'She-Hulk: Attorney at Law': 'https://lumiere-a.akamaihd.net/v1/images/shehulk_payoff_1-sheet_litho_rgb_7ae85577.jpeg',
  'Secret Invasion': 'https://lumiere-a.akamaihd.net/v1/images/secretinvasion_teaser_digital_ka_v8b_lg_79a1fa00.jpeg',
  'Echo': 'https://lumiere-a.akamaihd.net/v1/images/echo_teaser_digital_ka_v4_lg_93bc3b27.jpeg',
  'Agatha All Along': 'https://lumiere-a.akamaihd.net/v1/images/agatha_all_along_digital_ka_payoff_v4_lg_d6651e8e.jpeg',
  'Daredevil: Born Again': 'https://i.ytimg.com/vi/7xALolZzhSM/maxresdefault.jpg',
  'Ironheart': 'https://i.ytimg.com/vi/WpW36ldAqnM/maxresdefault.jpg'
};

Object.assign(posterMap, tvPosterMap);
libraryItems.forEach(item => {
  if (tvPosterMap[item.title]) item.poster = tvPosterMap[item.title];
});
renderLibrary();
