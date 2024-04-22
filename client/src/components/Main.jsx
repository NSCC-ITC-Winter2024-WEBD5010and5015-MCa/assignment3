// import React, { useState, useEffect } from 'react';
// import '../css/main.css'
// import 'font-awesome/css/font-awesome.min.css';
// import axios from 'axios';
// import Card from './Card';
// import { Link } from 'react-router-dom';

// const Main = () => {
//   console.log(import.meta.env.VITE_API_LOCATION)

//   const [students , setStudents] = useState([])
//   // const

//     useEffect(()=> {
//       //retrieve our students data
//       axios.get(`${import.meta.env.VITE_API_LOCATION}/students`)
//           .then(response => {
//             console.log(response.data)
//             setStudents(response.data)
//           })

//     }, [])

//     function handleDelete(studentId) {
//       //make a call to the delete endpoint for removing student
//       axios.delete(`${import.meta.env.VITE_API_LOCATION}/students/${studentId}`)
//            .then(response => {
//             console.log(response)
//             //update the state to exclude the newly deleted student..
//             //new array to overwrite the current array
//             //apply filter to filter out the deleted student
//             const filteredStudents = students.filter(item => item._id !=studentId)
//             setStudents(filteredStudents) //trigger re-render without delete
//            })
//            .catch(error => {
//             console.log(error)
//            })
//     }

//     return ( 
//       <div>
      
//         <div className="album py-5 bg-light">
//           <Link className="btn btn-danger" to="/addstudent">Add New Student</Link>
//           <div className="container">
//             <div className="row">

//               { students.map(student => <Card  key={student._id} student={student} onDelete={handleDelete}/>) }

//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }
 
// export default Main;

import React, { useState, useEffect } from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';

const Main = () => {
    console.log(import.meta.env.VITE_API_LOCATION)

    const [movies, setMovies] = useState([]) // Changed from students to movies

    useEffect(() => {
        // Retrieve our movies data
        axios.get(`${import.meta.env.VITE_API_LOCATION}/movies`)
            .then(response => {
                console.log(response.data)
                setMovies(response.data) // Set the movies data to state
            })
            .catch(error => console.error("Error fetching movies:", error));
    }, [])

    function handleDelete(movieId) {
        // Make a call to the delete endpoint for removing movie
        axios.delete(`${import.meta.env.VITE_API_LOCATION}/movies/${movieId}`)
            .then(response => {
                console.log("Delete response:", response)
                // Update the state to exclude the newly deleted movie
                const filteredMovies = movies.filter(movie => movie._id !== movieId)
                setMovies(filteredMovies) // Trigger re-render without deleted movie
            })
            .catch(error => console.error("Error deleting movie:", error));
    }

    return (
        <div>
            <div className="album py-5 bg-light">
                <Link className="btn btn-danger" to="/addmovie">Add New Movie</Link> {/* Updated link */}
                <div className="container">
                    <div className="row">
                        {movies.map(movie => (
                            <Card key={movie._id} movie={movie} onDelete={handleDelete} /> // Updated to pass movie props
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
