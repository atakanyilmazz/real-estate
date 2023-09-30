import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function PropertyCard({ property }) {
  return (
    <Card variant="outlined">
      <CardHeader title={property.title} subheader={`₺ ${property.price}`} />
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                Country :
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                {property.district.city.country.value}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                City :
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                {property.district.city.value}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                District :
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                {property.district.value}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                Rooms :
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                {property.room.value}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                Features :
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" display="block" gutterBottom>
                {property.propertyFeatures.map((x) => x.value).join(", ")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

PropertyCard.propTypes = {
  property: PropTypes.object,
};
