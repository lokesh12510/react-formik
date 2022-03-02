import "./App.css";
import FormikContainer from "./Components/FormikContainer";
import SimpleForm from "./Components/SimpleForm";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function App() {
  return (
    <div className="App">
      {/* <SimpleForm /> */}

      <MuiPickersUtilsProvider utils={MomentUtils}>
        <FormikContainer />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
