import React from 'react';

export default function ContactPage() {
  return (
    <div>
      <form action="/my-handling-form-page" method="post">
        <div>
          <label name="name">Name:</label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div>
          <label name="mail">E-mail:</label>
          <input type="email" id="mail" name="user_mail" />
        </div>
        <div>
          <label name="msg">Message:</label>
          <textarea id="msg" name="user_message"></textarea>
        </div>
      </form>
    </div>
  );
}
