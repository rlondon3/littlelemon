import React from 'react';
import {
  FormControl,
  FormLabel,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  Input,
  Button,
  Box,
  Select,
  FormErrorMessage,
} from '@chakra-ui/react';
import { fetchAPI } from '../api/api';
import { parse } from 'date-fns';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const BookingForm = ({ formData, availableTimes, handleChange, dispatch, submitForm }) => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    numberOfPeople: Yup.number().min(1).max(10).required('Number of people is required'),
    occasion: Yup.string().required('Occasion is required'),
  });

  return (
    <Box m={4}>
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        submitForm(values);
        actions.setSubmitting(false);
      }}
      validateOnBlur
      validateOnChange
    >
      {({ setFieldValue, handleSubmit, isSubmitting }) => (
        <Form data-testid='form-element' onSubmit={handleSubmit}>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name} mb={4}>
                <FormLabel htmlFor='name for the reservation'>Reservation Name</FormLabel>
                <Input
                  data-testid="name-input"
                  placeholder="Name"
                  {...field}
                  isRequired
                />
                <FormErrorMessage data-testid="name-error">{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="date">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.date && form.touched.date} mb={4}>
                <FormLabel htmlFor='date'>Date</FormLabel>
                <Input
                  data-testid="date-input"
                  type="date"
                  placeholder="Date"
                  {...field}
                  isRequired
                  onChange={(e) => {
                    field.onChange(e);
                    const date = parse(e.target.value, 'yyyy-MM-dd', new Date());
                    dispatch({ type: 'updateTimes', date: fetchAPI(date), eventDate: date });
                  }}
                />
                <FormErrorMessage data-testid="date-error">{form.errors.date}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="time">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.time && form.touched.time} mb={4}>
                <FormLabel htmlFor='time'>Time</FormLabel>
                <Select
                  data-testid="time-select"
                  placeholder="Select option"
                  {...field}
                >
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage data-testid="time-error">{form.errors.time}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="numberOfPeople">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.numberOfPeople && form.touched.numberOfPeople} mb={4}>
                <FormLabel htmlFor='number of people'>Number of People</FormLabel>
                <NumberInput
                  data-testid="number-input"
                  max={10}
                  min={1}
                  value={field.value}
                  onChange={(valueString) => setFieldValue('numberOfPeople', valueString)}
                  isRequired
                >
                  <NumberInputField {...field} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>{form.errors.numberOfPeople}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="occasion">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.occasion && form.touched.occasion} mb={4}>
                <FormLabel htmlFor='describe occasion'>Occasion</FormLabel>
                <Input
                  data-testid="occasion-input"
                  placeholder="Occasion"
                  {...field}
                  isRequired
                />
                <FormErrorMessage data-testid="occasion-error">{form.errors.occasion}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Box display="flex" justifyContent="flex-end">
            <Button
              bg="#F4CE14"
              size="md"
              type="submit"
              isLoading={isSubmitting}
              data-testid="submit-button"
              aria-label="Submit reservation form"
            >
              Make Reservation
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
    </Box>
  );
};

export default BookingForm;
