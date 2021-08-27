import React from 'react';
import { Button } from '../../globalStyles';
import {Link } from 'react-router-dom'


export const AnswerYo = () => (
  <div>
    <h2>About answerYO- Your mental health companion</h2>
    <p>Welcome to answerYO’, it is an interactive online application to address psychosocial support and mental health issues. </p>
    <p>We provide analytical and researched information.</p>
    <p>Sign up here to know more about this</p>
    <Button> Signup here</Button>
    <Link to="./pages">boom</Link>
  </div>
)