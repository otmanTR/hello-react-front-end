import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greeting);

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  if (greeting) {
    return (
      <div>
        <h1>{greeting.message}</h1>
      </div>
    );
  }
  return (
    <h1>No message saved...</h1>
  );
};
export default Greeting;
