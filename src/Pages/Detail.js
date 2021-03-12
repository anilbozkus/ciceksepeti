import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Typography from '@material-ui/core/Typography';
import menuIcon from "../static/icon/menu-icon.svg";
import productIcon from "../static/icon/product-icon.svg";
import firstInfo from "../static/img/first-info.png";
import secondInfo from "../static/img/second-info.png";
import thirdInfo from "../static/img/third-info.png";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from "@material-ui/core/Button";
import productItems from '../products';

export default function Detail() {
  const categories = ['Tüm Kategoriler', 'Elektronik', 'Ev ve Yaşam', 'Evcil Hayvan', 'Kitap', 'Oyuncak', 'Spor', 'Çiçek (120)', 'Hediye', 'Moda, Aksesuar', 'Ofis, Kırtasiye', 'Parfüm', 'Kişisel Bakım', 'Petshop'];
  const [category, setCategory] = React.useState("Tüm Kategoriler");

  const [search, setSearch] = React.useState("");
  const [products, setProducts] = React.useState(productItems);

const handleSearch = event => {
    if(event.target.value !== ""){
      setSearch(event.target.value);
    }
    if(event.target.value === ""){
      setProducts(productItems);
    } else{
      setProducts(productItems.filter(product => product.title.toLowerCase().includes(event.target.value.toLowerCase())));
    }
};

const setProductItems = (cat) => {
  setCategory(cat);
  if(cat === "Tüm Kategoriler"){
    setProducts(productItems);
  } else{
    setProducts(productItems.filter(product => product.cat === cat));
  }

};

  return (
    <>
      <Header search={search} handleSearch={handleSearch}/>
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
        {categories.map((cat, index) => (
          cat === category ? (
            <Grid item className="category-item">
              <Grid item className="category-item__box" style={{background:'#044DC3'}}  onClick={() => setProductItems("Tüm Kategoriler")}>
                <Typography variant="body1" className="category-item__text" style={{color:'#fff'}}>
                  {cat}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Grid item className="category-item">
              <Grid item className="category-item__box" onClick={() => setProductItems(cat)}>
                <Typography variant="body1" className="category-item__text">
                  {cat}
                </Typography>
              </Grid>
            </Grid>
          )
          ))}
        </Grid>
        <Grid container className="product-grid">
          <img src={productIcon} alt="product-icon" className="product-icon" />
          <Typography variant="body1" className="product-title">
            {category}
          </Typography>
        </Grid>
        <Grid container className="product-container" xs={12}>
        {products.map((product, index) => (
          <Grid item className="category-item">
            <Grid item className="category-item__box">
              <img src={product.img} alt="product-img" />
              <Typography className="category-item__title">
                {product.title}
              </Typography>
              <Typography className="category-item__status">
                {product.desc}
              </Typography>
              <Typography className="category-item__price">
                {product.price}
              </Typography>
              <Button className="category-item__bucket">
                Sepete Ekle
              </Button>
            </Grid>  
          </Grid>
        ))}
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

