const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (3000)) + 1000;
  console.log(delay);
        setTimeout(() => {
            if (delay <= 3000) {
                resolve(`La página respondió ${url}`)
            } else {
        	    reject(`Connection Timeout for ${url}.`);
            }
        }, delay)
    })
}

function conPromise(){
    console.log("TESTING PROMISE")
    fakeRequestPromise('promise.com/page1')
    .then((r) => {
        console.log(r)
        fakeRequestPromise('promise.com/page2')
            .then((r) => {
                console.log(r)
                fakeRequestPromise('promise.com/page3')
                    .then((r) => {
                        console.log(r)
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            })
            .catch((e) => {
                console.log(e)
            })
    })
    .catch((e) => {
        console.log(e)
    })
}

/*function conPromiseV2(){
    console.log("TESTING PROMISE2")
fakeRequestPromise('random.com/api/page1')
    .then((data) => {
        console.log(data)
        return fakeRequestPromise('random.com/api/page2')
    })
    .then((data) => {
        console.log(data)
        return fakeRequestPromise('random.com/api/page3')
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
}

new Promise((resolve,reject)=>{
    resolve();
})


const dogRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand <= 0.4) {
                resolve('Los perros no pueden sudar, por eso sacan su lengua al cansarse');
            }else if (rand>0.4 && rand <= 0.7) {
                resolve('Los cachorros nacen sordos');
            }
            reject('La página no funcionó!');
        }, 1000)
    })
}

dogRequest('/dogs/1')
    .then((data) => {
        console.log("R:"+data)
    })
    .catch((err) => {
        console.log("E:", err)
    })


dogRequest('/cats/1')
    .then((data) => {
        console.log("No tenemos información sobre gatos")
    })
    .catch((err) => {
        console.log(err)
    })

let miH1=document.querySelector('h1');
let arcoiris = ["red","orange","yellow","green","blue","indigo","violet"];

const delayedColorChange = (colIndex, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            miH1.style.color=arcoiris[colIndex];
            resolve();
        }, delay)
    })
}

delayedColorChange(0, 1000)
    .then(() => delayedColorChange(1, 1000))
    .then(() => delayedColorChange(2, 1000))
    .then(() => delayedColorChange(3, 1000))
    .then(() => delayedColorChange(4, 1000))
    .then(() => delayedColorChange(5, 1000))
    .then(() => delayedColorChange(6, 1000))

async function hola(){
    return 'Hola a todos';
    throw "Fallé, mejor me voy";
}


async function adios(){
    throw "Fallé, mejor me voy";
    return 'Hola a todos';
}


hola()
    .then(data => {
        console.log("R:", data)
    })
    .catch(err => {
        console.log("E:",err)
    })


adios()
    .then(data => {
        console.log("R:", data)
    })
    .catch(err => {
        console.log("E:",err)
    })*/

//---------------------------------------------------------------//
const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "1234") return `WELCOME! ${username}`;
  throw "Invalid Password";
};

login('oscar', '1234')
    .then(msg => {
        console.log("Bienvenido!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })

let miH1=document.querySelector('h1');
let arcoiris = ["red","orange","yellow","green","blue","indigo","violet"];

const delayedColorChange = (colIndex, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            miH1.style.color=arcoiris[colIndex];
            resolve();
        }, delay)
    })
}

const delayedColorChangeAwait = (colIndex, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            colIndex=colIndex%arcoiris.length;
            miH1.style.color = arcoiris[colIndex];
            resolve();
        }, delay);
    });
};


async function rainbow() {
    for(i=0;i<30;i++)
    {
        await delayedColorChangeAwait(i, 1000);
    }    
    return "ALL DONE!";
}

const req = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
      if (delay > 3000) {
        reject(`Connection Timeout ${url}`);
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};


async function threeReq() {
    try {
        let data1 = await req("/page1");
        console.log(data1);
        let data2 = await req("/page2");
        console.log(data2);
        let data3 = await req("/page3");
        console.log(data3);
    } catch (e) {
        console.log("ERROR:", e);
    }
}


threeReq();

