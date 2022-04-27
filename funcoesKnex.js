// INSERT
// database.insert(obj).into("gestao")
//     .then(obj => {
//         console.log("DADOS INSERIDO");
//     }).catch(err => {
//         console.log(err);
//     });

// UPDATE
// const pk = obj["PRJ"];
// database.where({ PRJ: pk }).update(obj).table("gestao")
//     .then(obj => {
//         console.log("UPDATE COM SUCESSO");
//     }).catch(err => {
//         console.log(err);
//     });

// SELECT
// database.select().table("test")
    // .then(data => {
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // });

// NESTED QUERY
// database.insert({name: "marcos", number: 123, date: 20210328}).into("test")
//     .then(data => {
//         database.select().table("test")
//             .then(data => {
//                 console.log(data);
//             }).catch(err => {
//                 console.log(err);
//             });
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });

// WHERE
// database.select()
//     .where({name: "Thiago"}).table("test")
//         .then(data => {
//             console.log(data);
//         }).catch(err => {
//             console.log(err);
//         });;

// RAW
// database.raw("SELECT * FROM test")
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });;

// DELETE
// database.where({id: 3}).delete().table("test")
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });


// ORDEBY
// database.select().table("test")
//     .orderBy("name", "desc")// desc or asc
//         .then(data => {
//             console.log(data);
//         }).catch(err => {
//             console.log(err);
//         });

// INNER JOIN
// database.select().table("name_table").innerJoin("test", "PK", "FK")
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });