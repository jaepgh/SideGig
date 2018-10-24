const db = require("../models");

// Defining methods for the PostInfoController
module.exports = {

    // (Kas) Copied and modified code from "UserInfoController.js" to save new jobs.
    // (Kas) Modified "findAll", "findById", "update" and 'remove", but commented them out.

//   findAll: function(req, res) {
//     db.PostInfo.find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.PostInfo.findOne({ id_firebase: req.params.id })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  create: function(req, res) {
    db.PostInfo.create(req.body.user)
      .then(dbModel =>
        db.PostInfo.findOneAndUpdate(
          { _id: dbModel._id },
          { $push: { expertises: req.body.expertises } },
          { new: true },
          (err, doc) => {
            res.json(doc);
          }
        )
      )
      .catch(err => {
        res.status(422).json(err);
        console.log(err);
      });
  },
//   update: function(req, res) {
//     console.log(req.params.id);
//     console.log(req.body.user);
//     db.PostInfo.findOneAndUpdate({ id_firebase: req.params.id }, req.body.user)
//       .then(dbModel =>
//         db.PostInfo.findOneAndUpdate(
//           { _id: dbModel._id },
//           { $set: { expertises: req.body.expertises } },
//           { new: true },
//           (err, doc) => {
//             res.json(doc);
//           }
//         )
//       )
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.PostInfo.findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};
