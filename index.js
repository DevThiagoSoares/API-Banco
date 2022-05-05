const database = require('./conectionDataBase');
const data = require('./dados.json');
const dbColumns = require('./arrayValuesKeysDatabase');
const parserXLSMtoJson = require('./parserXLSMtoJson');

const fileValues = Object.values(data[0]);

let obj = {};

dbColumns.forEach((column, index) => {
    const value = fileValues[index]
    obj = { ...obj, [column]: value }
});


date = new Date();
const currentDay = date.getDay() + 1;
const currentMonth = date.getMonth() + 1;

obj["DATE"] = currentMonth;
console.log(obj["DATE"])
const titleProject = obj["PRJ"];
// console.log(obj["PRJ"])
// console.log(obj)


database.select().where({ prj: obj["PRJ"], date: obj["DATE"] }).table("gestao_2")
    .then(abc => {
        console.log("aqui", abc)

        if (abc.length === 0) {
            console.log(abc.length)
            database.insert(obj).into("gestao_2")
                .then(() => {
                    console.log("DADOS INSERIDO");
                }).catch(err => {
                    console.log(err);
                });
        } else {
            console.log("caiu no else")
            database.where({ prj: obj["PRJ"], date: obj["DATE"] }).update(obj).into("gestao_2")
                .then(() => {
                    console.log(abc);
                    console.log("DADOS ATUALIZADO");
                }).catch(err => {
                    console.log(err);
                });
        }
    }).catch(err => {
        console.log(err);
    });