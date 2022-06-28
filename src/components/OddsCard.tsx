import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";
import IGameOdds from "../types/GameOdds";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';

function convertDecimalToPercentString(decimal: number): string{
    return (decimal*100).toFixed(2) + "%";
}
function convertDecimalToAmericanString(decimal: number): string{
    let percent = decimal * 100;
    let americanOdds = 0;
    if( percent < 50 )
        americanOdds = (10000/percent) - 100;
    else if(percent >= 50)
        americanOdds = (100*percent)/(percent-100)

    return americanOdds.toFixed(2);
}

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
    {matchups.map(( {id, gameDate, homeTeam, awayTeam, modelHomeOdds, modelAwayOdds, vegasAwayOdds, vegasHomeOdds}) => {
       // missing return here: 
       return (
        <Grid container key={id} className="matchup-row">        
       <Grid item xs={2}></Grid>
        <Grid item xs={3}>
            <Card className="team-card">
            <CardActionArea>
            <img className="image"
            src={homeTeam.logoUri}
            alt={homeTeam.locationName}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {homeTeam.teamName}
            </Typography>
            <Typography component={'span'} variant="body2" color="text.secondary">
                <h5>Model Odds</h5>
                Percent: {convertDecimalToPercentString(modelHomeOdds)}
                <br></br>
                American: {convertDecimalToAmericanString(modelHomeOdds)}
                <br></br>
                <h5>Vegas Odds</h5>
                Percent: {convertDecimalToPercentString(vegasHomeOdds)}
                <br></br>
                American: {convertDecimalToAmericanString(vegasHomeOdds)}
            </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={2}>
            <Card className="team-date">
            <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center">
                @
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                {gameDate.toString()}
            </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={3}>
            <Card className="team-card">
            <CardActionArea>
            <img className="image"
            src={awayTeam.logoUri}
            alt={awayTeam.locationName}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {awayTeam.teamName}
            </Typography>
            <Typography component={'span'} variant="body2" color="text.secondary">
            <h5>Model Odds</h5>
                Percent: {convertDecimalToPercentString(modelAwayOdds)}
                <br></br>
                American: {convertDecimalToAmericanString(modelAwayOdds)}
                <br></br>
                <h5>Vegas Odds</h5>
                Percent: {convertDecimalToPercentString(vegasAwayOdds)}
                <br></br>
                American: {convertDecimalToAmericanString(vegasAwayOdds)}
            </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
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
