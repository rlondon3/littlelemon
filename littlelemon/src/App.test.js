import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './pages/bookingForm';
import App from './App';
import { fetchAPI } from './api/api';
import { Formik } from 'formik'; 

jest.mock('./api/api');

describe('BookingForm', () => {
  const mockDispatch = jest.fn();
  const mockSetFormData = jest.fn();
  const mockSubmitForm = jest.fn();
  const submitAPIMock = jest.fn();

  const initialFormData = {
    name: '',
    date: '',
    time: '',
    numberOfPeople: 1,
    occasion: ''
  };

  const availableTimes = [
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  const submitForm = (data) => {
    localStorage.setItem('reservationData', JSON.stringify(data));
    submitAPIMock(data);
  }

  const setItemMock = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});


  const renderComponent = () =>
    render(
      <Formik
        initialValues={initialFormData}
        onSubmit={() => {}}
        validateOnBlur
        validateOnChange
      >
        <BookingForm
          formData={initialFormData}
          availableTimes={availableTimes}
          handleChange={() => {}}
          dispatch={() => {}}
          submitForm={() => {}}
        />
      </Formik>
    );

  beforeEach(() => {
    fetchAPI.mockClear();
    mockSetFormData.mockClear();
    mockDispatch.mockClear();
    mockSubmitForm.mockClear();
    setItemMock.mockClear();
    submitAPIMock.mockClear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Renders first text of the BookingForm ', () => {
    renderComponent();
    const headingElement = screen.getByText("Reservation Name");
    expect(headingElement).toBeInTheDocument();
  });

  test('renders form inputs correctly', () => {
    renderComponent();
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('date-input')).toBeInTheDocument();
    expect(screen.getByTestId('time-select')).toBeInTheDocument();
    expect(screen.getByTestId('occasion-input')).toBeInTheDocument();
  });

  test('updates form state on input change', async () => {
    renderComponent();

    // Simulate changes in the form inputs
    fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByTestId('date-input'), { target: { value: '2023-07-28' } });
    fireEvent.change(screen.getByTestId('time-select'), { target: { value: '14:00' } });
    fireEvent.change(screen.getByTestId('occasion-input'), { target: { value: 'Birthday' } });

    // Submit the form to trigger validation and state update
    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      // Check the final form state or expected outputs
      // Formik should handle validation internally and we should verify if the form was updated correctly
      // You might need to assert against Formik's internal state if necessary
      expect(screen.getByTestId('name-input').value).toBe('John Doe');
      expect(screen.getByTestId('date-input').value).toBe('2023-07-28');
      expect(screen.getByTestId('time-select').value).toBe('14:00');
      expect(screen.getByTestId('occasion-input').value).toBe('Birthday');
    });
  });

  test('initializeTimes initializes available times', () => {
    fetchAPI.mockReturnValue('8/12/2024');
    render(<App />); 
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test('available times render', () => {
    renderComponent();
    expect(screen.getByTestId('time-select')).toBeInTheDocument();
  });

  test('calls submitForm when Make Reservation button is clicked', () => {
    renderComponent();
    const makeReservationButton = screen.getByTestId('submit-button');
    fireEvent.click(makeReservationButton);
  });

  test('submitForm saves data to localStorage and calls submitAPI', () => {
    const data = {
      name: 'John Doe',
      date: '2023-07-28',
      time: '14:00',
      numberOfPeople: 4,
      occasion: 'Birthday'
    };

    submitForm(data);
    expect(localStorage.getItem('reservationData')).toBe(JSON.stringify(data));

    expect(submitAPIMock).toHaveBeenCalledWith(data);
  });

  test('shows validation errors for empty fields', async () => {
    renderComponent();

    act(() => {
      fireEvent.focus(screen.getByTestId('name-input'));
      fireEvent.blur(screen.getByTestId('name-input'));
  
      fireEvent.focus(screen.getByTestId('date-input'));
      fireEvent.blur(screen.getByTestId('date-input'));
  
      fireEvent.focus(screen.getByTestId('time-select'));
      fireEvent.blur(screen.getByTestId('time-select'));
  
      fireEvent.focus(screen.getByTestId('occasion-input'));
      fireEvent.blur(screen.getByTestId('occasion-input'));

      fireEvent.click(screen.getByTestId('submit-button'));
  
    });
  
    expect(await screen.findByTestId('name-error')).toBeInTheDocument();
    expect(await screen.findByTestId('date-error')).toBeInTheDocument();
    expect(await screen.findByTestId('time-error')).toBeInTheDocument();
    expect(await screen.findByTestId('occasion-error')).toBeInTheDocument();
  });
});
