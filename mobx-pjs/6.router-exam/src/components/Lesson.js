import React, { Component } from 'react';
import lessonsData from '../static-data/lessonsData'
class Lesson extends Component {
  render() {
    const lessonId = this.props.match.params.lessonId;
    // props가 가지고있는 match객체의 pramas에서 꺼내는 객체는 route 에서 param으로 정했던 파라미터가 값으로 넘어오게된다.  
    const selectedLesson = lessonsData.find(lesson => {
      return lesson.id === Number(lessonId);
    })


    return <h2>{selectedLesson.description}</h2>
  }
}

export default Lesson;