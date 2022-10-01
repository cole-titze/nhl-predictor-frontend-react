import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CardActionArea } from '@mui/material';
import { ITeam, TEAM } from '../types/GameOdds'
import {convertDecimalToPercentString, convertDecimalToAmericanString} from "../helpers/timeUtils"
import Stack from '@mui/material/Stack';

interface IProps{
    team: ITeam,
    hasBeenPlayed: boolean,
    winner: TEAM
}
function getTag(hasBeenPlayed: boolean, winner: TEAM, team: TEAM){
    console.log(winner);
    console.log(team);
    if(!hasBeenPlayed)
        return;
    if(winner===team)
        return (<Chip label="Winner" color="success" size="small"/>);
    return (<Chip label="Loser" color="error" size="small"/>);
}
function TeamCard(props: IProps): JSX.Element {
    return (
        <Card className="team-card">
        <CardActionArea>
        <CardContent>
        <Stack spacing={0} justifyContent="center" alignItems="center">
            <img className="image"
            src={props.team.logoUri}
            alt={props.team.locationName}
            />
            <Typography variant="h5" component="div">
                {props.team.teamName}
            </Typography>
            {getTag(props.hasBeenPlayed, props.winner, props.team.team)}
        </Stack>
        <br></br>
        <Stack justifyContent="center" direction="row"   spacing={{ xs:0, s: 1, md: 3 }}>
            <Typography component={'span'} variant="body2" color="text.secondary">
                <h5>Model Odds</h5>
                Percent: {convertDecimalToPercentString(props.team.modelOdds)}
                <br></br>
                American: {convertDecimalToAmericanString(props.team.modelOdds)}
                <br></br>
            </Typography>
            <Typography component={'span'} variant="body2" color="text.secondary">
                <h5>Vegas Odds</h5>
                Percent: {convertDecimalToPercentString(props.team.vegasOdds)}
                <br></br>
                American: {convertDecimalToAmericanString(props.team.vegasOdds)}
            </Typography>
        </Stack>
        </CardContent>
        </CardActionArea>
        </Card>
    )};
export default TeamCard;