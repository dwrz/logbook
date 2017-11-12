const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URL = 'mongodb://localhost/log/';
const moment = require('moment');
let today = moment().startOf('day');
let tomorrow = moment(today).add(1, 'days');

mongoose.connect(URL);

const entrySchema = mongoose.Schema({
  description: String,
  event: String,
  timestamp: Date,
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});
let Entry = mongoose.model('Entry', entrySchema);

const userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  entries: [{type: Schema.Types.ObjectId, ref: 'Entry'}]
});
let User = mongoose.model('User', userSchema);

function saveUser(user) {
  console.log('SAVING USER: ');
  console.log(user);
  
  let newUser = new User(user);
  newUser.save(function (error, success) {
    if (error) {
      console.error('ERROR: FAILED TO SAVE TO DB');
      console.error(error);
    } else {
      // ADD ENTRY TO USERS ENTRY
      console.log('USER SAVED OK');
    }
  });
}

function checkUser(callback) {
}

function saveEntry(entry, user) {
  console.log('SAVING ENTRY: ');
  let entryUser = User.findOne({username: user}).exec((error, userEntry) => {
    entry.user = userEntry;

    let newEntry = new Entry(entry);;
    newEntry.save(function (error, dbEntry) {
      if (error) {
        console.error('ERROR: FAILED TO SAVE TO DB');
        console.error(error);
      } else {
        userEntry.entries.push(dbEntry);
        userEntry.save((error, updatedUserEntry) => {
          console.log('ADDED ENTRY TO USER');
          console.log(updatedUserEntry);
        });
        console.log('ENTRY SAVED OK');
      }
    });
  });  
}

function loadEntries(type, callback) {
  if (type === 'cd') { // Entries for current day.
    Entry.find({timestamp: {
      $gte: today.toDate(),
      $lt: tomorrow.toDate()
    }})
      .sort({timestamp: 'desc'})
      .exec((error, entries) => {
        if (error) {
          console.error('ERROR: FAILED TO LOAD FROM DB');
          console.error(error);
        } else {
          callback(entries);
        }
      });
  }
}

exports.saveEntry = saveEntry;
exports.loadEntries = loadEntries;
exports.saveUser = saveUser;
exports.checkUser = checkUser;
