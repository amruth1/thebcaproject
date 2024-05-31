import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function Category() {
  const[data,SetData]=useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>{
      console.log(res.data)
      SetData(res.data)

    
    })
    .catch((e)=>{
      console.log(e)
    })
  
  },[])
  





  return (
    <div  style={{ marginTop: 10 }}>
      <h1 style={{ alignItems: "center", textAlign: "center" }}>Category</h1>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            padding: 3,
            width: 128,
            height: 128,
          },
        }}
      >
        {data?.map((item)=>(
          
       
        <Grid item xs={3}>
          <Paper
            elevation={3}
            style={{
              height: "100%",
              padding: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to={`/Products/${item.slug}`}>
              <Typography>
              
              <h2>{item.name}</h2>
              </Typography>
            
            </Link>
          </Paper>
        </Grid> 
      ))}
      </Grid>
    </div>
  );
}
