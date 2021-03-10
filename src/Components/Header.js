import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Logo from "../static/img/logo.svg";
import searchIcon from "../static/icon/search-icon.svg";
import bucketIcon from "../static/icon/bucket-icon.svg";
import { DebounceInput } from 'react-debounce-input';


export default function Header() {
const [search, setSearch] = React.useState("");

const HandleSearch = event => {
    setSearch(event.target.value);
};

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
                value={search}
                placeholder="Ürün Ara"
                className="search-input"
                minLength={2}
                debounceTimeout={200}
                onChange={HandleSearch}
                autoComplete="off"
              />
            </div>
          </Grid>
          <Button variant="containedPrimary" className="bucket">
              <img src={bucketIcon} alt="bucket-icon" className="bucket__icon"/> Sepetim
          </Button>
        </Grid>
      </div>
    </Grid>
  );
}