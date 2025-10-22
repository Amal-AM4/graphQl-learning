const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

// all the function which do something in the api
const resolvers = {
  Query: {
    // user resolver
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = parseInt(args.id);
      const user = _.find(UserList, { id: id });
      return user;
    },

    // movie resolver
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name: name });
      return movie;
    },
  },

  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2021 && movie.yearOfPublication <= 2025
      );
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      // console.log(user);
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });

      return userUpdated;
    },

    deleteUser: (parent, args) => {
      const id = Number(args.id);
      _.remove(UserList, (user) => user.id === id);
      return null;
    },
  },
};

module.exports = { resolvers };
