import { IDateRange } from "../types/DateRange";
import BasicDatePicker from "./BasicDatePicker";
import Button from '@mui/material/Button';
import { useState } from "react";

interface IProps{
    dateRange: IDateRange,
    onClick: (dateRange: IDateRange) => void
}
function DateRangePicker(props: IProps): JSX.Element {
    const [dateRange, setDateRange] = useState<IDateRange>(props.dateRange);
    const setStartDate = (newStartDate: Date) => {
        const newDateRange = {startDate: newStartDate, endDate: dateRange.endDate}
        setDateRange(newDateRange);
    }
    const setEndDate = (newEndDate: Date) => {
        const newDateRange = {startDate: dateRange.startDate, endDate: newEndDate}
        setDateRange(newDateRange);
    }

    return (
        <div>
            <BasicDatePicker label="Start Date" defaultDate={dateRange.startDate} onChange={(newStartDate) => setStartDate(newStartDate)}/>
            <span>to</span>
            <BasicDatePicker label="End Date" defaultDate={dateRange.endDate} onChange={(newEndDate) => setEndDate(newEndDate)}/>
            <Button variant="contained" onClick={e => props.onClick(dateRange)}>Update</Button>
        </div>
    )};
export default DateRangePicker;