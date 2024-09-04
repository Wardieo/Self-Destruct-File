import { useState, useRef } from "react";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { IoClose } from "react-icons/io5";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dayjs from 'dayjs'; // Import Day.js for date handling

// Custom theme for DateTimePicker
const customTheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#ffffff", // White text in input fields
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff", // White label text
          "&.Mui-focused": {
            color: "#ffffff", // Keep label white when focused
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#ffffff", // White outline
        },
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff", // White border on hover
          },
        },
      },
    },
  },
});

function App() {
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs()); 
  const [isPublic, setIsPublic] = useState(false)
  const [isPrivate, setIsPrivate] = useState(false)
  const fileInputRef = useRef(null); 

  const handleFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      setModal(true);
      setFile(event.target.files[0].name);
    }
  };

  const removeFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; 
    }
    setModal(false); 
  };

  // Handle date change from DateTimePicker
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate); // Update selected date in state
    console.log("Selected date: ", newDate.format('YYYY-MM-DD HH:mm')); // Log selected date
  };

  return (
    <div className="h-screen w-screen bg-[#0F0F0F] text-white">
      <div className="max-w-[1740px] mx-auto h-screen overflow-hidden relative">
        <Navbar modal={modal} />
        <Hero modal={modal} />
        <Button modal={modal} handleFileChange={handleFile} fileInputRef={fileInputRef} />
        {modal && (
          <div className="bg-[#434343] absolute top-48 left-[345px] border border-white rounded-lg h-[450px] w-[60%]">
            <div className="flex justify-between items-center mx-10 my-10">
              <h1 className="font-medium text-xl">File Info</h1>
              <IoClose
                className="text-red-500 text-xl hover:cursor-pointer"
                onClick={removeFile}
              />
            </div>
            <div className="m-10 flex items-center justify-between">
              <div className="text-sm flex flex-col gap-2">
                <h1 className="font-semibold ">File name</h1>
                <p className="">{file}</p>
              </div>
              <div className="text-sm flex flex-col gap-2 mr-36">
                <h1 className="font-semibold ">File privacy</h1>
                <div className="flex items-center gap-10">
                  <div className="flex gap-2">
                    <input type="checkbox" onClick={() => setIsPublic(!isPublic)} checked={isPublic ? true : false} disabled={isPrivate === true ? true : false} />
                    <label>Shareable by Others</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" onClick={() => setIsPrivate(!isPrivate)} checked={isPrivate ? true : false} disabled={isPublic=== true ? true : false}/>
                    <label>Private</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white mx-10">
              <h1 className="mb-2 font-semibold">Date/Time Expiration</h1>
              <ThemeProvider theme={customTheme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Pick a Date for Expiration"
                    inputProps={{ style: { color: "#ffffff" } }}
                    value={selectedDate} 
                    onChange={handleDateChange} 
                  />
                </LocalizationProvider>
              </ThemeProvider>
              <p className="mt-4">
                Expiration Date: {selectedDate.format('MMM. DD, YYYY HH:mm')}
              </p> 
            </div>
            <div className="mx-auto flex items-center text-center justify-center mt-10 ">
              <button className="bg-[#69BD71] px-10 py-3 shadow-xl rounded-full text-black hover:translate-y-1 duration-300 hover:scale-90">Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
