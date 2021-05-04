const { Comment } = require('../models');

const commentData = [{
        comment_text: "Nice Tech Blog",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Nice Test Blog",
        user_id: 2,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;