import axios from 'axios';

export default {
  user: {
    login: (credentials) =>
      axios.post('/api/authentication', {credentials}).then(res => res.data.user)
  }
};
