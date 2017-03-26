
export const setName = (name) => {
  return fetch(`/people.json`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name})
  }).then((response) => {
    return response.json();
  });
}

export const people = () => {
  return fetch(`/people.json`, {
    accept: 'application/json',
  }).then((response) => {
    return response.json();
  })
}

export const sendMessage = (name, message) => {
  return fetch(`/messages.json`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, message})
  }).then((response) => {
    return response.json();
  });
}

export const messages = () => {
  return fetch(`/messages.json`, {
    accept: 'application/json',
  }).then((response) => {
    return response.json();
  })
}

