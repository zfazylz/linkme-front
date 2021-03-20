export const isResponseOK = (response) => {
  return (200 <= response.status && response.status < 300)
}

export const API_URL = "https://linkme-back.herokuapp.com/";
