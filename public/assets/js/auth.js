const signUpForm = $('#signup-form');
const loginForm = $('#login-form');
const logoutBtn = $('#logout-btn');

const handleSignUp = async (event) => {
  event.preventDefault();

  const username = $('#username').val();
  const email = $('#email').val();
  const password = $('#password').val();
  const aboutme = $('#aboutme').val();

  const payload = JSON.stringify({
    username,
    email,
    password,
    aboutme,
  });

  const response = await fetch('/api/accounts/signup', {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    window.location.replace('/profile');
  } else {
    alert('Failed to sign up');
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $('#email').val();
  const password = $('#password').val();

  const payload = JSON.stringify({
    email,
    password,
  });

  const response = await fetch('/api/accounts/login', {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    window.location.replace('/profile');
  } else {
    alert('Failed to login');
  }
};

const handleLogout = async () => {
  const response = await fetch("/api/accounts/logout",{
    method: "POST",
  });

  if (response.ok) {
    window.location.replace('/');
  } else {
    alert('Failed to logout');
  }
};

logoutBtn.on('click', handleLogout);
loginForm.on('submit', handleLogin);
signUpForm.on('submit', handleSignUp);
