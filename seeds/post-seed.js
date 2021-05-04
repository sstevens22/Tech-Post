const { Post } = require('../models');

const postData = [{
        title: 'This is a Tech Blog',
        content: 'A place to post about tech',
        user_id: 1

    },
    {
        title: 'This is a Test Blog',
        content: 'A place to test the tech',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;