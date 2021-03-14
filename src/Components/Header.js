import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Logo from "../static/img/logo.svg";
import searchIcon from "../static/icon/search-icon.svg";
import bucketIcon from "../static/icon/bucket-icon.svg";
import { DebounceInput } from 'react-debounce-input';
import Typography from "@material-ui/core/Typography";
import Slider from '@material-ui/core/Slider';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
sliderRoot:{
  color:'#ffce00!important'
},

sliderRail:{
  height:'6px'
},
sliderTrack:{
  height:'6px'
},
sliderThumb:{
  display:'none'
}
}))

export default function Header(props) {
  const classes = useStyles();
  const{ bucket, percentage, price } = props;

  return (
    <Grid container>
      <div className="header">
        <Grid container justify="space-between">
          <Grid item xs className="header__left">
            <img src={Logo} alt="logo" />
            <div className="search">
              <div className="search-icon">
                <img src={searchIcon} alt="search-icon" />
              </div>
              <DebounceInput
                class="inputTypeSearch"
                name="search"
                value={props.search}
                placeholder="Ürün Ara"
                className="search-input"
                minLength={3}
                debounceTimeout={200}
                onChange={props.handleSearch}
                autoComplete="off"
              />
            </div>
          </Grid>
          <Grid item className="bucket-grid">
            {bucket && bucket.length > 0 && (
              <Grid className="bucket-count-grid">
                <Typography className="bucket-count-text">
                  {bucket.length}
                </Typography>
              </Grid>
            )}
            <Button variant="containedPrimary" className="bucket">
              <img
                src={bucketIcon}
                alt="bucket-icon"
                className="bucket__icon"
              />{" "}
              Sepetim
            </Button>
            {price !== 0 && percentage !== 0 && bucket && bucket.length > 0 && (
              <Grid className="bucket-text-grid">
                {price > 0 ? (
                  <Typography className="bucket-text">
                    <strong style={{ color: "#FFCE00" }}>
                      {price} TL{" "}
                    </strong>{" "}
                    ürün daha ekleyin kargo bedava
                  </Typography>
                ) : (
                  <Typography className="bucket-text">
                    Kargonuz Bedava
                  </Typography>
                )}
                {price > 0 && (
                  <Slider
                    disabled
                    value={percentage}
                    aria-labelledby="disabled-slider"
                    classes={{
                      root:classes.sliderRoot,
                      rail:classes.sliderRail,
                      track:classes.sliderTrack,
                      thumb:classes.sliderThumb,
                    }}
                  />
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}