'use client'

import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { PersonType } from "./Types/PersonType";
import { MovieType } from '../Movies/Types/MovieType';

const Person = ({
  name = "",
  department = "",
  knownFor,
  mediaType
}: PersonType) => {

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title={<Typography variant="h5">{name}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            Known for: {department}
          </Typography>
        }
        sx={{
          flexDirection: "row-reverse",
        }}
      />
      <CardContent>{knownFor?.map((movie: MovieType) => movie.title && movie.title + ', ')}</CardContent>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Chip label={mediaType?.toUpperCase()} variant="outlined" color="success" />
        </Stack>
      </CardContent>
    </Card>    
  )
}

export default Person