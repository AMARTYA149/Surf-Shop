const express = require('express');
const router = express.Router({ mergeParams: true });

// // Restful routing
// GET index       /reviews
// GET new         /reviews/new
// review create     /reviews
// GET show        /reviews/:id
// GET edit        /reviews/:id/edit
// GET update      /reviews/:id
// DELETE destroy  /reviews/:id

/* GET reviews index /posts/:id/reviews */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts/:id/reviews');
});


/* review reviews create /posts/:id/reviews */
router.post('/', (req, res, next) => {
  res.send('CREATE /posts/:id/reviews');
});
module.exports = router;


/* GET reviews edit /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/reviews/:review_id/edit');
});
module.exports = router;

/* PUT reviews update /posts/:id/reviews/:review_id */
router.put('/:review_id', (req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id');
});
module.exports = router;

/* DELETE reviews destroy /posts/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
  res.send(' DELETE /posts/:id/reviews/:review_id');
});
module.exports = router;

