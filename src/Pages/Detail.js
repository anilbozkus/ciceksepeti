import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Typography from '@material-ui/core/Typography';
import menuIcon from "../static/icon/menu-icon.svg";
import productIcon from "../static/icon/product-icon.svg";
import exampleProduct from "../static/img/exmaple-product.png";
import firstInfo from "../static/img/first-info.png";
import secondInfo from "../static/img/second-info.png";
import thirdInfo from "../static/img/third-info.png";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from "@material-ui/core/Button";

export default function Detail() {
  const [category, setCategory] = React.useState("");

  return (
    <>
      <Header />
      <Grid container className="blue-field">
        <Typography variant="h1" className="blue-field__text">
          ÇiçekSepeti H1
        </Typography>
      </Grid>
      <Grid container className="main-grid">
        <Grid container>
          <Typography variant="body1" className="breadcrumb-text">
            Ciceksepeti Market
          </Typography>
          <KeyboardArrowRightIcon className="breadcrumb-icon" />
          <Typography variant="body1" className="breadcrumb-text">
            İstanbul
          </Typography>
          <KeyboardArrowRightIcon className="breadcrumb-icon" />
          <Typography
            variant="body1"
            className="breadcrumb-text"
            style={{ color: "#51B549" }}
          >
            CiceksepetiBreadCrumb
          </Typography>
        </Grid>
        <Grid container className="category-title-grid">
          <img src={menuIcon} alt="menu-icon" className="category-icon" />
          <Typography variant="body1" className="category-text">
            Kategoriler
          </Typography>
        </Grid>
        <Grid container className="category-item-grid" xs={12}>
          {category === "Tüm Kategoriler" ? (
            <Grid item className="category-item">
              <Grid item className="category-item__box" style={{background:'#044DC3'}}  onClick={() => setCategory("")}>
                <Typography variant="body1" className="category-item__text" style={{color:'#fff'}}>
                  Tüm Kategoriler
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Grid item className="category-item">
              <Grid item className="category-item__box" onClick={() => setCategory("Tüm Kategoriler")}>
                <Typography variant="body1" className="category-item__text">
                  Tüm Kategoriler
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid container className="product-grid">
          <img src={productIcon} alt="product-icon" className="product-icon" />
          <Typography variant="body1" className="product-title">
            Tüm Kategoriler
          </Typography>
        </Grid>
        <Grid container className="product-container" xs={12}>
          <Grid item className="category-item">
            <Grid item className="category-item__box">
              <img src={exampleProduct} alt="example" />
              <Typography className="category-item__title">
                Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth
              </Typography>
              <Typography className="category-item__status">
                Ücretsiz Teslimat
              </Typography>
              <Typography className="category-item__price">
                249,90 TL
              </Typography>
              <Button className="category-item__bucket">
                Sepete Ekle
              </Button>
            </Grid>  
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12}>
        <hr size="1" style={{ border: '2px solid #EDF1F2;', margin: '30px 0' }} />
      </Grid>
      <Grid container className="info-grid">
        <Grid container xs={12} spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Grid container className="pink-info">
              <img src={firstInfo} alt="first-info" />
              <Grid item className="info-content">
                <Typography className="info-content__text">
                  75 TL Üzerine Teslimat Ücreti Bizden
                </Typography>
                <Button className="info-content__button">
                  Detaylı Bilgi
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Grid container className="blue-info">
              <img src={secondInfo} alt="second-info" />
              <Grid item className="info-content">
                <Typography className="info-content__text">
                  Hediye Kategorisi için Sepette %15 İndirim
                </Typography>
                <Button className="info-content__button">
                  Hediye Ürünleri
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Grid container className="blue-info">
              <img src={thirdInfo} alt="third-info" />
              <Grid item className="info-content">
                <Typography className="info-content__text">
                  Kırtasiye Kategorisi için Sepette %15 İndirim
                </Typography>
                <Button className="info-content__button">
                  Detaylı Bilgi
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

