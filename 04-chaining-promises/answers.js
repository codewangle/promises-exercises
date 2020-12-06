/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then((value)=> resolve(asyncTransformer(value)), error=> reject(error));
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then(value=> slowAsyncProcess(value), error=> {throw error});
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
  let cobj
  return function getUserByIdWithOrganization(userId){
    return getUserById(userId)
    .then(result=>{
      console.log(result);
      if (result=== undefined){
        throw "No such user.";
      }else{
        cobj = result;
        return getOrganizationById(result.organizationId);
      }
    })
    .then(org => {
      if (org == undefined){
        throw "No such organization.";
      }
      cobj["organization"] = org;
      console.log(cobj);
      return cobj;
    })
    .catch(error=> {
      console.log(error);
      return undefined; 
    });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};