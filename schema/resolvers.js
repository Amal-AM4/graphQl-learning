const { UserList } = require("../FakeData");

// all the function which do something in the api
const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};

module.exports = { resolvers };
