import {
  registerApplication,
  start
} from 'single-spa';

registerApplication(
  'movieSearchApp',
  () => import('./movie_search_app/src/main'),
  location => true
);

registerApplication(
  'movieStockApp',
  () => import('./movie_stock_app/src/movieStock.app'),
  location => true
);

start();