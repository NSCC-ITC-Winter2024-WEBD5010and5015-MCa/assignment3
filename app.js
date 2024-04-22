import express from 'express'
import mongoose, { isObjectIdOrHexString } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
const app = express()

dotenv.config()

app.use(cors()) 
app.use(express.json()) 
app.use(express.static('client/dist'))

console.log(process.env.MONGO_DB)

mongoose.connect(process.env.MONGO_DB)
        .then(() => console.log('Connected')) 
        .catch(error => console.log(`Unable to connect: ${error}`));

// const { Schema } = mongoose;

// const contactSchema = new Schema({
//     email: String,
//     phone: String
// }, { _id: false })

// const gradesSchema = new Schema({
//     math: Number,
//     english: Number,
//     science: Number
// }, { _id: false })

// const addressSchema = new Schema({
//     street: String,
//     city: String,
//     state: String,
//     zip: String
// }, { _id: false })

// const studentSchema = new Schema({
//     name: String,
//     student_id: String,
//     date_of_birth: String,
//     age: Number,
//     class_level: String,
//     contact: contactSchema,
//     grades: gradesSchema,
//     address: addressSchema
// }, { versionKey: false })

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    release_year: {
        type: Number,
        required: true
    },
    co_stars: {
        type: [String], 
        required: true
    },
    ratings: {
        critics: {
            type: Number,
            required: true
        },
        audience: {
            type: Number,
            required: true
        }
    }
});
// const Student = mongoose.model('Student', studentSchema);
const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
// app.get('/', (req, res) => {
//     res.send('Hello from the app')
// })

// app.get('/students', (req, res) => {

//     Student.find()
//            .then(data => res.json(data))
//            .catch(error => {
//                 console.log(error)
//                 res.status(500).send({ message: "Server Error - Come back soon" })
//             })
// })

// app.get('/students/:id', (req, res) => {
//     Student.findById(req.params.id)
//            .then(student => {
//                 if(!student){ 
//                     return res.status(404).send()
//                 }

//                 console.log(student.age)
//                 res.json(student)
//             })
//             .catch(error => {
//                 console.log(error)
//                 if(error.kind == 'ObjectId'){
//                     res.status(400).send({ message: "Invalid Id" })
//                 } else {
//                     res.status(500).send({ message: "Server Error - Come back soon" })
//                 }
//             })
// })

// app.post('/students', async (req, res) => {
//     console.log(req.body)

//     const newStudent = new Student(req.body)

//     const saved = await newStudent.save()

//     console.log(saved)

//     res.send(saved)
// })

// app.delete('/students/:id', async (req, res) => {
    
//     try {
//         const deletedStudent = await Student.findByIdAndDelete(req.params.id);
//         console.log(deletedStudent)

//         if(!deletedStudent){
//             return res.status(404).send() 
//         }
    
//         return res.status(204).send() 
//     } catch(err) {
//         return res.status(500).json({ message: "A server error occurred. Try again or come back later" })
//     }

// })

// app.patch('/students/:id', async (req, res) => {
//     if(mongoose.Types.ObjectId.isValid(req.params.id)){
        
//             try{
//                 const updatedDocument = await Student.findByIdAndUpdate(req.params.id, { $set: req.body })
        
//                 if(!updatedDocument){
//                     return res.status(404).send()
//                 }
//                 return res.status(204).send()
//             } catch (error) {
//                 return res.status(500).send({ message: "Server error occured. Try again later"})
//             }
//     } else {
//         res.status(400).json({ message: "Invalid Object Id" })
//     }

//  })

app.get('/movies', (req, res) => {
    Movie.find()
        .then((data) => { 
            // console.log("Data retrieved:", data);  
            res.json(data);
        })
        .catch(error => {
            console.error("Error fetching movies:", error);  
            res.status(500).send({ message: "Server Issues - Try Again Later" });
        });
});

app.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            // console.log("Movie found:", movie);  
            if (!movie) {
                return res.status(404).send({ message: "Movie not found" });
            }
            res.json(movie);
        })
        .catch(error => {
            console.error(`Error fetching movie with ID ${req.params.id}:`, error);  
            if (error.kind === 'ObjectId') {
                res.status(400).send({ message: "Invalid ID" });
            } else {
                res.status(500).send({ message: "Server Issues - Try Again Later" });
            }
        });
});
app.post('/movies', (req, res) => {
    const movie = new Movie(req.body);
    movie.save()
        .then(savedMovie => res.status(201).json(savedMovie))
        .catch(error => res.status(400).json({ message: "Error saving movie." }));
});
app.patch('/movies/:id', (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid ID format." });
    }

    Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then(updatedMovie => {
            if (!updatedMovie) return res.status(404).send();
            res.json(updatedMovie);
        })
        .catch(error => res.status(500).json({ message: "Server error occurred." }));
});
app.delete('/movies/:id', (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(deletedMovie => {
            if (!deletedMovie) return res.status(404).send();
            res.status(204).send();
        })
        .catch(error => res.status(500).json({ message: "Server error occurred." }));
});

app.get('/test-db', (req, res) => {
    mongoose.connection.db.admin().listDatabases((err, result) => {
        if (err) {
            console.error("Error testing database connection:", err);
            return res.status(500).send({ message: "Database connection error" });
        }
        console.log("Databases:", result.databases);
        res.send("Database connection successful");
    });
});

app.get('/', (req, res) => {
    res.send('Hello')

}
)

const server = app.listen(process.env.PORT || 5000, () => console.log(`Listening on port ${server.address().port}`))
