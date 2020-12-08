const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Phoebe Chan',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Phoebe Chan',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Phoebe Chan',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Phoebe Chan',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Phoebe Chan',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
