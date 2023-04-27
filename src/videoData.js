const videoData = [
  {
    id: '18',
    title: 'Autism and Religion: An International Conversation.',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest:
      "Gabrielle Kaplan-Mayer, Chief Program Officer & Director, Whole Community Inclusion, Jewish Learning Venture; John Elder Robison, Neurodiversity Scholar, College of William & Mary and New York Times Best-Selling Author of Look Me in the Eye: My Life with Asperger's; Rabbi Dr. Rafi Feuerstein, President of the Feuerstein Institute; and Professor Levine.",
    day: '15th',
    month: 'DEC',
    year: '22',
    vidUrl:
      'https://tourolaw.yuja.com/V/Video?v=7001123&node=29349798&a=433325054&preload=false',
  },
  {
    id: '17',
    title: 'Autism and Employment: Lessons From the Winters Center for Autism.',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest:
      'Winters Center employees, Christine Ponzio and Chris Cortale; John Kelly, Founding President, Disabled and Allied Law Students Association at Touro Law; and Professor Levine.',
    day: '15th',
    month: 'NOV',
    year: '22',
    vidUrl:
      'https://tourolaw.yuja.com/V/Video?v=6342953&node=28190466&a=333813648&preload=false',
  },
  {
    id: '16',
    title: 'Autism and Employment: Lessons From the Corporate World.',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest:
      'Dr. Alan Kadish, President, Touro University; Lihi Lapid, President of SHEKEL - Inclusion for People with Disabilities; Mobileye employees, Mollie Goldstein, Eli Schreiber, and Roni Vistuch; and Professor Levine.',
    day: '23rd',
    month: 'OCT',
    year: '22',
    vidUrl:
      'https://tourolaw.yuja.com/V/Video?v=6212996&node=27676647&a=1953839402&preload=false',
  },
  {
    id: '15',
    title:
      'Autism Disability and Employment-An International Conversation -- Law School',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest:
      'Tim Goldstein, Global Cloud Trainer, Google | Hardeep Rai, Group CEO & Founder, Kaleidoscope Group/Kaleidoscope Investments | Dr. Michael Stein, Executive Director, Harvard Law School Project on Disability | Elisabeth Wiklander, Cellist, London Philharmonic Orchestra',
    day: '18th',
    month: 'MAY',
    year: '22',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399845&node=28401006&a=585165403&autoplay=1',
    bool: false,
  },
  {
    id: '14',
    title: 'Passover History',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'Dr. Henry Abrahamson',
    day: '6th',
    month: 'APR',
    year: '22',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6521472&node=28632155&a=1970832447&autoplay=1',
    bool: false,
  },
  {
    id: '13',
    title: 'The Eruv Litigations',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest:
      'Samuel J. Levine, Esq. | Yehudah L. Buchweitz, Esq. | Robert G. Sugarman, Esq.',
    day: '9th',
    month: 'MAR',
    year: '22',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6400357&node=28403178&a=1889698351&autoplay=1',
    bool: false,
  },
  {
    id: '12',
    title: 'The Jewish World of Hamilton',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'Dr. Andrew Porwancher',
    day: '23rd',
    month: 'FEB',
    year: '22',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399845&node=28401006&a=585165403&autoplay=1',
    bool: false,
  },
  {
    id: '11',
    title: 'Judge Rachel Freier',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'Justice Rachel Freier',
    day: '12th',
    month: 'JAN',
    year: '22',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399669&node=28400535&a=1887217973&autoplay=1',
    bool: false,
  },
  {
    id: '10',
    title: 'WHO WAS JUDAH TOURO',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'Dr. Jonathan Sarna',
    day: '14th',
    month: 'DEC',
    year: '21',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399537&node=28400204&a=1439882782&autoplay=1',
    bool: false,
  },
  {
    id: '09',
    title: 'The Snake at the Mouth of the Cave',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'Rabbi Dr. Moshe Sokol, Rabbi Dr. Zev Eleff',
    day: '18th',
    month: 'OCT',
    year: '21',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399507&node=28400105&a=649454741&autoplay=1',
    bool: false,
  },
  {
    id: '08',
    title: 'An Evening with Temple Grandin',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'Dr. Temple Grandin',
    day: '5th',
    month: 'OCT',
    year: '21',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399395&node=28399844&a=1575643050&autoplay=1',
    bool: false,
  },
  {
    id: '07',
    title: "T'Shuva Symposium",
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'HaRav Yonason Sacks, Shlita | HaRav Shmuel Marcus, Shlita',
    day: '13th',
    month: 'SEP',
    year: '21',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399411&node=28399878&a=705913616&autoplay=1',
    bool: false,
  },
  {
    id: '06',
    title: 'A conversation on the new Middle East with Ambassador Houda Nonoo',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'Ambassador Houda Nonoo',
    day: '20th',
    month: 'JUN',
    year: '21',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399362&node=28399744&a=1286222032&autoplay=1',
    bool: false,
  },
  {
    id: '05',
    title: 'The Virus in the Age of Madness',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'Bernard-Henri Lévy',
    day: '7th',
    month: 'MAR',
    year: '21',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399375&node=28399787&a=343940568&autoplay=1',
    bool: false,
  },
  {
    id: '04',
    title: 'Free Speech from Itself Book Talk - Part 1',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'Thane Rosenbaum',
    day: '18th',
    month: 'NOV',
    year: '20',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399353&node=28399725&a=1693733476&autoplay=1',
    bool: false,
  },
  {
    id: '03',
    title: 'Book Talk with Authors Natan Sharansky & Gil Troy',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'Natan Sharansky, Gil Troy',
    day: '14th',
    month: 'OCT',
    year: '20',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399345&node=28399693&a=187127765&autoplay=1',
    bool: false,
  },
  {
    id: '02',
    title:
      'Honorable Elyakim Rubinstein, Deputy President (Ret.), Supreme Court of Israel -- Law School',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest:
      'Honorable Elyakim Rubinstein, Deputy President (Ret.), Supreme Court of Israel',
    day: '14th',
    month: 'SEP',
    year: '20',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399252&node=28399415&a=160382243&autoplay=1',
    bool: false,
  },
  {
    id: '01',
    title: 'PLAGUE AND PANDEMIC IN JEWISH HISTORY',
    moderate: 'Moderated by Dr. Alan Kadish',
    guest: 'Dr. Henry Abrahamson',
    day: '22nd',
    month: 'JUN',
    year: '20',
    vidUrl:
      'https://touro.yuja.com/V/Video?v=6399096&node=28399060&a=1072314658&autoplay=1',
    bool: false,
  },
];

export default videoData;
