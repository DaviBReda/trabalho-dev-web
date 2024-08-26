const db = require('../config/database')

exports.registerContainerType = async (req, res) => {

    if(req.body.hasOwnProperty('IdContainerType') && req.body.hasOwnProperty('Height') && req.body.hasOwnProperty('Width') && req.body.hasOwnProperty('Length') 
        && req.body.hasOwnProperty('Name')&& req.body.hasOwnProperty('Description')){
        const {IdContainerType, Height, Width, Length, Name, Description} = req.body

        try{
            const insertQuery = await db.query(
                "INSERT INTO ContainerType (IdContainerType, Height, Width, Length, Name, Description) VALUES ($1, $2, $3, $4, $5, $6);",
                [IdContainerType, Height, Width, Length, Name, Description]
            )
            res.status(200).send(
                {
                    sucesso: 1
                }
            );
        }catch (err) {
            var errorMsg = "erro BD: "
            res.status(200).send(
                {
                    erro: errorMsg.concat(err)
                }
            );
        }
        } else {
        var errorMsg = "faltam parametros";
        res.status(200).send(
            {
                erro: errorMsg
            }
        );
    }

}

exports.registerContainer = async (req, res) => {
    if(req.body.hasOwnProperty('IdContainer') && req.body.hasOwnProperty('IdContainerType') && req.body.hasOwnProperty('IdLocation') && req.body.hasOwnProperty('IdShip')) {
        const {IdContainer, IdContainerType, IdLocation, IdShip} = req.body
        
        try{
            const insertQuery = await db.query(
                "INSERT INTO Container (IdContainer, IdContainerType, IdLocation, IdShip) VALUES ($1, $2, $3, $4);",
                [IdContainer, IdContainerType, IdLocation, IdShip]
            )
            res.status(200).send(
                {
                    sucesso: 1
                }
            );
        }catch (err) {
            var errorMsg = "erro BD: "
            res.status(200).send(
                {
                    erro: errorMsg.concat(err)
                }
            );
        }
        } else {
        var errorMsg = "faltam parametros";
        res.status(200).send(
            {
                erro: errorMsg
            }
        );
    }
}

exports.getContainerTypes = async (req, res) => {
    try {
        const getAllContainerTypesQuery = await db.query(
            "SELECT * FROM containertype"
        );
        if (getAllContainerTypesQuery.rows.length !== 0){
            res.status(200).send(
                {
                    sucesso: 1,
                    container_types: getAllContainerTypesQuery.rows,
                    qtde_container_types: getAllContainerTypesQuery.rows.length
                }
            );
        } else {
            res.status(200).send(
                {
                    sucesso: 0,
                    message: "Nenhum tipo de contêiner encontrado."
                }
            );
        }
    } catch (err) {
        res.status(200).send({ erro: "erro BD: " + err });
    }
}

exports.getContainers = async (req, res) => {
    if(req.query.hasOwnProperty('IdContainer')){
        const {IdContainer} = req.query;

        try{
            const getAllContainersQuery = await db.query(
                "SELECT * FROM container WHERE IdContainer = $1",
                [IdContainer]
            );
            if (getAllContainersQuery.rows.length !== 0){
                res.status(200).send(
                    {
                        sucesso: 1,
                        containers: getAllContainersQuery.rows,
                        qtde_containers: getAllContainersQuery.rows.length
                    }
                );
            } else {
                res.status(200).send(
                    {
                        sucesso: 0,
                        message: "Nenhum contêiner com esses parâmetros encontrado."
                    }
                );
            }
        } catch (err) {
            res.status(200).send({ erro: "erro BD: " + err });
        }
    } else {
        res.status(200).send({ erro: "faltam parâmetros" });
    }
}