import knex from './knex';

knex('images')
  .select()
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });


// knex.queryBuilder()
//   .select()
//   .from('images')
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// knex.raw('select 1+1 as result').then((results) => {
//   console.log('done!', results);
// }).catch(err => {
//   console.log('err!', err);
//   process.exit(1);
// });

// knex('images').select('*').then((results) => {
//   console.log(results);
// }).catch((err) => {
//   console.log(err);
// });


// knex

// import * as cv from "opencv4nodejs";

// console.log(cv.saliency);
// const mat = cv.imread("./img/in.jpg");

// console.log(mat.saliency);
// console.log(cv.)
