import React, { useState, useEffect } from "react";
import BasicLayout from "../BasicLayout/BasicLayout";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import logo from "../../assets/images/Logo_ML.webp";
import search from "../../assets/images/ic_Search_2x.webp";
import { getItems } from "../../utilities/services";
import loadItems from "../../store/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";
import useQuery from "../../hooks/useQuery";

const SearchBar: React.FC<{}> = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchParam = useQuery().get("search");

  useEffect(() => {
    if (searchParam) {
      if (searchValue !== searchParam) setSearchValue(searchParam);
      getItems(searchParam).then((res) => {
        dispatch(loadItems(res));
      });
    } else {
      setSearchValue("");
    }
    // eslint-disable-next-line
  }, [searchParam]);

  const handleSearch = () => {
    if (searchValue) {
      navigate(`/items?search=${searchValue}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="SearchBar">
      <BasicLayout>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs="auto" sx={{ display: "flex" }}>
            <img src={logo} alt="logo" />
          </Grid>
          <Grid item xs>
            <TextField
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              id="outlined-basic"
              size="small"
              variant="outlined"
              placeholder="Nunca dejes de buscar"
              fullWidth
              InputProps={{
                endAdornment: (
                  <Box
                    className="searchIcon"
                    data-testid="searchIcon"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={handleSearch}
                  >
                    <img src={search} alt="search" />
                  </Box>
                ),
                style: {
                  backgroundColor: "white",
                  paddingRight: "0px",
                },
              }}
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </Grid>
        </Grid>
      </BasicLayout>
    </div>
  );
};

export default SearchBar;
