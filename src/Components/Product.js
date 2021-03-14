import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import plusIcon from "../static/icon/plus-icon.svg";


export default function Product(props) {
    const {product, bucket, setBucket, setPrice, setPercentage} = props;
    const [count, setCount] = React.useState();

    const addItem = product => {
        setBucket([...bucket, product]);
        setCount(count + 1);
    };

    const percentageFuncPlus = (bucket) => {
        let percen = 0;
        bucket.forEach(element =>{
          percen = parseFloat(element.price) + percen;
        });
        return setPercentage((percen * 100) / 500);
      }
    
      const percentageFuncMinus = (bucket) => {
        let percen = 0;
        bucket.forEach(element =>{
          percen = parseFloat(element.price) - percen;
        });
        return setPercentage((percen * 100) / 500);
      }
    
      const priceFuncPlus = (bucket) => {
        let price = 0;
        bucket.forEach(element =>{
          price = parseFloat(element.price) + price;
        });
        setPrice(500 - price);
      }
    
      const priceFuncMinus = (bucket) => {
        let price = 0;
        bucket.forEach(element =>{
          price = parseFloat(element.price) - price;
        });
        setPrice(500 - price);
      }

    const removeItem = (product) => {
        if(bucket.length > 1)
        {
            setCount(count - 1);
            return setBucket(bucket.filter(function(product) {
                if(!this[product]) this[product] = 1
                else if (this[product] === 1) return this[product] = 2, false
                return true;
              }, {}));
        }
        else
        {
            setCount(count - 1);
            return setBucket([]);
        }
    };

    return(
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
      {(bucket.includes(product) && count > 0) ?
      <Grid className="category-item__bucket-added" container justify="space-between">
        <Grid className="category-item__minus-icon" item  onClick={() => 
            {
            removeItem(product)
            percentageFuncMinus(bucket);
            priceFuncMinus(bucket);
            }}>
            <Typography className="category-item__minus-icon-text">-</Typography>
        </Grid>
        <Grid item xs className="category-item__count">
        <Typography className="category-item__count-text" align="center">{count}</Typography>
        </Grid>
        <img src={plusIcon} alt="plus-icon" style={{ cursor:'pointer' }} onClick={() => 
        {
        addItem(product);
        percentageFuncPlus(bucket);
        priceFuncPlus(bucket);
        }}/>    
      </Grid>
      :
      <Button className="category-item__bucket" onClick={() => {
          setBucket([...bucket, product]);
          percentageFuncPlus(bucket);
          priceFuncPlus(bucket);
          setCount(1);
          }}>
        Sepete Ekle
      </Button>
      }
    </Grid>  
  </Grid>
  )
}