import { useState } from 'react';
function Form() {
const [name, setName] = useState('');
function handleSubmit(event) {
event.preventDefault();
alert(`Привет, ${name}!`);
}
return (
<form onSubmit={handleSubmit}>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<button type="submit">Отправить</button>
</form>
);
}
export default Form;