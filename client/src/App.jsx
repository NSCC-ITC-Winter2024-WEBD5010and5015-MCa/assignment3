// import React from 'react';
// import NavBar from './components/NavBar';
// import Main from './components/Main';
// import SignIn from './components/SignIn';
// import Footer from './components/Footer';
// import Details from './components/Details';
// import CreateForm from './components/CreateForm';
// import EditForm from './components/EditForm';


// import { Route, Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <div id="main-content">
//         <Routes>
//           <Route index element={ <Main /> }/>
//           <Route path="signin"  element={ <SignIn /> } />
//           <Route path="students/:id" element={ <Details /> } />
//           <Route path="students/edit/:id" element={ <EditForm /> } />
//           <Route path="addstudent" element={ <CreateForm /> } />
//         </Routes>
//         {/* <SignIn /> */}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App
import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import Details from './components/Details';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      <div id="main-content">
        <Routes>
          <Route index element={<Main />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="movies/:id" element={<Details />} />
          <Route path="movies/edit/:id" element={<EditForm />} />
          <Route path="addmovie" element={<CreateForm />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
