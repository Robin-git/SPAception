import {
  registerApplication,
  start
} from 'single-spa';

System.config({
  map: {
    movieSearchApp: 'http://localhost:8081',
  }
});

registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => {},
  // activityFunction
  (location) => location.pathname === "" ||
  location.pathname === "/" ||
  location.pathname.startsWith('/home')
);

registerApplication(
  'movieSearchApp',
  () => movieSearchApp,
  location => true
);

start();