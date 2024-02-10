import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export default function MuiCalendar() {
  const [cleared, setCleared] = useState<boolean>(false);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={'"month" and "year"'}
          views={["month", "year"]}
          slotProps={{
            field: { clearable: true, onClear: () => setCleared(true) },
          }}
        />
      </LocalizationProvider>
    </>
  );
}
