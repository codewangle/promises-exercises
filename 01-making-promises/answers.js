
/**
 * 
 * EXERCISE 1
 * 
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3(){
  return Promise.resolve(3);
}
makePromiseResolveWith3().then(result => console.log(result));

/**
 * 
 * EXERCISE 2
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
  return Promise.reject("Boo!");
}
makePromiseRejectWithBoo().then(result=>console.log(result), reject=> console.log(reject));

/**
 * 
 * EXERCISE 3
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve){
  return new Promise((resolve, reject) => {
    if (itShouldResolve){
      resolve("It is true.");
    }else {
      reject("It is false");
    };
    /* If itShouldResolve is true, call resolve */
    /* If itShouldResolve is false, call reject */
  });
}
makePromiseWithConstructor(true).then(result=>console.log(result));

/**
 * 
 * EXERCISE 4
 *
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
  return new Promise((resolve, reject)=>{
    try {
      setTimeout(()=> resolve(value), delayInMs);

    }catch (error){
      reject(error);
    };

  })
  /* Return a promise that resolves with the value after delayInMs */
}
makeDelayPromise("It worked!", 600).then(result=>console.log(result), reject=>console.log(reject));


module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};