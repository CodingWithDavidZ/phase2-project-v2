import React from 'react';

function Contact() {
  const linkedin = (
    <a
      href='https://linkedin.com/in/david-zombar-864794102'
      target='_blank'
      rel='noopener noreferrer'
    >
      LinkedIn
    </a>
  );
  const email = <a href='mailto: CodingWithDavidZ@gmail.com'>Email Me</a>;
  const blog = (
    <a
      href='https://medium.com/@CodingWithDavidZ'
      target='_blank'
      rel='noopener noreferrer'
    >
      Blog
    </a>
  );
  return (
    // <Route exact path={'/contact'}>
    <div className='contact'>
      <ul className='links'>{email}</ul>
      <ul className='links'>{linkedin}</ul>
      <ul className='links'>{blog}</ul>
    </div>
    // </Route>
  );
}

export default Contact;
