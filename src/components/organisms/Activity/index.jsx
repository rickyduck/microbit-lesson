import React, { Component } from 'react';
import Step from '../../molecules/ActivityStep';
import Select from '../../atoms/Select';

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = { activeStep: 0 };
    this.onSelect = this.onSelect.bind(this);
    this.renderPrevButton = this.renderPrevButton.bind(this);
    this.renderNextButton = this.renderNextButton.bind(this);
  }
  onSelect(event) {
    this.setState({ activeStep: Number(event.currentTarget.value) });
  }
  renderPrevButton() {
    return (
      this.state.activeStep > 0 && (
        <button
          onClick={() => {
            this.setState({ activeStep: this.state.activeStep - 1 });
          }}
        >
          Previous
        </button>
      )
    );
  }
  renderNextButton() {
    return (
      this.state.activeStep < this.props.activity.steps.length - 1 && (
        <button
          onClick={() => {
            this.setState({ activeStep: this.state.activeStep + 1 });
          }}
        >
          Next
        </button>
      )
    );
  }
  render() {
    const activitySteps = this.props.activity.steps;
    const selectOptions = activitySteps.map((step, i) => ({
      value: i,
      label: `Step ${i + 1}`
    }));
    return (
      <section className="activity">
        <Select
          onChange={this.onSelect}
          options={selectOptions}
          selected={this.state.activeStep}
        />
        <Step step={this.props.activity.steps[this.state.activeStep]} />
        <div>
          {this.renderPrevButton()}
          {this.renderNextButton()}
        </div>
      </section>
    );
  }
}
