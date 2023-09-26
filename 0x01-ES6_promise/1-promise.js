export function getFullResponseFromAPI(success) {
  // Make a promise based on the success parameter
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: "Success",
      });
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}
