import "./App.css";

import { Route, Routes } from "react-router-dom";

import Board from "./Page/Board";
import BoardPage from "./Page/BoardPage";
import BoardWriteFrom from "./Page/BoardWirteFrom";

// Routes와 Route를 이용하여 화면 관리
function App() {
  return (
    <div>
      {/**고정할 화면이 있다면 Routes의 바깥에 두거나, Layout사용 */}
      <Routes>
        <Route path="/" element={<Board />}></Route>
        <Route path="/board/:id" element={<BoardPage />}></Route>
        <Route path="/board/modifyform" element={<BoardWriteFrom />}></Route>
      </Routes>
    </div>
  );
}

export default App;
