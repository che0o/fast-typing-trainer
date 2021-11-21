import { createReduxStore } from "./store";
import { Provider } from "react-redux";
import { Layout } from "./containers/Layout"
import './App.css'

const store = createReduxStore();

function App() {
    return (
      <Provider store={store}>
        <div className="App">
            <Layout />
        </div>
      </Provider>
    );
}

export default App;
