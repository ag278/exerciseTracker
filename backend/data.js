import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'user1',
      email: 'user1@user.com',
      password: bcrypt.hashSync('123456'),
    },
    {
      name: 'user2',
      email: 'user2@user.com',
      password: bcrypt.hashSync('123456'),
    },
  ],
};

export default data;
