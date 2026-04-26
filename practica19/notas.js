let mydata;
fetch("https://randomuser.me/api/?results=5")
  .then((res) => {
    console.log("Datos de respuesta:", res);
    return res.json();
  })
  .then((data) => {
    console.log("Datos obtenidos:");
    console.log(data);
    mydata=data;
    console.log(mydata.results[2].location.state);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

