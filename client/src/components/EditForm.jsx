// import { useState, useEffect } from 'react';
// import '../css/signin.css';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// //name, email, dob, student id

// const EditForm = props => {

//     //define our state variables
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

//     //get the id from the route apth
//     const { id } = useParams()

//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get(`http://localhost:5500/students/${id}`)
//         .then(response => {
//             //store the data in state
//             console.log(response.data) //student data
//             const student = response.data
//             //set the needed state var to pre fill edit form
//             setName(student.name)
//             setAge(student.age);
//             setEmail(student.contact?.email)
//             setClassLevel(student.class_level)
//             setPhone(student.contact?.phone)
//             setDob(student.date_of_birth)
//             setStudentId(student.student_id)
//             setMathGrade(student.grades?.math)
//             setEnglishGrade(student.grades?.english)
//             setScienceGrade(student.grades?.science)
//             setStreet(student.address?.street)
//             setCity(student.address?.city)
//             setState(student.address?.state)
//             setZip(student.address?.zip)
           
//         })
//     }, []) 

//     const handleSubmit = event => {
//         event.preventDefault()

//         //build our post body to send to the api
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

//         //post this data to an endpoint for creation
//         axios.patch(`${import.meta.env.VITE_API_LOCATION}/students/${id}`, body)
//              .then(response => { //assume the api call was successful
//                  console.log(response)
//                  //navigate back to the home page if updated successfully
//                  navigate('/') // programatically navigate back to the homepage
//              })
//              .catch(error => {
//                  //api call failed....could
//              })
//     }

//     return ( 
//         <form className="form-signin" onSubmit={handleSubmit}>
            
//             <h1 className="h3 mb-3 font-weight-normal text-center">Edit Student</h1>
            
//             <input type="text" id="inputName" className="form-control" placeholder="Student Name" value={name} onChange={event => setName(event.target.value)} required />

//             <input type="text" id="inputStudentId" className="form-control" placeholder="Student ID" value={studentId} onChange={event => setStudentId(event.target.value)} required />

//             <input type="number" id="inputAge" className="form-control" placeholder="Student Age" value={age} min="1" onChange={event => setAge(event.target.value)} required />

//             <select id="inputClassLevel" className='form-control' value={classLevel} onChange={event => setClassLevel(event.target.value)} required>
//                 <option value=''>Select Class Level...</option>
//                 <option>Freshman</option>
//                 <option>Sophomore</option>
//                 <option>Junior</option>
//                 <option>Senior</option>
//             </select>

//             <input type="email" id="inputEmail" className="form-control" placeholder="Email address" value={email} onChange={event => setEmail(event.target.value)} required />

//             <input type="text" id="inputPhone" className="form-control" placeholder="Phone (Ex: 555-123-1234)" value={phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={event => setPhone(event.target.value)} required />      

//             <input type="date" id="inputDOB" className="form-control" placeholder="Date of Birth" value={dob} onChange={event => setDob(event.target.value)} required />

//             <p style={{ fontWeight: 'bold', marginTop: '1em'  }}>Address Info</p>
//             <input type="text" id="inputStreet" className="form-control" placeholder="Street" value={street} onChange={event => setStreet(event.target.value)} required />
//             <input type="text" id="inputCity" className="form-control" placeholder="City" value={city} onChange={event => setCity(event.target.value)} required />
//             <input type="text" id="inputState" className="form-control" placeholder="State" value={state} onChange={event => setState(event.target.value)} required />
//             <input type="text" id="inputZip" pattern="[0-9]{5}" className="form-control" placeholder="Zip Code (Ex. 12345)" value={zip} onChange={event => setZip(event.target.value)} required />

            
//             <p style={{ fontWeight: 'bold', marginTop: '1em' }}>Grades Info</p>
//             <input type="number" id="inputMathGrade" className="form-control" placeholder="Math Grade" value={mathGrade} min="0" max="100" onChange={event => setMathGrade(event.target.value)} required />
//             <input type="number" id="inputEnglishGrade" className="form-control" placeholder="English Grade" value={englishGrade} min="0" max="100" onChange={event => setEnglishGrade(event.target.value)} required />
//             <input type="number" id="inputScienceGrade" className="form-control" placeholder="Science Grade" value={scienceGrade} min="0" max="100" onChange={event => setScienceGrade(event.target.value)} required />
            
