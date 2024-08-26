const db = require('../config/database')

exports.registerShipType = async (req, res) => {
    if(req.body.hasOwnProperty('IdShipType') && req.body.hasOwnProperty('ModelName') && req.body.hasOwnProperty('Height') 
        && req.body.hasOwnProperty('Width') && req.body.hasOwnProperty('Length') && req.body.hasOwnProperty('MaxWeight') 
        && req.body.hasOwnProperty('MaxCapacity')) {
        
        const {IdShipType, ModelName, Height, Width, Length, MaxWeight, MaxCapacity} = req.body;

        try {
            const insertQuery = await db.query(
                "INSERT INTO ShipType (IdShipType, ModelName, Height, Width, Length, MaxWeight, MaxCapacity) VALUES ($1, $2, $3, $4, $5, $6, $7);",
                [IdShipType, ModelName, Height, Width, Length, MaxWeight, MaxCapacity]
            );
            res.status(200).send({ sucesso: 1 });
        } catch (err) {
            res.status(200).send({ erro: "erro BD: " + err });
        }
    } else {
        res.status(200).send({ erro: "faltam parametros" });
    }
}

exports.registerShip = async (req, res) => {
    if(req.body.hasOwnProperty('IdShip') && req.body.hasOwnProperty('IdShipType') && req.body.hasOwnProperty('LastMaintenance') 
        && req.body.hasOwnProperty('ContainerCount') && req.body.hasOwnProperty('IdLocation')) {
        
        const {IdShip, IdShipType, LastMaintenance, ContainerCount, IdLocation} = req.body;

        try {
            const insertQuery = await db.query(
                "INSERT INTO Ship (IdShip, IdShipType, LastMaintenance, ContainerCount, IdLocation) VALUES ($1, $2, $3, $4, $5);",
                [IdShip, IdShipType, LastMaintenance, ContainerCount, IdLocation]
            );
            res.status(200).send({ sucesso: 1 });
        } catch (err) {
            res.status(200).send({ erro: "erro BD: " + err });
        }
    } else {
        res.status(200).send({ erro: "faltam parametros" });
    }
}

exports.getShipTypes = async (req, res) => {
    try {
        const getAllShipTypesQuery = await db.query(
            "SELECT * FROM shiptype"
        );
        if (getAllShipTypesQuery.rows.length !== 0){
            res.status(200).send(
                {
                    sucesso: 1,
                    ship_types: getAllShipTypesQuery.rows,
                    qtde_ship_types: getAllShipTypesQuery.rows.length
                }
            );
        } else {
            res.status(200).send(
                {
                    sucesso: 0,
                    message: "Nenhum tipo de navio encontrado."
                }
            );
        }
    } catch (err) {
        res.status(200).send({ erro: "erro BD: " + err });
    }
}

exports.getShips = async (req, res) => {
    if(req.query.hasOwnProperty('IdShip')){
        const {IdShip} = req.query

        try{
            const getAllShipsQuery = await db.query(
                "SELECT * FROM ship WHERE Idship = $1",
                [IdShip]
            );
            if (getAllShipsQuery.rows.length !== 0){
                res.status(200).send(
                    {
                        sucesso: 1,
                        ships: getAllShipsQuery.rows,
                        qtde_ships: getAllShipsQuery.rows.length
                    }
                );
            } else {
                res.status(200).send(
                    {
                        sucesso: 0,
                        message: "Nenhum navio com esses parametros encontrado."
                    }
                );
            }
        } catch (err) {
            res.status(200).send({ erro: "erro BD: " + err });
        }
    } else {
        res.status(200).send({ erro: "faltam parametros" });
    }
}