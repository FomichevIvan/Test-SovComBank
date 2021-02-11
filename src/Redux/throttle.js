let throttle = (callback,waitTime) => {
  var wait = false;
  return () => {
    if (!wait) {
      callback();
      wait = true;
      // we will be able to invoke the callback again after a set amount of time
      setTimeout(()=> {
        wait = false;
      }, waitTime)
    }
  }
}

export const throttledFunc = throttle(()=> {
  console.log('Throttle API Call')
},2000)
