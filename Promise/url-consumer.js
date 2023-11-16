function consumeService(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Using the function to consume the service from "https://jsonplaceholder.typicode.com/users"
const serviceURL = 'https://jsonplaceholder.typicode.com/users';

consumeService(serviceURL)
  .then((data) => {
    console.log('Service consumed successfully:');
    console.log(data);
  })
  .catch((error) => {
    console.error('Error consuming the service:', error);
  });
