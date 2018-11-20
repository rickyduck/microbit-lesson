import React, { Component } from 'react';
import Activity from '../../organisms/Activity';

import './index.css';

const Lesson = ({ lesson }) => {
  return (
    <main>
      <h1>{lesson.title}</h1>
      <h3>{lesson.subtitle}</h3>
      <Activity activity={lesson.activity} />
    </main>
  );
};

export default Lesson;
