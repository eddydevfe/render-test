const mongoose = require("mongoose");

// You can get the command line arguments like so.
if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1); // Not sure what this does.
}

const password = process.argv[2];

const url = `mongodb+srv://deveduardofe:${password}@cluster0.4mxk2w7.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false); // Not sure what this does.

mongoose.connect(url);

// Schema defines the structure of the data/object for the DB.
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//   content: 'Focusing on stuff surely is hard huh',
//   important: true,
// })

// The model has the save method and other stuff
// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
