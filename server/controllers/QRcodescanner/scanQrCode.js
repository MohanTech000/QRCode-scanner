import qrCode from "qrcode";

export const scanQrCode =  async (req, res) => {
    try {
        
        const url = req.body.url;
        if(url === 0) {
            res.json({ msg: "Empty data" })
        }

        qrCode.toDataURL(url, (err, url) => {
            console.log("qrcode url:", url);
            res.json(url);
        })

    } catch (error) {
        
    }
}