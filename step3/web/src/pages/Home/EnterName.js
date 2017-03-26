import React, { Component } from 'react';

import { 
  PageHeader,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from 'react-bootstrap';

class EnterName extends Component {

  state = {
    value: '',
    name_error: '',
    touched: false
  }

  getValidationState = () => {
    if(this.state.touched && this.state.value.length === 0) {
      return 'error'
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault();
    if(this.state.value.length === 0) {
      this.setState({touched: true, name_error: 'Name cannot be blank'});
    } else {
      this.props.onEnter(this.state.value);
    }
  }

  render() {
    return (
      <div style={{padding: 40, paddingTop: 0}}>
        <PageHeader>Enter Name</PageHeader>

        <form>

          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()} >
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>{this.state.name_error}</HelpBlock>
          </FormGroup>

          <Button type="submit" onClick={this.submitForm}>
            Enter
          </Button>

        </form>

      </div>
    )
  }

}

export default EnterName;
