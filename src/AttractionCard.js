import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import { useGetAttractionsByIDQuery } from "./services/attraction";

export default function AttractionCard() {
  const attraction = useSelector((state) => state.attraction.value);
  const { data, error, isLoading } = useGetAttractionsByIDQuery(attraction);
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <Card>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              width="100%"
              image={data.attraction.coverimage}
            />
          </Grid>
          <Grid item sm={6}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.attraction.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.attraction.detail}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.attraction.latitude}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.attraction.longitude}
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      ) : null}
    </>
  );
}
