export const PrettifyJSON = () => {
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      appendData(data);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};

const findClassInfo = () => {
  console.log("hello world");
};
