const database = require('./conectionDataBase');
const data = require('./dados.json');
const dbColumns = require('./arrayValuesKeysDatabase');


const fileValues = Object.values(data[0]);

let obj = {};

dbColumns.forEach((column, index) => {
    const value = fileValues[index]
    obj = { ...obj, [column]: value }

});


const date = new Date();
const currentMonth = date.getMonth() + 2;


if (currentMonth == 4) {
    // UPDATE
    const pk = obj["PRJ"];
    database.where({PRJ: pk}).update(obj).table("gestao")
    .then(obj => {
        console.log("UPDATE COM SUCESSO");
    }).catch(err => {
        console.log(err);
    });
} else {
    // INSERT
    database.insert(obj).into("gestao")
        .then(obj => {
            console.log("DADOS INSERIDO");
        }).catch(err => {
            console.log(err);
        });
}