import {
  registerApplication,
  start
} from 'single-spa';

registerApplication(
  'movieSearchApp',
  () => import('./movie_search_app/src/main'),
  location => true
);

start();