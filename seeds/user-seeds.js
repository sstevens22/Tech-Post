const { User } = require('../models');

const userData = [{
        username: 'Bloggerton',
        password: 'Password'

    },
    {
        username: 'Techingham',
        password: 'Frog22'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;