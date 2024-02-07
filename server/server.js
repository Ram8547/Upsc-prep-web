const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const User = require('./db/userSchema');
const axios = require('axios');
require('./db/conn');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());




// chatGPT code 


//const OPENAI_API_KEY = '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';

const openai = require('openai');
require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
openai.apiKey = OPENAI_API_KEY;

async function getChatGPTResponse(messages) {
  try {
    const response = await openai.ChatCompletion.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching chatbot response:', error);
    throw error;
  }
}

module.exports = {
  getChatGPTResponse,
};




// contact form code 
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json());

app.post( '/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  const data = {
    name,
    email,
    phone,
    message,
    response: 'Thank you for your message! We will get back to you soon.'
  };
  console.log(data);
  axios.post('/api/contact', data).then(res => {
    res.status(201).send(res.data);
  }).catch(err => {
    res.status(400).send(err);
  });
  
})

// database connection

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.post('/create/user', async (req, res) => {
  let user;
  bcrypt.hash(req.body.password, 10, async (error, hashedPassword) => {
    try {
      //if(error) {return next(error);}
      if (req.body.password == "") {
        res.status(400).send({ error: "Password is required" });
        return;
      }

      if (req.body.email == "") {
        res.status(400).send({ error: "Email is required" })
      }

      req.body.password = hashedPassword;
      user = await User.create(req.body);
      res.status(201).send(user);
    } catch (error) {
      if (error.errors) {
        error.errors["firstname"] && res.status(400).send({ error: "Firstname is required" });
        error.errors["lastname"] && res.status(400).send({ error: "Lastname is required" });
      }

      if (error.message.indexOf('duplicate key error') !== -1) {
        res.status(400).send({ error: 'User already exists' });
      }
    }
  });
});

app.post('/auth/login', async (req, res) => {
  try {
    if (req.body.password == "") {
      res.status(400).send({ error: "Password is required" });
      return;
    }

    if (req.body.email == "") {
      res.status(400).send({ error: "Email is required" })
    }

    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).send({ error: "User not exists" });
      return;
    }

    let checked = await bcrypt.compare(req.body.password, user.password);
    console.log(checked);
    if (checked) res.status(200).send(user);
    else res.status(400).send({ error: "Invalid credentials" });
  } catch (error) {
    console.log(error);
  }
})



app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});
