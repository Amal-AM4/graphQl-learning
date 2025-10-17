const { UserList } = require("../FakeData");
const _ = require("lodash");

// all the function which do something in the api
const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = parseInt(args.id);
      const user = _.find(UserList, { id: id });
      return user
    },
  },
};

module.exports = { resolvers };
