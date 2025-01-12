import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Navber/Navber';

class PatientLogin extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = { email: this.state.email, password: this.state.password };

    axios
      .post('/patient/login', user)
      .then((response) => {
        if (response.data === 'Email not found') return;
        sessionStorage.setItem('usertoken', response.data);
        sessionStorage.setItem('userData', JSON.stringify(user));
        this.props.history.push('/patient/login/patient_home');
      })
      .catch(console.error);
  };

  render() {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex items-center justify-center py-10">
          <form
            className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            onSubmit={this.onSubmit}
          >
            <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
              Patient Login
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PatientLogin;
