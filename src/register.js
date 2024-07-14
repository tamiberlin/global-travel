import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  MDBForm,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTabsLink,
} from "mdb-react-ui-kit";

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [numberOfPeopleError, setNumberOfPeopleError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const users = response.data;

      const userExists = users.some(user => user.username === username || user.email === email);

      if (userExists) {
        alert('This user already exists, please login.');
        navigate('/login');
      } else {
        // Code to register the user goes here.
        // For this example, we are just logging the details.
        console.log({ username, email, password, phoneNumber, numberOfPeople });
        navigate('/home');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const validateForm = () => {
    let valid = true;

    if (username.length < 3 || username.length > 30) {
      setUsernameError('Username must be between 3 and 30 characters.');
      valid = false;
    } else {
      setUsernameError('');
    }
    if (!email.includes('@') && email.indexOf('@') < email.length -1) {
        setEmailError('email must include @ and a part after the @');
        valid = false;
    }
    else {
      setEmailError('');
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 6 characters long and contain at least one letter and one number.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (phoneNumber.length < 7 || phoneNumber.length > 10 || !/^\d+$/.test(phoneNumber)) {
      setPhoneNumberError('Phone number must be between 7 and 10 digits and contain only numbers.');
      valid = false;
    } else {
      setPhoneNumberError('');
    }

    if (numberOfPeople < 1) {
      setNumberOfPeopleError('Number of people must be at least 1.');
      valid = false;
    } else {
      setNumberOfPeopleError('');
    }

    return valid;
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 30) {
      setUsernameError('Username must be between 3 and 30 characters.');
    } else {
      setUsernameError('');
    }
  };

const handleEmailChange = (e)=>{
  setEmail(e.target.value);
    if (!e.target.value.includes('@') && e.target.value.indexOf('@') < e.target.value.length -1) {
        setEmailError('email must include @ and a part after the @');
    }
    else {
      setEmailError('');
    }
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(e.target.value)) {
      setPasswordError('Password must be at least 6 characters long and contain at least one letter and one number.');
    } else {
      setPasswordError('');
    }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    if (e.target.value.length < 7 || e.target.value.length > 10 || !/^\d+$/.test(e.target.value)) {
      setPhoneNumberError('Phone number must be between 7 and 10 digits and contain only numbers.');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleNumberOfPeopleChange = (e) => {
    setNumberOfPeople(e.target.value);
    if (e.target.value < 1) {
      setNumberOfPeopleError('Number of people must be at least 1.');
    } else {
      setNumberOfPeopleError('');
    }
  };

  return (
    <>
      <center>
        <MDBContainer fluid>
          <form onSubmit={handleSubmit}>
            <MDBRow className="d-flex justify-content-center align-items-center">
              <MDBCol lg="8">
                <MDBCard
                  className="my-5 rounded-3"
                  style={{ maxWidth: "600px" }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                    className="w-100 rounded-top"
                    alt="Sample photo"
                  />

                  <MDBCardBody className="px-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                      welcome to global travel
                    </h3>
                    <h4 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                      create an account
                    </h4>

                    <MDBInput
                      wrapperClass={`mb-4 ${usernameError ? 'is-invalid' : ''}`}
                      id="form2Example2"
                      type="text"
                      placeholder="your name"
                      value={username}
                      onChange={handleUsernameChange}
                      required
                    />
                    {usernameError && <div className="invalid-feedback">{usernameError}</div>}

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass={ `mb-4 ${emailError ? 'is-invalid' : ''}`}
                          id="form1Example1"
                          placeholder="your email address"
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          required
                        />
                        {emailError && <div className="invalid-feedback">{emailError}</div>}
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass={`mb-4 ${passwordError ? 'is-invalid' : ''}`}
                          id="form2Example1"
                          placeholder="create a password"
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                          required
                        />
                        {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass={`mb-4 ${phoneNumberError ? 'is-invalid' : ''}`}
                          id="form2Example1"
                          placeholder="your phone number"
                          type="text"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          required
                        />
                        {phoneNumberError && <div className="invalid-feedback">{phoneNumberError}</div>}
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass={`mb-4 ${numberOfPeopleError ? 'is-invalid' : ''}`}
                          id="form2Example1"
                          placeholder="number of people"
                          type="number"
                          value={numberOfPeople}
                          onChange={handleNumberOfPeopleChange}
                          required
                          min="1"
                        />
                        {numberOfPeopleError && <div className="invalid-feedback">{numberOfPeopleError}</div>}
                      </MDBCol>
                    </MDBRow>

                    <MDBTabsLink href="./login">
                      already have an account? login now
                    </MDBTabsLink>
                    <MDBBtn color="light" rippleColor="dark" type="submit">
                      register
                    </MDBBtn>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBContainer>
      </center>

      <style>{`
        .invalid-feedback {
          display: block;
        }

        .is-invalid .form-control {
          border-color: #dc3545;
        }

        .is-invalid .form-control:focus {
          box-shadow: none;
        }

        .is-invalid .form-control::placeholder {
          color: #dc3545;
        }
      `}</style>
    </>
  );
}

export default Register;
