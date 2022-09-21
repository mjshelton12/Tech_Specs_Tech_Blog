const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/:postId', withAuth, async (req, res) => {
  console.log('req body', req.body)
  console.log('req params', req.params)
    try {
      const newComment = await Comment.create({
        ...req.body,
        post_id: req.params.postId,
        user_id: req.session.user_id,

      });
      const updatedComment = newComment.get({ plain: true})
      res.status(200).json(updatedComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //To be built:
  // router.get('/:postId', withAuth, async (req, res) => {
  //   //get Comments.findAll {
  //     where: {
  //       post_id: req.params.postId
  //     }
  //   }
  // })

module.exports = router;