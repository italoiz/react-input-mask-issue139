import * as React from 'react';
import InputMask from './TextFieldMask';

export default function App() {
  const [value, setValue] = React.useState('');
  return (
    <div>
      <InputMask
        mask="999.999.999-99"
        label="My label"
        onChange={(ev) => setValue(ev.currentTarget.value)}
      />
      <p>Value: {value}</p>
    </div>
  );
}
