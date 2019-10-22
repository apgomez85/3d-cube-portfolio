import React from 'react';
import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const style = {
  display: 'flex',
  color: '#6A6C6E',
  fontFamily: 'ostrich-sans-light',
  lineHeight: '1.25',
  alignItems: 'center',
  justifyItems: 'center',
  marginLeft: '60px',
  marginTop: '50px',
  width: '65vw'
};

export default function ContactPage() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    body: ''
  });

  const handleSubmitEmail = e => {
    e.preventDefault();
    console.log(values.name, values.email, values.body);
  };
  const handleChange = (name, email, body) => event => {
    setValues({
      ...values,
      [name]: event.target.value,
      [email]: event.target.value,
      [body]: event.target.value
    });
  };

  return (
    <FormControl style={style}>
      <h2>Contact</h2>
      <TextField
        id="outlined-name"
        label="Name"
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-email"
        label="Email"
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-body"
        label="Body"
        value={values.body}
        onChange={handleChange('body')}
        margin="normal"
        variant="outlined"
        fullWidth
        multiline="true"
        rows={5}
      />

      <Button
        onClick={handleSubmitEmail}
        variant="outlined"
        color="primary"
        size="medium"
      >
        Send
      </Button>
    </FormControl>
  );
}
