import express from "express";
const router = express.Router();


//controllers
import { scanQrCode } from "../controllers/QRcodescanner/scanQrCode.js";



router.post("/scanqrcode", scanQrCode);




export default router;