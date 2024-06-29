/**
 * * 24.06.30 (Sun) 정호연
 * @param {function} callback
 */
const fetchData = (callback) => {
  console.log('Data fetched!');
  callback();
};

const processData = () => {
  setTimeout(() => {
    console.log('processing data...');
  }, 2000);
};

fetchData(processData);
