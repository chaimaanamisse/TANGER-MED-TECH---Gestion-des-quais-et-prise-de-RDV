const Guest = require('../models/Guest')

exports.createGuest = (req, res, next) => {
    
    const newguest = new Guest({
      ...req.body
    });
    newguest.save()
      .then(() => res.status(201).json({ message: 'invité enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.getOneGuest = (req, res, next) => {
    Guest.findOne({ _id: req.params.id })
      .then(guest => res.status(200).json(guest))
      .catch(error => res.status(404).json({ error }));
  };

exports.modifyGuest =  (req, res, next) => {
    Guest.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'invité modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.deleteGuest = (req, res, next) => {
    Guest.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'invité supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.getAllGuest = (req, res, next) => {
        
    Guest.find()
      .then(guests => res.status(200).json(guests))
      .catch(error => res.status(400).json({ error }));
    
  };