import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const style = {
  display: "flex",
  color: "#6A6C6E",
  fontFamily: "Roboto-light",
  lineHeight: "1.25",
  alignItems: "center",
  justifyItems: "center",
  marginLeft: "60px",
  marginTop: "50px",
  width: "65vw"
};

export default function ContactPage() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    body: ""
  });

  const handleSubmitEmail = e => {
    e.preventDefault();

    var templateParams = {
      name: values.name,
      email: values.email,
      body: values.body
    };

    window.emailjs
      .send("default_service", "portfolio_template_contact", templateParams)
      .then(
        function(response) {
          document.getElementById("sent-email").innerHTML =
            "<span style='font-size:30px'>Message Sent. Thank you!</span>";

          setTimeout(function() {
            document.getElementById("sent-email").innerHTML = "";
          }, 5000);

          setValues({
            ...values,
            name: "",
            email: "",
            body: ""
          });
        },
        function(error) {
          document.getElementById("sent-email").innerHTML =
            "<span style='font-size:30px'>Sorry, there has been an error sending your message.</span>";
        }
      );
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
    <ValidatorForm onSubmit={handleSubmitEmail}>
      <FormControl style={style}>
        <h2 id="title" style={{ marginBottom: 0 }}>
          Contact
        </h2>
        <p id="sent-email"></p>
        <TextValidator
          id="outlined-name"
          label="Name"
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
          fullWidth
          validators={["required"]}
          errorMessages={["This field is required"]}
        />
        <TextValidator
          id="outlined-email"
          label="Email"
          value={values.email}
          onChange={handleChange("email")}
          margin="normal"
          variant="outlined"
          fullWidth
          validators={["required", "isEmail"]}
          errorMessages={["This field is required", "email is not valid"]}
        />
        <TextValidator
          id="outlined-body"
          label="Body"
          value={values.body}
          onChange={handleChange("body")}
          margin="normal"
          variant="outlined"
          fullWidth
          multiline="true"
          rows={5}
          validators={["required"]}
          errorMessages={["This field is required"]}
        />

        <Button type="submit" variant="outlined" color="primary" size="medium">
          Send
        </Button>
      </FormControl>
    </ValidatorForm>
  );
}
