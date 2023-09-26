export function getResponseFromAPI() {
  // Make an asynchronous call to an API
  return new Promise((resolve, reject) => {
    // ...
    resolve({
      status: 200,
      body: "photo-profile-1",
    });
  });
}
