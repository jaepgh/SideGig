const db = require("../models");

// Defining methods for the UserInfoController
module.exports = {
  findAll: function(req, res) {
    db.UserInfo.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.UserInfo.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body.user);
    console.log(req.body.expertises);
    db.UserInfo.create(req.body.user)
      .then(dbModel =>
        db.UserInfo.findOneAndUpdate(
          { _id: dbModel._id },
          { $set: { expertises: req.body.expertises } },
          { new: true },
          (err, doc) => {
            res.json(doc);
          }
        )
      )
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.UserInfo.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.UserInfo.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
