
import './App.css';
import Counter from './Counter';
import TextInput from './TextInput';
import Welcome from './Welcome';
import Form from './form';


function App() {
return (
<div>
<h1>Привет, мир!</h1>
<p>Это мое первое React-приложение.</p>
<Welcome name= "Anna" />
<Counter/>
<TextInput/>
<Form/>
</div>
);
}
export default App;


