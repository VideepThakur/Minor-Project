import express, { Request, Response } from 'express';
var mongoose = require('mongoose');
var router = express.Router();
var ProductModel=require("../../models/Product");

interface Drug {
  drugName: string;
  compositions: Composition[];
  units: number;
  totalDosage: number;
  price: number;
  expiryDate: string;
}
interface Composition {
  name: string;
  dosage: string;
}

interface Product extends Drug{
  vendorWalletAddress:string,
}
interface GetItemsRequest extends Request {
  body: {
    address: string;
  };
}
router.post("/getItems", async (req: Request, res: Response) => {
  try {
    const currAddress = req.body.address;


    const products = await ProductModel.find({ vendorWalletAddress: { $ne: currAddress } });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching items" });
  }
});


module.exports=router;