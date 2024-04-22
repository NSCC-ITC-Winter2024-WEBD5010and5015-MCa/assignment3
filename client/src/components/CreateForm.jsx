// import { useState } from 'react';
// import '../css/signin.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CreateForm = props => {

//     const [name, setName] = useState('')
//     const [age, setAge] = useState('')
//     const [email, setEmail] = useState('')
//     const [classLevel, setClassLevel] = useState('')
//     const [phone, setPhone] = useState('')
//     const [dob, setDob] = useState('')
//     const [studentId, setStudentId] = useState('')
//     const [mathGrade, setMathGrade] = useState(0)
//     const [englishGrade, setEnglishGrade] = useState(0)
//     const [scienceGrade, setScienceGrade] = useState(0)
//     const [street, setStreet] = useState('')
//     const [city, setCity] = useState('')
//     const [state, setState] = useState('')
//     const [zip, setZip] = useState('')

//     const navigate = useNavigate();

//     const handleSubmit = event => {
//         event.preventDefault()
//         const body = {
//             name: name,
//             date_of_birth: dob,
//             student_id: studentId,
//             class_level: classLevel,
//             age,
//             contact: {
//                 email,
//                 phone
//             },
//             grades: {
//                 math: mathGrade,
//                 science: scienceGrade,
//                 english: englishGrade
//             },
//             address: {
//                 street,
//                 city,
//                 state,
//                 zip,
//             }
//         }

//         axios.post(`${import.meta.env.VITE_API_LOCATION}/students`, body)
//              .then(response => { 
//                  console.log(response)
                 
//                  navigate('/') 
//              })
//              .catch(error => {
               
//              })
//     }

//     return ( 
//         <form className="form-signin" onSubmit={handleSubmit}>
            
//             <h1 className="h3 mb-3 font-weight-normal text-center">Create New Student</h1>
            
//             <input type="text" id="inputName" className="form-control" placeholder="Student Name" onChange={event => setName(event.target.value)} required />

//             <input type="text" id="inputStudentId" className="form-control" placeholder="Student ID" onChange={event => setStudentId(event.target.value)} required />

//             <input type="number" id="inputAge" className="form-control" placeholder="Student Age" min="1" onChange={event => setAge(event.target.value)} required />

//             <select id="inputClassLevel" className='form-control' onChange={event => setClassLevel(event.target.value)} required>
//                 <option value=''>Select Class Level...</option>
//                 <option>Freshman</option>
//                 <option>Sophomore</option>
//                 <option>Junior</option>
//                 <option>Senior</option>
//             </select>

//             <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={event => setEmail(event.target.value)} required />

//             <input type="text" id="inputPhone" className="form-control" placeholder="Phone (Ex: 555-123-1234)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={event => setPhone(event.target.value)} required />      

//             <input type="date" id="inputDOB" className="form-control" placeholder="Date of Birth" onChange={event => setDob(event.target.value)} required />

//             <p style={{ fontWeight: 'bold', marginTop: '1em'  }}>Address Info</p>
//             <input type="text" id="inputStreet" className="form-control" placeholder="Street" onChange={event => setStreet(event.target.value)} required />
//             <input type="text" id="inputCity" className="form-control" placeholder="City" onChange={event => setCity(event.target.value)} required />
//             <input type="text" id="inputState" className="form-control" placeholder="State" onChange={event => setState(event.target.value)} required />
//             <input type="text" id="inputZip" pattern="[0-9]{5}" className="form-control" placeholder="Zip Code (Ex. 12345)" onChange={event => setZip(event.target.value)} required />

            
//             <p style={{ fontWeight: 'bold', marginTop: '1em' }}>Grades Info</p>
//             <input type="number" id="inputMathGrade" className="form-control" placeholder="Math Grade" min="0" max="100" onChange={event => setMathGrade(event.target.value)} required />
//             <input type="number" id="inputEnglishGrade" className="form-control" placeholder="English Grade" min="0" max="100" onChange={event => setEnglishGrade(event.target.value)} required />
//             <input type="number" id="inputScienceGrade" className="form-control" placeholder="Science Grade" min="0" max="100" onChange={event => setScienceGrade(event.target.value)} required />
            
//             <button className="btn btn-lg btn-primary btn-block" type="submit">Save Student</button>

//         </form>
//      );
// }
 
// export default CreateForm;

import { useState } from 'react';
import '../css/signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateForm = () => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [coStars, setCoStars] = useState('');
    const [criticsRating, setCriticsRating] = useState(0);
    const [audienceRating, setAudienceRating] = useState(0);

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const body = {
            title: title,
            genre: genre,
            release_year: releaseYear,
            co_stars: coStars.split(',').map(item => item.trim()),
            ratings: {
                critics: criticsRating,
                audience: audienceRating
            }
        };

        axios.post(`${import.meta.env.VITE_API_LOCATION}/movies`, body)
             .then(response => { 
                 console.log(response);
                 navigate('/');
             })
             .catch(error => {
                 console.error("Error creating movie:", error);
             });
    };

    return ( 
        <form className="form-signin" onSubmit={handleSubmit}>
            
            <h1 className="h3 mb-3 font-weight-normal text-center">Create New Movie</h1>
            
            <input type="text" className="form-control" placeholder="Title" onChange={event => setTitle(event.target.value)} required />
            
            <select className='form-control' onChange={event => setGenre(event.target.value)} required>
                <option value=''>Select Genre...</option>
                <option>Action</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Horror</option>
                <option>Romance</option>
                <option>Sci-Fi</option>
                <option>Thriller</option>
            </select>

            <input type="number" className="form-control" placeholder="Release Year" min="1900" onChange={event => setReleaseYear(event.target.value)} required />

            <input type="text" className="form-control" placeholder="Co-Stars (comma separated)" onChange={event => setCoStars(event.target.value)} required />

            <p style={{ fontWeight: 'bold', marginTop: '1em' }}>Ratings Info</p>
            <input type="number" className="form-control" placeholder="Critics Rating" min="0" max="100" onChange={event => setCriticsRating(event.target.value)} required />
            <input type="number" className="form-control" placeholder="Audience Rating" min="0" max="100" onChange={event => setAudienceRating(event.target.value)} required />
            
            <button className="btn btn-lg btn-primary btn-block" type="submit">Save Movie</button>

        </form>
    );
}

export default CreateForm;
