import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from './components/nav';
import Home from './pages/home';
import BookingForm from './pages/bookingForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useReducer } from 'react';
import { fetchAPI, submitAPI } from './api/api';


const initializeTimes = () => {
  const date = new Date();
  return fetchAPI(date);
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'updateTimes':
      return fetchAPI(action.eventDate);
    default:
      return state;
  }
};

function App() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    numberOfPeople: 1,
    occasion: ''
  });

  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitForm = (data) => {
    localStorage.setItem('reservationData', JSON.stringify(data));
    submitAPI(data);
    console.log('Submitting form data:', formData);
  } 
  return (
    <ChakraProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home
            formData={formData}
              setFormData={setFormData}
              availableTimes={availableTimes}
              handleChange={handleChange}
              dispatch={dispatch}
              submitForm={submitForm}
           />} />
          <Route path="/about" />
          <Route path="/menu" />
          <Route
            path="/reservations"
            element={<BookingForm
              formData={formData}
              setFormData={setFormData}
              availableTimes={availableTimes}
              handleChange={handleChange}
              dispatch={dispatch}
              submitForm={submitForm}
            />}
          />
          <Route path="/order" />
          <Route path="/login" />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
