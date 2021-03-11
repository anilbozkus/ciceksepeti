import React from "react";
import Grid from "@material-ui/core/Grid";
import apple from "../static/icon/apple.svg";
import googlePlay from "../static/icon/googlePlay.svg";
import facebookIcon from "../static/icon/facebook-icon.svg";
import instagramIcon from "../static/icon/instagram-icon.svg";
import youtubeIcon from "../static/icon/youtube-icon.svg";
import twitterIcon from "../static/icon/twitter-icon.svg";
import amazonIcon from "../static/icon/amazon-icon.svg";
import phonePhoto from "../static/img/phone-photo.png";
import qrImg from "../static/img/QR-img.png";
import Hidden from '@material-ui/core/Hidden';
import Logo from "../static/img/logo.svg";
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
              <img
                src={googlePlay}
                alt="google-play"
                style={{ marginRight: 10 }}
              />
              <img src={apple} alt="apple" className="apple-img" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ marginTop: 100 }}>
          <Grid item xs={12} md={4} className="footer-left">
            <img src={Logo} alt="logo" />
            <Grid container className="social-grid">
              <img
                src={facebookIcon}
                alt="facebook-icon"
                className="social-item"
              />
              <img
                src={twitterIcon}
                alt="twitter-icon"
                className="social-item"
              />
              <img
                src={instagramIcon}
                alt="instagram-icon"
                className="social-item"
              />
              <img
                src={youtubeIcon}
                alt="youtube-icon"
                className="social-item"
              />
              <img src={amazonIcon} alt="amazon-icon" className="social-item" />
            </Grid>
            <Typography className="privacy-text">
              CicekSepeti.com olarak kişisel verilerinizin gizliliğini
              <br /> önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu
              kapsamında <br /> oluşturduğumuz aydınlatma metnine buradan
              ulaşabilirsiniz.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} className="footer-right">
            <Grid item xs={6} md={3} className="footer-right__item">
              <Typography className="footer-right__title">
                Faydalı Bilgiler
              </Typography>
              <Typography className="footer-right__text">
                Çiçek Bakımı
              </Typography>
              <Typography className="footer-right__text">
                Çiçek Eşliğinde Notlar
              </Typography>
              <Typography className="footer-right__text">
                Çiçek Anlamları
              </Typography>
              <Typography className="footer-right__text">
                Özel Günler
              </Typography>
              <Typography className="footer-right__text">
                Mevsimlere Göre Çiçekler
              </Typography>
              <Typography className="footer-right__text">
                BonnyFood Saklama Koşulları
              </Typography>
              <Typography className="footer-right__text">
                Site Haritası
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} className="footer-right__item">
              <Typography className="footer-right__title">Kurumsal</Typography>
              <Typography className="footer-right__text">Hakkımızda</Typography>
              <Typography className="footer-right__text">Kariyer</Typography>
              <Typography className="footer-right__text">
                ÇiçekSepeti’nde Satış Yap
              </Typography>
              <Typography className="footer-right__text">
                Kurumsal Müşterilerimiz
              </Typography>
              <Typography className="footer-right__text">
                Reklamlarımız
              </Typography>
              <Typography className="footer-right__text">
                Basında Biz
              </Typography>
              <Typography className="footer-right__text">
                Kampanyalar
              </Typography>
              <Typography className="footer-right__text">Vizyonumuz</Typography>
            </Grid>
            <Grid item xs={6} md={3} className="footer-right__item">
              <Typography className="footer-right__title">İletişim</Typography>
              <Typography className="footer-right__text">
                Bize Ulaşın
              </Typography>
              <Typography className="footer-right__text">
                Sıkça Sorulan Sorular
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} className="footer-right__item">
              <Typography className="footer-right__title">
                Gizlilik Sözleşmesi
              </Typography>
              <Typography className="footer-right__text">
                Mesafeli Satış Sözleşmesi
              </Typography>
              <Typography className="footer-right__text">
                Bilgi Toplumu Hizmetleri
              </Typography>
              <Typography className="footer-right__text">
                Gizlilik Sözleşmesi
              </Typography>
              <Typography className="footer-right__text">
                Ödeme Seçenekleri
              </Typography>
              <Typography className="footer-right__text">
                Hesap Bilgileri
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ marginTop: 80 }} justify="center">
          <Typography className="footer-right__text" align="center">
            Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile
            sevdiklerinizi mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu
            etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online
            çiçek gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek
            siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde
            gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek
            aranjmanları arasından beğendiğiniz ürünü seçerek, hızlı bir şekilde
            online sipariş verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü
            gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız
            gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü,
            Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve
            lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz.
            Çünkü mutlu etmenin adresi; ÇiçekSepeti.
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs={12} className="bottom-part" justify="center" alignItems="center">
          <Typography className="footer-right__text" align="center">
            Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş
          </Typography>
        </Grid>
    </Grid>
  );
}