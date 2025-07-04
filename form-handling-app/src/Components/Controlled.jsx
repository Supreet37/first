import React,{useState} from 'react';

const Controlled = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const setAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      name,
      email,
      age,
    };
    console.log(details);
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div className='form-body'>
      <h1>Controlled</h1>
      <form>
        <input type="text" placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder='enter your age' value={age} onChange= {setAgeHandler}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Controlled;