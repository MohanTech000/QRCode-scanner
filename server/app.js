import express from "express";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));



//routes
import QRCodeRouter from "./routes/QRCodeRouter.js";

app.use("/", QRCodeRouter);


app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})