import { Button } from '@mui/material';
import React from 'react';
import shuffle from '../utils/shuffle';
import Child from './Child';
import { useSelector, useDispatch } from "react-redux";
import {
  shuffleAction,
  resetAction,
} from "../redux/actions/index";
import './parent.css'

const Parent = (props) => {
  const initialArray = [1, 2, 3, 4, 5, 6];
  const shuffledReducerState = useSelector((state) => state.shuffleReducer);
  console.log("shuffledReducerState", shuffledReducerState.shuffledValues);
  const dispatch = useDispatch();

  const onResetButtonHandler = () => {
    dispatch(resetAction(initialArray));
  }

  const onShuffleButtonHandler = () => {
    const shuffledArray = shuffle([...initialArray]);
    dispatch(shuffleAction(shuffledArray));
  }

  return (
    <>
      <h1>Parent Component</h1>
      <div className='parent-class'>
        <div className='row'>
          <div className='column'>
            {shuffledReducerState.shuffledValues[0]}
          </div>
          <div className='column'>
            {shuffledReducerState.shuffledValues[1]}
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            {shuffledReducerState.shuffledValues[2]}
          </div>
          <div className='column'>
            {shuffledReducerState.shuffledValues[3]}
          </div>
        </div>
      </div>
      <Button onClick={onShuffleButtonHandler}>Shuffle</Button>
      <Button onClick={onResetButtonHandler}>Reset</Button>
      <Child remainingValues={shuffledReducerState.remainingValues} />
    </>
  )
}

export default Parent;