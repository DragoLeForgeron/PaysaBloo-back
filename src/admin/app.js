const config = {
  tutorials: false,
  head: {
    favicon: "./extensions/logo.png",
  },
  auth: {
    logo: "./extensions/logo.jpg"
  },
  menu: {
    logo: "./extensions/logo.jpg",
  },
    locales: [
    'en',
    'fr',
  ]
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
