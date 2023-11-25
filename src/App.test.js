import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import App from './App';



test('Check page content', () => {
  render(<App></App>)
  const title = screen.getByText("Little Lemon")
  expect(title).toBeInTheDocument();
})

test('reserve a table button is working', () => {
  render(<App></App>)
  const button = screen.getByText('Reserve a table')
  expect(button).toBeInTheDocument();
  const homeTitle = screen.getByText("This Week's Specials")
  expect(homeTitle).toBeInTheDocument();
  fireEvent.click(button);
  const booking = screen.getByText('Book your Table')
  expect(booking).toBeInTheDocument();
})

test('Check Booking Form', () => {
  render(<BookingForm></BookingForm>)
  const booking = screen.getByText('Book your Table')
  const date = screen.getByText('Choose date')
  const time = screen.getByText('Choose time')
  const guests = screen.getByText('Number of guests')
  const occassion = screen.getByText('Ocassion')
  const submit = screen.getByText('Make Your Reservation')
  expect(booking).toBeInTheDocument();
  expect(date).toBeInTheDocument();
  expect(time).toBeInTheDocument();
  expect(guests).toBeInTheDocument();
  expect(occassion).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
  expect(submit).toBeDisabled();
})