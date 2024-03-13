import LocalStorage from './LocalStorage/LocalStorage';
import UseRefWork from './UseRef/UseRefWork';
import FormWork from './WorkingWithForm/FormWork';
import FormWorks2 from './WorkingWithForm/FormWorks2';
import FormWorks3 from './WorkingWithForm/FormWorks3';
import FormWorks4 from './WorkingWithForm/FormWorks4';
import LoginDemo from './WorkingWithForm/LoginDemo';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App container bg-dark text-light cx-main p-5">
      
      
       {/* <FormWork/> */}
       {/* <FormWorks2/> */}
       {/* <FormWorks3/> */}
        {/* <LoginDemo/> */}
        {/* <FormWorks4/> */}
        {/* <UseRefWork/> */}
        <LocalStorage/>
    </div>
  );
}

export default App;
