import {
  registerApplication,
  start
} from 'single-spa';

registerApplication(
  'movieSearchApp',
  () => import(/* webpackIgnore: true */ 'http://localhost:8081'),
  location => true
);

start();