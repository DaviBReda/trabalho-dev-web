const db = require('../config/database')

exports.registerDowntime = async (req, res) => {
    if(req.body.hasOwnProperty('IdDowntime') && req.body.hasOwnProperty('IdProcess') && req.body.hasOwnProperty('IdOperation') 
        && req.body.hasOwnProperty('RealStartDate') && req.body.hasOwnProperty('RealEndDate') && req.body.hasOwnProperty('Type')) {
        
        const {IdDowntime, IdProcess, IdOperation, RealStartDate, RealEndDate, Type} = req.body;

        try {
            const insertQuery = await db.query(
                "INSERT INTO Downtime (IdDowntime, IdProcess, IdOperation, RealStartDate, RealEndDate, Type) VALUES ($1, $2, $3, $4, $5, $6);",
                [IdDowntime, IdProcess, IdOperation, RealStartDate, RealEndDate, Type]
            );
            res.status(200).send({ sucesso: 1 });
        } catch (err) {
            res.status(200).send({ erro: "erro BD: " + err });
        }
    } else {
        res.status(200).send({ erro: "faltam parametros" });
    }
}

exports.registerLocation = async (req, res) => {
    if(req.body.hasOwnProperty('IdLocation')) {
        
        const {IdLocation} = req.body;

        try {
            const insertQuery = await db.query(
                "INSERT INTO Location (IdLocation) VALUES ($1);",
                [IdLocation]
            );
            res.status(200).send({ sucesso: 1 });
        } catch (err) {
            res.status(200).send({ erro: "erro BD: " + err });
        }
    } else {
        res.status(200).send({ erro: "faltam parametros" });
    }
}

exports.registerOperation = async (req, res) => {
    if(req.body.hasOwnProperty('IdOperation') && req.body.hasOwnProperty('IdLocation') && req.body.hasOwnProperty('IdShip') 
        && req.body.hasOwnProperty('ProgrammedStartDate') && req.body.hasOwnProperty('ProgrammedEndDate') 
        && req.body.hasOwnProperty('RealStartDate') && req.body.hasOwnProperty('RealEndDate')) {
        
        const {IdOperation, IdLocation, IdShip, ProgrammedStartDate, ProgrammedEndDate, RealStartDate, RealEndDate} = req.body;

        try {
            const insertQuery = await db.query(
                "INSERT INTO Operation (IdOperation, IdLocation, IdShip, ProgrammedStartDate, ProgrammedEndDate, RealStartDate, RealEndDate) VALUES ($1, $2, $3, $4, $5, $6, $7);",
                [IdOperation, IdLocation, IdShip, ProgrammedStartDate, ProgrammedEndDate, RealStartDate, RealEndDate]
            );
            res.status(200).send({ sucesso: 1 });
        } catch (err) {
            res.status(200).send({ erro: "erro BD: " + err });
        }
    } else {
        res.status(200).send({ erro: "faltam parametros" });
    }
}

exports.registerProcess = async (req, res) => {
    if(req.body.hasOwnProperty('IdProcess') && req.body.hasOwnProperty('IdOperation') && req.body.hasOwnProperty('IdMachine') 
        && req.body.hasOwnProperty('IdContainer') && req.body.hasOwnProperty('RealStartDate') && req.body.hasOwnProperty('RealEndDate')) {
        
        const {IdProcess, IdOperation, IdMachine, IdContainer, RealStartDate, RealEndDate} = req.body;

        try {
            const insertQuery = await db.query(
                "INSERT INTO Process (IdProcess, IdOperation, IdMachine, IdContainer, RealStartDate, RealEndDate) VALUES ($1, $2, $3, $4, $5, $6);",
                [IdProcess, IdOperation, IdMachine, IdContainer, RealStartDate, RealEndDate]
            );
            res.status(200).send({ sucesso: 1 });
        } catch (err) {
            res.status(200).send({ erro: "erro BD: " + err });
        }
    } else {
        res.status(200).send({ erro: "faltam parametros" });
    }
}

exports.getDowntimes = async (req, res) => {
    try {
        const getAllDowntimesQuery = await db.query(
            "SELECT * FROM downtime"
        );
        if (getAllDowntimesQuery.rows.length !== 0){
            res.status(200).send(
                {
                    sucesso: 1,
                    downtimes: getAllDowntimesQuery.rows,
                    qtde_downtimes: getAllDowntimesQuery.rows.length
                }
            );
        } else {
            res.status(200).send(
                {
                    sucesso: 0,
                    message: "Nenhum downtime encontrado."
                }
            );
        }
    } catch (err) {
        res.status(200).send({ erro: "erro BD: " + err });
    }
}

exports.getLocations = async (req, res) => {
    try {
        const getAllLocationsQuery = await db.query(
            "SELECT * FROM location"
        );
        if (getAllLocationsQuery.rows.length !== 0){
            res.status(200).send(
                {
                    sucesso: 1,
                    locations: getAllLocationsQuery.rows,
                    qtde_locations: getAllLocationsQuery.rows.length
                }
            );
        } else {
            res.status(200).send(
                {
                    sucesso: 0,
                    message: "Nenhuma localização encontrada."
                }
            );
        }
    } catch (err) {
        res.status(200).send({ erro: "erro BD: " + err });
    }
}

exports.getOperations = async (req, res) => {
    try {
        const getAllOperationsQuery = await db.query(
            "SELECT * FROM operation"
        );
        if (getAllOperationsQuery.rows.length !== 0){
            res.status(200).send(
                {
                    sucesso: 1,
                    operations: getAllOperationsQuery.rows,
                    qtde_operations: getAllOperationsQuery.rows.length
                }
            );
        } else {
            res.status(200).send(
                {
                    sucesso: 0,
                    message: "Nenhuma operação encontrada."
                }
            );
        }
    } catch (err) {
        res.status(200).send({ erro: "erro BD: " + err });
    }
}

exports.getProcesses = async (req, res) => {
    try {
        const getAllProcessesQuery = await db.query(
            "SELECT * FROM process"
        );
        if (getAllProcessesQuery.rows.length !== 0){
            res.status(200).send(
                {
                    sucesso: 1,
                    processes: getAllProcessesQuery.rows,
                    qtde_processes: getAllProcessesQuery.rows.length
                }
            );
        } else {
            res.status(200).send(
                {
                    sucesso: 0,
                    message: "Nenhum processo encontrado."
                }
            );
        }
    } catch (err) {
        res.status(200).send({ erro: "erro BD: " + err });
    }
}
