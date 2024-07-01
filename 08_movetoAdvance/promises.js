const promiseONE = new Promise(function (resolve, reject) {
    //DO an async task
    // DB calls , cryptography , network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)

})
// .then() is connected to resolve .
promiseONE.then(function () {
    console.log("promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})


// promise for data passing .
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "chai", email: "chai@example.com" })
    }, 1000);
})
promiseThree.then((user) => {
    console.log(user);
})

//

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Aastha", password: "123" })
        }
        else {
            reject('ERROR: something went wrong');
        }
    }, 1000)
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch((error) => {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected!"))


// doing promises using async await syntax.

const PromiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Kaju", password: "123" })
        }
        else {
            reject('ERROR: something went wrong');
        }
    }, 1000)
});
async function consumePromiseFive() {
    try {
        const response = await PromiseFive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }

}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     }
//     catch (error) {
//         console.log("E:", error);
//     }
// }
//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.