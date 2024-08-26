const db = require('../config/database')

exports.registerProductType = async (req, res) => {
    if(req.body.hasOwnProperty('IdProductType') && req.body.hasOwnProperty('Description') && req.body.hasOwnProperty('MeanWeight') 
        && req.body.hasOwnProperty('IsFragile') && req.body.hasOwnProperty('IsTaxFree')) {
        
        const {IdProductType, Description, MeanWeight, IsFragile, IsTaxFree} = req.body;

        try {
            const insertQuery = await db.query(
                "INSERT INTO ProductType (IdProductType, Description, MeanWeight, IsFragile, IsTaxFree) VALUES ($1, $2, $3, $4, $5);",
                [IdProductType, Description, MeanWeight, IsFragile, IsTaxFree]
            );
            res.status(200).send({ sucesso: 1 });
        } catch (err) {
            res.status(200).send({ erro: "erro BD: " + err });
        }
    } else {
        res.status(200).send({ erro: "faltam parametros" });
    }
}

exports.registerProduct = async (req, res) => {
    if(req.body.hasOwnProperty('IdProduct') && req.body.hasOwnProperty('IdProductType') && req.body.hasOwnProperty('IdContainer') 
        && req.body.hasOwnProperty('Weight') && req.body.hasOwnProperty('Size') && req.body.hasOwnProperty('ShippingInfo')) {
        
        const {IdProduct, IdProductType, IdContainer, Weight, Size, ShippingInfo} = req.body;

        try {
            const insertQuery = await db.query(
                "INSERT INTO Product (IdProduct, IdProductType, IdContainer, Weight, Size, ShippingInfo) VALUES ($1, $2, $3, $4, $5, $6);",
                [IdProduct, IdProductType, IdContainer, Weight, Size, ShippingInfo]
            );
            res.status(200).send({ sucesso: 1 });
        } catch (err) {
            res.status(200).send({ erro: "erro BD: " + err });
        }
    } else {
        res.status(200).send({ erro: "faltam parametros" });
    }
}

exports.getProductTypes = async (req, res) => {
    try {
        const getAllProductTypesQuery = await db.query(
            "SELECT * FROM producttype"
        );
        if (getAllProductTypesQuery.rows.length !== 0){
            res.status(200).send(
                {
                    sucesso: 1,
                    product_types: getAllProductTypesQuery.rows,
                    qtde_product_types: getAllProductTypesQuery.rows.length
                }
            );
        } else {
            res.status(200).send(
                {
                    sucesso: 0,
                    message: "Nenhum tipo de produto encontrado."
                }
            );
        }
    } catch (err) {
        res.status(200).send({ erro: "erro BD: " + err });
    }
}

exports.getProducts = async (req, res) => {
    if(req.query.hasOwnProperty('IdProduct')){
        const {IdProduct} = req.query;

        try{
            const getAllProductsQuery = await db.query(
                "SELECT * FROM product WHERE IdProduct = $1",
                [IdProduct]
            );
            if (getAllProductsQuery.rows.length !== 0){
                res.status(200).send(
                    {
                        sucesso: 1,
                        products: getAllProductsQuery.rows,
                        qtde_products: getAllProductsQuery.rows.length
                    }
                );
            } else {
                res.status(200).send(
                    {
                        sucesso: 0,
                        message: "Nenhum produto com esses parâmetros encontrado."
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
