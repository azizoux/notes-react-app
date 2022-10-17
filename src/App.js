import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainArea from "./Components/MainArea/MainArea";
import ListNotes from "./Components/ListNotes/ListNotes";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DisplayNote from "./Components/DisplayNote/DisplayNote";

function App() {
  return (
    <>
      <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<ListNotes />} />
            <Route exact path='/edit' element={<MainArea />} />
            <Route exact path='/displayNote/:id' element={<DisplayNote />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
