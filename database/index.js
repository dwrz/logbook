const mongoose = require('mongoose');
const moment = require('moment');
const URL = 'mongodb://localhost/log/';
let today = moment().startOf('day');
let tomorrow = moment(today).add(1, 'days');

mongoose.connect(URL);

const entrySchema = mongoose.Schema({
  timestamp: Date,
  event: String,
  description: String
});

let Entry = mongoose.model('Entry', entrySchema);

function save(entry) {
  console.log('SAVING ENTRY: ');
  console.log(entry);
  
  let newEntry = new Entry(entry);
  newEntry.save(function (error, success) {
    if (error) {
      console.error('ERROR: FAILED TO SAVE TO DB');
      console.error(error);
    } else {
      console.log('ENTRY SAVED OK');
    }
  });
}

function load(type, callback) {
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

exports.save = save;
exports.load = load;
