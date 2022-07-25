const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConnect;


/*  *************************   

    const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'CSS is hard',
  date: new Date(),
  important: false,
})

if ( false ) {
  note.save().then(() => {
    console.log('note saved!')
    mongoose.connection.close()
  })
}

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

*/