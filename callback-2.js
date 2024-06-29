const fetchData = (callback) => {
  setTimeout(() => {
    console.log('Data fetched!');
    callback();
  }, 2000);
};

const processData = () => {
  console.log('processing data...');
};

fetchData(processData);
