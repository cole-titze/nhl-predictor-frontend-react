import * as React from 'react';
import {useEffect} from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const dayjs = require('dayjs')

interface IProps{
    label: string
    defaultDate: Date,
    onChange: (date: Date) => void
}
export default function BasicDatePicker(props: IProps) {
  const [date, setDate] = React.useState<Dayjs | null>(new dayjs(props.defaultDate));

  useEffect( () => {
    props.onChange(date?.toDate()??new Date());
  }, [date]);
  return (
    <span className="input-spacing">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="input-spacing"
          label={props.label}
          value={date}
          onChange={(newDate) => {setDate(newDate);}}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </span>
  );
}