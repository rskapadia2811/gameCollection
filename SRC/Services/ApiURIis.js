const baseURL = 'https://us-central1-rn-firebase-crud1.cloudfunctions.net/';
const getURI = (path) => {
  return baseURL + path;
};

export const MYAPI = {
  GET_HEALLO_WORLD: getURI('helloWorld'),
};
