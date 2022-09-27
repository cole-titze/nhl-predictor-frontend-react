import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";
import { IGameOdds } from "../types/GameOdds";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import AtCard from "./AtCard";
import {convertDecimalToPercentString, convertDecimalToAmericanString} from "../helpers/utils"
import TeamCard from "./TeamCard";

const Tutorial: React.FC = () => {
  const [matchups, setMatchups] = useState<Array<IGameOdds>>([]);

  const getGameOdds = () => {
      ApiService.getAllPredictedGames()
      .then((response: any) => {
        setMatchups(response.data.value);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  useEffect(() => {
    getGameOdds();
  }, []);

  return ( 
  <div>
    <h1>Matchups</h1>

    <Grid container sx={{ direction:"column", alignItems:"center", justify:"center" }}>
    {matchups.map(( {id, gameDate, homeTeam, awayTeam}) => {
       return (
        <Grid container key={id} className="matchup-row">        
       <Grid item xs={2}></Grid>
       <Grid item xs={3}>
        <TeamCard team={awayTeam}/>
        </Grid>
        <Grid item xs={2}>
            <AtCard gameDate={gameDate}/>
        </Grid>
        <Grid item xs={3}>
        <TeamCard team={homeTeam}/>
        </Grid>
        <Grid item xs={2}></Grid>
        </Grid>
        )
     }
   )}
    </Grid>
  </div>
);
};
export default Tutorial;
