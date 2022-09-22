const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id/', async (req, res) => {
  try {
    const commentData = await Comment.findOne({where: {id :req.params.id}
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with that id' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll();

    if (!commentData) {
      res.status(404).json({ message: 'No comments found' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/:postId', withAuth, async (req, res) => {
  console.log('req body', req.body)
  console.log('req params', req.params)
    try {
      const newComment = await Comment.create({
        ...req.body,
        post_id: Number(req.params.postId),
        user_id: req.session.user_id,

      });
      const updatedComment = newComment.get({ plain: true })
      console.log("Backend :", updatedComment)
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