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
const currentMonth = date.getMonth() + 1;


if (currentMonth == 4) {
    // UPDATE
    const pk = obj["PRJ"];
    obj["date"]=currentMonth;
    database.where({PRJ: pk}).update(obj).table("gestao_2")
    .then(obj => {
        console.log("UPDATE COM SUCESSO");
    }).catch(err => {
        console.log(err);
    });
} else {
    // INSERT
    database.insert(obj).into("gestao_2")
        .then(obj => {
            console.log("DADOS INSERIDO");
        }).catch(err => {
            console.log(err);
        });
}