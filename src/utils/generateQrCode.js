import axios from "axios";

export const generateQrCode = (url, setQrImage) => {
    axios.post("http://localhost:5000/scanqrcode", { url: url })
    .then(response => {
        console.log("qrapiResponse:", response);
        setQrImage(response.data);
    })
    .catch(error => {
        console.error('Error generating QR code:', error);
    });
}
