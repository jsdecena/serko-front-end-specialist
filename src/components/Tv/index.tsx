'use client'

import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { TvType } from "./Types/TvType";
import { movieGenres } from "@/clients/tmdb";
import { useEffect, useState } from "react";

const Tv = ({
  name = "",
  overview = "",
  voteAverage,
  genreIds,
  mediaType,
  firstAirDate
}: TvType) => {

  const [genreNames, setGenreNames] = useState<(string | undefined)[]>()

  useEffect(() => {
    async() => {
      const { genres } = await movieGenres();
      const names = genreIds.map((genreId) => {
        const { name } =
          genres.find((currentGenre) => currentGenre.id === genreId) ?? {};
        return name
      }); 
  
      setGenreNames(names)
    }
  }, [])

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title={<Typography variant="h5">{name}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            {dayjs(firstAirDate).format('DD MMMM YYYY') }
          </Typography>
        }
        sx={{
          flexDirection: "row-reverse",
        }}
        avatar={
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              value={voteAverage * 10}
              color="secondary"
              thickness={4}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="caption" fontWeight={600} component="div">
                {voteAverage.toFixed(1)}
              </Typography>
            </Box>
          </Box>
        }
      />
      <CardContent>{overview}</CardContent>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Chip label={`${mediaType.toUpperCase()} Show`} variant="outlined" color="secondary" />
          <Stack
            divider={<Divider orientation="vertical" />}
            direction="row"
            spacing={1}
            alignItems="center"
          >
            {genreNames?.map((genreName) => (
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
              >
                {genreName}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>    
  )
}

export default Tv