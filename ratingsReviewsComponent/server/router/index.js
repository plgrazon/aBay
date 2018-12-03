const router = require('express').Router();

const { reviewController } = require('../controllers/reviewController.js');
const { averageRatingController } = require('../controllers/averageRatingController.js')

router.route('/reviews')
.get(reviewController.get)


router.route('/rating')
.get(averageRatingController.get)

router.route('/users')
// .get(reviewController.fetchUser)
.get(reviewController.get)
// router.route('/people')
// .post(personController.post)
// .get(personController.get)

module.exports = {
  router: router
}