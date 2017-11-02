// ./components/UserForm.js

import React from 'react';
import { Control, Form, Errors } from 'react-redux-form';

class UserForm extends React.Component {
  handleSubmit(user) {
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
    console.log('submit made - ', user)
  }
  render() {
    return (
      <Form
        model="sample"
        onSubmit={(user) => this.handleSubmit(user)}
      >
        <Control.text onChange={(e) => console.log(e.target.value)} validators={{ required: (val) => val && val.length, }} model="sample.one" id="3131" />
        <Control.text model="sample.two" id="32131" />
        <Errors
          model="sample.one"
          show="touched"
          messages={{
            required: 'Required'
          }}
        />
        <button type="submit">
          Finish registration!
        </button>
      </Form>
    );
  }
}

export default UserForm;