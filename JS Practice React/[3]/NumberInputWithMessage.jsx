import { useState } from 'react';

export default function App() {
  return (
    <InputNumber />
  )
}

function InputNumber() {
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleChange} />
      <Message number={+number || null} />
    </div>
  )
}

function Message({ number }) {
  let message = "Введите число";

  if (number > 0) {
    message = "Число больше нуля";
  } else if (number < 0) {
    message = "Число меньше нуля";
  } else if (number === 0) {
    message = "Число равно нулю";
  }

  return (
    <p>{message}</p>
  )
}