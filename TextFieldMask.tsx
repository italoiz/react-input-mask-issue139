import * as React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import InputMask from 'react-input-mask';

type Props = TextFieldProps & {
  mask: string;
};

export default function TextFieldMask({
  onChange,
  onBlur,
  onFocus,
  value,
  mask,
  ...restProps
}: Props) {
  return (
    <InputMask {...{ onChange, onBlur, onFocus, value, mask }}>
      {(maskProps) => <TextField {...restProps} {...maskProps} />}
    </InputMask>
  );
}
