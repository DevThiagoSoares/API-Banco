const database = require('./conectionDataBase');
const data = require('./dados.json');
const dbColumns = require('./arrayValuesKeysDatabase');


const fileValues = Object.values(data[0]);

let obj = {};

dbColumns.forEach((column, index) => {
    const value = fileValues[index]
    obj = { ...obj, [column]: value }

});
a
const date = new Date();
const currentMonth = date.getMonth() + 1;


if (currentMonth != obj["DATE"]) {
    // INSERT
    obj["DATE"] = currentMonth;
    database.insert(obj).into("gestao_2")
    .then(Obj => {
        console.log("DADOS INSERIDO");
    }).catch(err => {
        console.log(err);
    });
} else {
    // UPDATE
    const titleProject = obj["PRJ"];
    database.where({PRJ: titleProject}).update(obj).table("gestao_2")
    .then(Obj => {
        console.log("UPDATE COM SUCESSO");
    }).catch(err => {
        console.log(err);
    });

}
// 
console.log("currentMonth",currentMonth, "/ DATE", obj["DATE"])


// validar o relatorio mesnsal no banco
// verificar maneira de usar varias pastar na aplicação

