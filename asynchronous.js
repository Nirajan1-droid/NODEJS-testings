function doAsyncTask(callback) {
    setTimeout(() => {
      callback('Done!');
    }
    , 1);
  }
  
  console.log('Starting task 1');
  doAsyncTask((result) => {
    console.log(result);
  });

  console.log('Continuing with other tasks...');