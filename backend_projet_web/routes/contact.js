const express =  require('express')
const router = express.Router()
/* const contactCtr = require('../controllers/contact') */

const auth = require('../middleware/auth');
const Contact = require('../models/contact')



router.get('/', (req,res,next) =>{
    Contact.find().then(
        (contacts) => {
          res.status(200).json(contacts);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
}
);


router.post('/',(req, res, next) => {
    const contact = new Contact({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phonenumber: req.body.phonenumber,
      discuss: req.body.discuss,
      idUser: req.body.idUser,
      birthday: req.body.birthday,
      profession:req.body.profession
    });
    contact.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
});

router.get('/:id', (req, res, next) => {
    Contact.findOne({
      _id: req.params.id
    }).then(
      (thing) => {
        res.status(200).json(thing);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
    }
);


router.put('/:id', (req, res, next) => {
    const contact = new Contact({
        _id: req.params.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        discuss: req.body.discuss,
        email: req.body.email,
        profession: req.body.profession,
        birthday: req.body.birthday
    });
    Contact.updateOne({_id: req.params.id}, auth, contact).then(
        () => {
        res.status(201).json({
            message: 'Thing updated successfully!'
            
        });
        console.log(req.body);
        }
    ).catch(
        (error) => {
        res.status(400).json({
            error: error
        });
        }
    );
    }
);

router.delete('/:id', (req, res, next) => {
    Contact.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

module.exports = router;