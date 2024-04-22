// import { Link } from 'react-router-dom'

// const Card = ({ student, onDelete }) => {

//     function calculateAverageGrade() {
//         return Math.round((student.grades.math + student.grades.science + student.grades.english) / 3)
//     }

//     function handleDelete(student) {
//       // alert(studentId)
//       const answer = confirm(`Delete ${student.name}?`)
//       if(answer){
//         onDelete(student._id)
//       }
//     }

//   return (
//             <div className="col-md-4">
//                 <div className="card mb-4 box-shadow">
//                   {/* <img 
//                     className="card-img-top" 
//                     data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
//                     alt="Thumbnail [100%x225]" 
//                     style={{height: 225, width: '100%', display: 'block'}}
// 	                  src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22382%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20382%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16e231e5e51%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A19pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16e231e5e51%22%3E%3Crect%20width%3D%22382%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22126.96875%22%20y%3D%22120.9%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" 
//                     data-holder-rendered="true" /> */}
//                   <div className="card-body">
//                     <h4 className="card-text">{student.name}</h4>
//                     {
//                       student.grades && <p className="card-text">Average Grade: {calculateAverageGrade()}</p>
//                     }
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div className="btn-group">
//                           <Link className="btn btn-sm btn-outline-secondary" to={`/students/${student._id}`}>View</Link>
//                           <Link className="btn btn-sm btn-outline-secondary" to={`students/edit/${student._id}`}>Edit</Link>
//                           <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleDelete(student)}>Delete</button>
//                       </div>
//                       <small className="text-muted">{student.class_level ? student.class_level : 'No Class Level'}</small>
//                     </div>
//                   </div>  
//                 </div>
//               </div>
//   )
// }

// export default Card;

import { Link } from 'react-router-dom';

const Card = ({ movie, onDelete }) => {

    function calculateAverageRating() {
        return Math.round((movie.ratings.critics + movie.ratings.audience) / 2);
    }

    function handleDelete(movie) {
        const answer = window.confirm(`Delete ${movie.title}?`);
        if (answer) {
            onDelete(movie._id);
        }
    }

    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <div className="card-body">
                    <h4 className="card-text">{movie.title}</h4>
                    <p className="card-text">Genre: {movie.genre}</p>
                    <p className="card-text">Release Year: {movie.release_year}</p>
                    <p className="card-text">Co-Stars: {movie.co_stars.join(', ')}</p>
                    {
                        movie.ratings && 
                        <p className="card-text">Average Rating: {calculateAverageRating()}</p>
                    }
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link className="btn btn-sm btn-outline-secondary" to={`/movies/${movie._id}`}>View</Link>
                            <Link className="btn btn-sm btn-outline-secondary" to={`/movies/edit/${movie._id}`}>Edit</Link>
                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleDelete(movie)}>Delete</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Card;
