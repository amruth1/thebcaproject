import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Category from "./Category";



function Products() {
  const[sdata,SetSdata]=useState([]);
  const {categoryName}=useParams();
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/${categoryName}`)
    .then((res)=>{
      console.log(res.data.products)
      SetSdata(res.data.products) 
    })
    .catch((e)=>{
      console.log(e)
    })

    },[])

  return (
    <div style={{ padding: 10 }}>
      
      
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}

      >{sdata?.map((item)=>(
        
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            width="200"
            image={item.thumbnail}
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h2>{item.title}</h2>
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              <h2>{categoryName}</h2>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h2>{item.description}</h2>
            </Typography>
          </CardContent>
          <CardActions>
            <Typography variant="h5"><h2>{item.price}</h2></Typography>
            <Typography
              variant="h5"
              style={{ textAlign: "end", width: "100%" }}
            >
              <h3>{item.brand}</h3>
            </Typography>
          </CardActions>
        </Card>
        ))}
      </Grid>
      
    </div>
  );
}

export default Products;
