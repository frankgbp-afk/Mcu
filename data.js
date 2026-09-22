(() => {
  const project = (slug, title, release, type, phase, poster = '', extra = {}) => ({
    slug,
    title,
    release,
    type,
    phase,
    saga: phase <= 3 ? 'Infinity Saga' : 'Multiverse Saga',
    poster,
    ...extra
  });

  const projects = [
    project('iron-man','Iron Man','2008-05','movie',1,'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg'),
    project('incredible-hulk','The Incredible Hulk','2008-06','movie',1,'https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg'),
    project('iron-man-2','Iron Man 2','2010-05','movie',1,'https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg'),
    project('thor','Thor','2011-05','movie',1,'https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg'),
    project('captain-america-first-avenger','Captain America: The First Avenger','2011-07','movie',1,'https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg'),
    project('avengers','The Avengers','2012-05','movie',1,'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg'),
    project('iron-man-3','Iron Man 3','2013-05','movie',2,'https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg'),
    project('thor-dark-world','Thor: The Dark World','2013-11','movie',2,'https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_The_Dark_World_poster.jpg'),
    project('winter-soldier','Captain America: The Winter Soldier','2014-04','movie',2,'https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_The_Winter_Soldier_poster.jpg'),
    project('guardians','Guardians of the Galaxy','2014-08','movie',2,'https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg'),
    project('age-of-ultron','Avengers: Age of Ultron','2015-05','movie',2,'https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg'),
    project('ant-man','Ant-Man','2015-07','movie',2,'https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg'),
    project('civil-war','Captain America: Civil War','2016-05','movie',3,'https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg'),
    project('doctor-strange','Doctor Strange','2016-11','movie',3,'https://upload.wikimedia.org/wikipedia/en/a/a1/Doctor_Strange_%282016_film%29_poster.jpg'),
    project('guardians-2','Guardians of the Galaxy Vol. 2','2017-05','movie',3,'https://upload.wikimedia.org/wikipedia/en/3/32/Guardians_of_the_Galaxy_Vol._2_poster.jpg'),
    project('spider-man-homecoming','Spider-Man: Homecoming','2017-07','movie',3,'https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg'),
    project('thor-ragnarok','Thor: Ragnarok','2017-11','movie',3,'https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg'),
    project('black-panther','Black Panther','2018-02','movie',3,'https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg'),
    project('infinity-war','Avengers: Infinity War','2018-04','movie',3,'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg'),
    project('ant-man-wasp','Ant-Man and the Wasp','2018-07','movie',3,'https://upload.wikimedia.org/wikipedia/en/2/2c/Ant-Man_and_the_Wasp_poster.jpg'),
    project('captain-marvel','Captain Marvel','2019-03','movie',3,'https://upload.wikimedia.org/wikipedia/en/4/4e/Captain_Marvel_%28film%29_poster.jpg'),
    project('endgame','Avengers: Endgame','2019-04','movie',3,'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg'),
    project('far-from-home','Spider-Man: Far From Home','2019-07','movie',3,'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'),
    project('wandavision','WandaVision','2021-01','series',4,'https://lumiere-a.akamaihd.net/v1/images/br_digital_payoff_keyart_v3_lg_44751099.jpeg'),
    project('falcon-winter-soldier','The Falcon and the Winter Soldier','2021-03','series',4,'https://lumiere-a.akamaihd.net/v1/images/fws_digital_payoff_keyart_v1b_lg_c87a0542.jpeg'),
    project('loki','Loki','2021-06','series',4,'https://lumiere-a.akamaihd.net/v1/images/loki_digital_keyart_payoff_943c5bc1.jpeg'),
    project('black-widow','Black Widow','2021-07','movie',4,'https://upload.wikimedia.org/wikipedia/en/e/e9/Black_Widow_%282021_film%29_poster.jpg'),
    project('shang-chi','Shang-Chi and the Legend of the Ten Rings','2021-09','movie',4,'https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg'),
    project('eternals','Eternals','2021-11','movie',4,'https://upload.wikimedia.org/wikipedia/en/9/9b/Eternals_%28film%29_poster.jpeg'),
    project('no-way-home','Spider-Man: No Way Home','2021-12','movie',4,'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg'),
    project('moon-knight','Moon Knight','2022-03','series',4,'https://lumiere-a.akamaihd.net/v1/images/moon_knight_digital_keyart_vert_v9_lg_cf9d31f8.jpeg'),
    project('multiverse-of-madness','Doctor Strange in the Multiverse of Madness','2022-05','movie',4,'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg'),
    project('ms-marvel','Ms. Marvel','2022-06','series',4,'https://lumiere-a.akamaihd.net/v1/images/ms_11f28a6a.jpeg'),
    project('love-and-thunder','Thor: Love and Thunder','2022-07','movie',4,'https://upload.wikimedia.org/wikipedia/en/8/88/Thor_Love_and_Thunder_poster.jpeg'),
    project('she-hulk','She-Hulk: Attorney at Law','2022-08','series',4,'https://lumiere-a.akamaihd.net/v1/images/shehulk_payoff_1-sheet_litho_rgb_7ae85577.jpeg'),
    project('wakanda-forever','Black Panther: Wakanda Forever','2022-11','movie',4,'https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg'),
    project('quantumania','Ant-Man and the Wasp: Quantumania','2023-02','movie',5,'https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg'),
    project('guardians-3','Guardians of the Galaxy Vol. 3','2023-05','movie',5,'https://upload.wikimedia.org/wikipedia/en/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg'),
    project('secret-invasion','Secret Invasion','2023-06','series',5,'https://lumiere-a.akamaihd.net/v1/images/secretinvasion_teaser_digital_ka_v8b_lg_79a1fa00.jpeg'),
    project('loki-season-2','Loki Season 2','2023-10','series',5,'https://lumiere-a.akamaihd.net/v1/images/loki_digital_keyart_payoff_943c5bc1.jpeg'),
    project('marvels','The Marvels','2023-11','movie',5,'https://upload.wikimedia.org/wikipedia/en/7/7a/The_Marvels_poster.jpg'),
    project('echo','Echo','2024-01','series',5,'https://lumiere-a.akamaihd.net/v1/images/echo_teaser_digital_ka_v4_lg_93bc3b27.jpeg'),
    project('deadpool-wolverine','Deadpool & Wolverine','2024-07','movie',5,'https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg'),
    project('agatha','Agatha All Along','2024-09','series',5,'https://lumiere-a.akamaihd.net/v1/images/agatha_all_along_digital_ka_payoff_v4_lg_d6651e8e.jpeg'),
    project('brave-new-world','Captain America: Brave New World','2025-02','movie',5,'https://upload.wikimedia.org/wikipedia/en/a/a4/Captain_America_Brave_New_World_poster.jpg'),
    project('daredevil-born-again','Daredevil: Born Again','2025-03','series',5,'https://i.ytimg.com/vi/7xALolZzhSM/maxresdefault.jpg'),
    project('thunderbolts','Thunderbolts*','2025-05','movie',5,'https://upload.wikimedia.org/wikipedia/en/9/90/Thunderbolts%2A_poster.jpg'),
    project('ironheart','Ironheart','2025-06','series',5,'https://i.ytimg.com/vi/WpW36ldAqnM/maxresdefault.jpg'),
    project('fantastic-four-first-steps','The Fantastic Four: First Steps','2025-07','movie',6,'https://upload.wikimedia.org/wikipedia/en/1/13/The_Fantastic_Four_First_Steps_poster.jpg',{ trailer:'https://www.youtube.com/watch?v=pAsmrKyMqaA', backdrop:'https://i.ytimg.com/vi/pAsmrKyMqaA/maxresdefault.jpg' }),
    project('spider-man-brand-new-day','Spider-Man: Brand New Day','2026-07','movie',6,'https://upload.wikimedia.org/wikipedia/en/9/9a/Spider-Man_Brand_New_Day_poster.jpg',{ trailer:'https://www.youtube.com/watch?v=8TZMtslA3UY', backdrop:'https://i.ytimg.com/vi/8TZMtslA3UY/maxresdefault.jpg', marvelUrl:'https://www.marvel.com/movies/spider-man-brand-new-day', featured:true }),
    project('visionquest','VisionQuest','2026-10','series',6,'',{ status:'Next', marvelUrl:'https://www.marvel.com/articles/tv-shows/marvel-television-visionquest-release-date' }),
    project('avengers-doomsday','Avengers: Doomsday','2026-12','movie',6,'',{ status:'Coming', trailer:'https://www.youtube.com/watch?v=399Ez7WHK5s', backdrop:'https://i.ytimg.com/vi/399Ez7WHK5s/maxresdefault.jpg', marvelUrl:'https://www.marvel.com/movies/avengers-doomsday' }),
    project('avengers-secret-wars','Avengers: Secret Wars','2027-12','movie',6,'',{ status:'Coming', marvelUrl:'https://www.marvel.com/movies/avengers-secret-wars' })
  ];

  const phases = [
    { number:1, name:'Phase One', saga:'Infinity Saga', years:'2008–2012', description:'Origins, first meetings, and the formation of the Avengers.' },
    { number:2, name:'Phase Two', saga:'Infinity Saga', years:'2013–2015', description:'The universe expands while Earth’s heroes face the fallout of New York.' },
    { number:3, name:'Phase Three', saga:'Infinity Saga', years:'2016–2019', description:'Civil War, Thanos, the Snap, and the end of the Infinity Saga.' },
    { number:4, name:'Phase Four', saga:'Multiverse Saga', years:'2021–2022', description:'A new generation arrives as the multiverse begins to open.' },
    { number:5, name:'Phase Five', saga:'Multiverse Saga', years:'2023–2025', description:'Street-level, cosmic and multiversal stories collide.' },
    { number:6, name:'Phase Six', saga:'Multiverse Saga', years:'2025–2027', description:'The Fantastic Four arrive and the road leads toward the next Avengers event.' }
  ];

  window.MCU_DATA = {
    dataSnapshot: 'August 2026',
    projects,
    phases,
    featuredSlug: 'spider-man-brand-new-day',
    nextUpSlugs: ['visionquest','avengers-doomsday','avengers-secret-wars']
  };
})();
