import {createReduxStore} from "./store";
import {Provider} from "react-redux";
import {Playground} from "./components/Playground";
import './App.css'

const store = createReduxStore();

function App() {
    return (
      <Provider store={store}>
        <div className="App">
            <Playground />
        </div>
      </Provider>
    );
}

export default App;
