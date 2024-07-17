// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';
// import NotFound from "./components/NotFound.jsx";
// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="*" element={<NotFound/>}/>
//             </Routes>
//         </Router>
//     );
// }
//
// export default App;
export default function App() {
    return(
        <h1 className="text-3xl font-bold underline text-red-500">
            Hello world!
        </h1>
    )
}