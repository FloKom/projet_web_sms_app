const express = require('express')
const mongoose = require('mongoose');
const routesContact = require('./routes/contact');
const userRoutes = require('./routes/user');
const app = express()

mongoose.connect('mongodb+srv://florian:florian22@cluster0.xp1cc.mongodb.net/projetWeb?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use(express.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/contacts', routesContact);
app.use('/auth', userRoutes);

module.exports = app