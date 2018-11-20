import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchLessonRequested } from '../../../redux/lesson/actions';
import Lesson from './component';

class LessonContainer extends Component {
  componentDidMount() {
    this.props.fetchLesson();
  }
  render() {
    return (
      <div>{this.props.lesson && <Lesson lesson={this.props.lesson} />}</div>
    );
  }
}

const mapStateToProps = state => ({
  lesson: state.lesson.lesson
});

const mapDispatchToProps = dispatch => ({
  fetchLesson: () => dispatch(fetchLessonRequested())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LessonContainer);
