import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const { email, message } = formEl.elements;
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ email: email.value, message: message.value })
    );
  }),
  500
);

formEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log({email: email.value, message: message.value});
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

const populateTextarea = () => {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    const { email: savedEm = '', message: savedMes = '' } =
      JSON.parse(savedMessage);
    email.value = savedEm;
    message.value = savedMes;
  }
};

populateTextarea();
