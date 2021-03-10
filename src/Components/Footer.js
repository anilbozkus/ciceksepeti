import React from "react";
import Grid from "@material-ui/core/Grid";
import apple from "../static/icon/apple.svg";
import googlePlay from "../static/icon/googlePlay.svg";
import phonePhoto from "../static/img/phone-photo.png";
import qrImg from "../static/img/QR-img.png";
import Hidden from '@material-ui/core/Hidden';
import Typography from "@material-ui/core/Typography";

export default function Footer() {

  return (
    <Grid container className="footer">
      <Grid className="footer-grid">
        <Grid className="white-grid" container>
          <Hidden xsDown>
            <img src={phonePhoto} alt="phone" className="phone-photo" />
          </Hidden>
          <Grid item>
            <Grid container style={{ marginLeft: 10 }}>
              <img src={qrImg} alt="qr-img" />
              <Grid item style={{ marginLeft: 20 }}>
                <Typography className="qr-title">
                  Çiçek Sepeti Mobil Uygulamayı İndirin
                </Typography>
                <Typography className="qr-text">
                  Mobil Uygulamayı QR Kod ile İndirin.
                </Typography>
              </Grid>
            </Grid>
            <Grid container className="app-grid">
              <img src={googlePlay} alt="google-play" style={{ marginRight:10 }}/>
              <img src={apple} alt="apple" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}