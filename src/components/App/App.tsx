import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
      <Notification />
    </div>
  );
}

export default App;
