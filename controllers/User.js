const {User, Thought} = require("../models")
const UserController = {

    getUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
      },
      getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      // create a new user
      createUser(req, res) {
        User.create(req.body)
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => res.status(500).json(err));
      },
      UpdateUser(req,res){
          User.findOneAndUpdate(
              {_id: req.params.id},
              {$set: req.body},
              {runValidators: true, new: true}

            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err);

          },

      
    }
