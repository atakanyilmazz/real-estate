import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import PropertyCard from "./propertyCard";

export default function Properties() {
  const { properties } = useSelector((state) => state.propertyReducer);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {properties.map((property) => (
        <Grid item xl={2} md={3} sm={6} xs={12}>
          <PropertyCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
}
