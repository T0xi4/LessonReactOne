
import './App.css';
import Counter from './Counter';
import TextInput from './TextInput';
import TodoApp from './TodoApp';
import Welcome from './Welcome';
import Form from './form';



function App() {
return (
<div className='App'>
<h1>Привет, мир!</h1>
<p>Это мое первое React-приложение.</p>
{/* <Welcome name= "Anna" />
<Counter/> 
<TextInput/>
<Form/> */}
<TodoApp/>
</div>
);
}
export default App;
//Тест для комита