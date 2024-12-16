const mongo = require("mongoose");

mongo
  .connect(
    "mongodb://hotel:Ozdu0rSJ2rfFCcuu@ac-pka8jeg-shard-00-00.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-01.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-02.ytbxqwi.mongodb.net:27017/hotel?ssl=true&replicaSet=atlas-d5fq1b-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasCluster"
  )
  .then(() => {
    console.log("connected mongoose successfull");
  })
  .catch((error) => console.log(error));