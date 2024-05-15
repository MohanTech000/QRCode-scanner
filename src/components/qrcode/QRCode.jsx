import React, { useState } from 'react';
import { Container, Card, CardContent, Grid, TextField, Button } from "@material-ui/core";

//styles
import Styles from "./style.module.css";

//utils function
import { generateQrCode } from '../../utils/generateQrCode';

const QRCode = () => {

  const [url, setUrl] = useState("");
  const [qrimage, setQrImage] = useState("");

  const handleGenerateQRCode = (e) => {
    e.preventDefault();
    generateQrCode(url, setQrImage);
  };


  return (

    <div>


      <Container className={`${Styles.container}`}>
        <Card>
          <h2 className={`${Styles.title}`}>Generate and Download QR code</h2>
          <CardContent container spacing={2}>
            <Grid>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <TextField label="Enter text here" onChange={(e) => setUrl(e.target.value)} value={url} />
                <Button variant='contained' color="primary" className={`${Styles.btn}`} onClick={handleGenerateQRCode}>Generate QRCode</Button>
                <br />
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                {

                  url.length > 0 && qrimage ?
                    <>
                      <a href={qrimage} download><img src={qrimage} alt='qrimage' /></a>
                      <p>Scan the QR code to access data!</p>
                    </>
                    :
                    null

                }
              </Grid>
            </Grid>


          </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default QRCode;