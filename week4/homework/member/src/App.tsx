import Router from "@routes/router";
import { themeClass } from "@styles/theme.css";

function App() {
  return (
    <div className={themeClass}>
      <Router />
    </div>
  );
}

export default App;
