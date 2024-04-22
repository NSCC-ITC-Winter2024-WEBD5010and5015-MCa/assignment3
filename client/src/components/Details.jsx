
// import { useEffect, useState } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import axios from 'axios'

// const Details = () => {

//     const [student, setStudent] = useState(null)
//     const { id } = useParams()

//     useEffect(() => {
//         axios.get(`${import.meta.env.VITE_API_LOCATION}/students/${id}`)
//             .then(response => {
//                 //store the data in state
//                 console.log(response.data)
//                 setStudent(response.data)
//             })
//     }, [])

//     return (
//         <div className="align-items-center">
//             <div className="col-lg-8 col-md-8" style={{margin: "auto", paddingTop: 30, paddingBottom: 50}}>
//                             <Link className="btn btn-success mt-3" to="/">{'< Back to list'}</Link>
//                 <h4 className="font-size38 sm-font-size32 xs-font-size30">{ student?.name }</h4>
//                 <p className="no-margin-bottom">{student?.notes}</p>
//                 <div className="contact-info-section margin-40px-tb">
//                     <ul className="list-style9 no-margin">
//                         <li>
//                             <div className="row">
//                                 <div className="col-md-5 col-5">
//                                 <   strong className="margin-10px-left text-orange">Student Id:</strong>
//                                 </div>
//                                 <div className="col-md-7 col-7">
//                                     <p>{student?.student_id}</p>
//                                 </div>  
//                             </div>
//                         </li>
//                         <li>
//                             <div className="row">
//                                 <div className="col-md-5 col-5">
//                                     <strong className="margin-10px-left text-yellow">Date of birth:</strong>
//                                 </div>
//                                 <div className="col-md-7 col-7">
//                                     <p>{ student?.date_of_birth }</p>
//                                 </div>
//                             </div>
//                         </li>
//                         <li>
//                             <div className="row">
//                                 <div className="col-md-5 col-5">
//                                     <strong className="margin-10px-left text-lightred">Activities:</strong>
//                                 </div>
//                                 <div className="col-md-7 col-7">
//                                     <p>{ student?.activities ? student.activities.join(', ') : 'None Specified' }</p>
//                                 </div>
//                             </div>
//                         </li>
//                         <li>
//                             <div className="row">
//                                 <div className="col-md-5 col-5">
//                                     <strong className="margin-10px-left text-green">Address:</strong>
//                                 </div>
//                                 <div className="col-md-7 col-7">
//                                     <p>{ student?.address ? `${student?.address?.street}, ${student?.address?.city}, ${student?.address?.state}, ${student?.address?.zip}` : 'No Address Specified' }</p>
//                                 </div>
//                             </div>
//                         </li>
//                         <li>
//                             <div className="row">
//                                 <div className="col-md-5 col-5">
//                                     <strong className="margin-10px-left xs-margin-four-left text-purple">Phone:</strong>
//                                 </div>
//                                 <div className="col-md-7 col-7">
//                                     <p>{ student?.contact?.phone ? student.contact.phone : 'No phone specified'}</p>
//                                 </div>
//                             </div>
//                         </li>
//                         <li>
//                             <div className="row">
//                                 <div className="col-md-5 col-5">
//                                     <strong className="margin-10px-left xs-margin-four-left text-pink">Email:</strong>
//                                 </div>
//                                 <div className="col-md-7 col-7">
//                                     <p>{student?.contact?.email}</p>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>

//                 <h5 className="font-size24 sm-font-size22 xs-font-size20">Grades</h5>

//                 {
//                     student?.grades ? (
//                         <div className="sm-no-margin">
//                             <div className="progress-text">
//                                 <div className="row">
//                                     <div className="col-7">Math</div>
//                                     <div className="col-5 text-right">{student?.grades?.math}%</div>
//                                 </div>  
//                             </div>
//                             <div className="custom-progress progress">
//                                 <div role="progressbar" aria-valuenow={student?.grades?.math} aria-valuemin="0" aria-valuemax="100" style={{width: `${student?.grades?.math}%`}} className="animated custom-bar progress-bar slideInLeft bg-sky"></div>
//                             </div>
//                             <div className="progress-text">
//                                 <div className="row">
//                                     <div className="col-7">English</div>
//                                     <div className="col-5 text-right">{student?.grades?.english}%</div>
//                                 </div>
//                             </div>
//                             <div className="custom-progress progress">
//                                 <div role="progressbar" aria-valuenow={student?.grades?.english} aria-valuemin="0" aria-valuemax="100" style={{width: `${student?.grades?.english}%`}} className="animated custom-bar progress-bar slideInLeft bg-orange"></div>
//                             </div>
//                             <div className="progress-text">
//                                 <div className="row">
//                                     <div className="col-7">Science</div>
//                                     <div className="col-5 text-right">{student?.grades?.science}%</div>
//                                 </div>
//                             </div>
//                             <div className="custom-progress progress">
//                                 <div role="progressbar" aria-valuenow={student?.grades?.science} aria-valuemin="0" aria-valuemax="100" style={{width: `${student?.grades?.science}%`}} className="animated custom-bar progress-bar slideInLeft bg-green"></div>
//                             </div>
//                         </div>
//                     ) : (
//                         <p>No Grades Available</p>
//                     )
//                 }
                
//             </div>    
//         </div>
//     )
// }

// export default Details

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_LOCATION}/movies/${id}`)
            .then(response => {
                console.log(response.data);
                setMovie(response.data);
            })
            .catch(error => {
                console.error("Failed to fetch movie details:", error);
            });
    }, [id]);

    return (
        <div className="align-items-center">
            <div className="col-lg-8 col-md-8" style={{ margin: "auto", paddingTop: 30, paddingBottom: 50 }}>
                <Link className="btn btn-success mt-3" to="/">{'< Back to list'}</Link>
                <h4 className="font-size38 sm-font-size32 xs-font-size30">{movie?.title}</h4>
                <p className="no-margin-bottom">{movie?.description}</p>
                <div className="contact-info-section margin-40px-tb">
                    <ul className="list-style9 no-margin">
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left text-orange">Release Year:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p>{movie?.release_year}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left text-yellow">Genre:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p>{movie?.genre}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left text-green">Director:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    {/* <p>{movie?.director}</p> */}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <h5 className="font-size24 sm-font-size22 xs-font-size20">Ratings</h5>

                {
                    movie?.ratings ? (
                        <div className="sm-no-margin">
                            <div className="progress-text">
                                <div className="row">
                                    <div className="col-7">Critics</div>
                                    <div className="col-5 text-right">{movie?.ratings?.critics}%</div>
                                </div>
                            </div>
                            <div className="custom-progress progress">
                                <div role="progressbar" aria-valuenow={movie?.ratings?.critics} aria-valuemin="0" aria-valuemax="10" style={{ width: `${movie?.ratings?.critics * 10}%` }} className="animated custom-bar progress-bar slideInLeft bg-sky"></div>
                            </div>
                            <div className="progress-text">
                                <div className="row">
                                    <div className="col-7">Audience</div>
                                    <div className="col-5 text-right">{movie?.ratings?.audience}%</div>
                                </div>
                            </div>
                            <div className="custom-progress progress">
                                <div role="progressbar" aria-valuenow={movie?.ratings?.audience} aria-valuemin="0" aria-valuemax="10" style={{ width: `${movie?.ratings?.audience * 10}%` }} className="animated custom-bar progress-bar slideInLeft bg-orange"></div>
                            </div>
                        </div>
                    ) : (
                        <p>No Ratings Available</p>
                    )
                }
            </div>
        </div>
    )
}

export default Details;