//             <button className="btn btn-lg btn-primary btn-block" type="submit">Save Changes</button>

//         </form>
//      );
// }
 
// export default EditForm;
// import { useState, useEffect } from 'react';
// import '../css/signin.css';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditForm = () => {
//     // Define state variables for movie attributes
//     const [title, setTitle] = useState('');
//     const [releaseYear, setReleaseYear] = useState('');
//     const [genre, setGenre] = useState('');
//     const [director, setDirector] = useState('');
//     const [description, setDescription] = useState('');

//     // Get the movie ID from the route path
//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get(`${import.meta.env.VITE_API_LOCATION}/movies/${id}`)
//             .then(response => {
//                 const movie = response.data;
//                 setTitle(movie.title);
//                 setReleaseYear(movie.releaseYear);
//                 setGenre(movie.genre);
//                 setDirector(movie.director);
//                 setDescription(movie.description);
//             })
//             .catch(error => console.error("Failed to fetch movie details:", error));
//     }, [id]);

//     const handleSubmit = event => {
//         event.preventDefault();

//         // Build our post body to send to the API
//         const body = {
//             title,
//             releaseYear,
//             genre,
//             director,
//             description
//         };

//         // Post this data to an endpoint for updating
//         axios.patch(`${import.meta.env.VITE_API_LOCATION}/movies/${id}`, body)
//             .then(response => {
//                 navigate('/'); // Navigate back to the homepage if updated successfully
//             })
//             .catch(error => {
//                 console.error("Failed to update movie:", error);
//             });
//     }

//     return (
//         <form className="form-signin" onSubmit={handleSubmit}>
//             <h1 className="h3 mb-3 font-weight-normal text-center">Edit Movie</h1>

//             <input type="text" id="inputTitle" className="form-control" placeholder="Movie Title" value={title} onChange={e => setTitle(e.target.value)} />
//             <input type="number" id="inputReleaseYear" className="form-control" placeholder="Release Year" value={releaseYear} onChange={e => setReleaseYear(e.target.value)} />
//             <input type="text" id="inputGenre" className="form-control" placeholder="Genre" value={genre} onChange={e => setGenre(e.target.value)} />
//             <input type="text" id="inputDirector" className="form-control" placeholder="Director" value={director} onChange={e => setDirector(e.target.value)} />
//             <textarea id="inputDescription" className="form-control" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />

//             <button className="btn btn-lg btn-primary btn-block" type="submit">Save Changes</button>
//         </form>
//     );
// }

// export default EditForm;import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import '../css/signin.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
    // Define state variables for movie attributes
    const [title, setTitle] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [genre, setGenre] = useState('');

    // Get the movie ID from the route path
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_LOCATION}/movies/${id}`)
            .then(response => {
                const movie = response.data;
                setTitle(movie.title || '');
                setReleaseYear(movie.release_year || '');
                setGenre(movie.genre || '');
            })
            .catch(error => console.error("Failed to fetch movie details:", error));
    }, [id]);

    const handleSubmit = event => {
        event.preventDefault();

        // Build our post body to send to the API
        const body = {
            title,
            release_year: releaseYear,
            genre
        };

        // Post this data to an endpoint for updating
        axios.patch(`${import.meta.env.VITE_API_LOCATION}/movies/${id}`, body)
            .then(response => {
                navigate('/'); // Navigate back to the homepage if updated successfully
            })
            .catch(error => {
                console.error("Failed to update movie:", error);
            });
    }

    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Edit Movie</h1>

            <input type="text" id="inputTitle" className="form-control" placeholder="Movie Title" value={title} onChange={e => setTitle(e.target.value)} required />
            <input type="number" id="inputReleaseYear" className="form-control" placeholder="Release Year" value={releaseYear} onChange={e => setReleaseYear(e.target.value)} required />
            <input type="text" id="inputGenre" className="form-control" placeholder="Genre" value={genre} onChange={e => setGenre(e.target.value)} required />

            <button className="btn btn-lg btn-primary btn-block" type="submit">Save Changes</button>
        </form>
    );
}

export default EditForm;
