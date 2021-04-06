import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const token = {
  setToken(token) {
    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    localStorage.setItem('timeslotToken', JSON.stringify(token));
  },
  getLocalToken() {
    return JSON.parse(localStorage.getItem('timeslotToken'));
  },
  unset() {
    localStorage.removeItem('timeslotToken');
  },
};

export const register = async credentials => {
  try {
    const response = await axios.post('/auth/register', credentials);
    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const login = async credentials => {
  try {
    const response = await axios.post('/auth/login', credentials);
    const userToken = response.data.token;

    token.setToken(userToken);

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const current = async userToken => {
  try {
    token.setToken(userToken);

    const response = await axios.get('/users/current');

    return response;
  } catch (err) {
    token.unset();
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const logout = () => {
  token.unset();
};

export const getTimeSlot = async () => {
  try {
    const response = await axios.get('/users/timeslot');

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const updateTimeSlot = async slots => {
  try {
    const response = await axios.post('/users/timeslot', slots);

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};
