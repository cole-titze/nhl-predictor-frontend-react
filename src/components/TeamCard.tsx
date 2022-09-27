import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ITeam } from '../types/GameOdds'
import {convertDecimalToPercentString, convertDecimalToAmericanString} from "../helpers/utils"

interface IProps{
    team: ITeam
}
function TeamCard(props: IProps): JSX.Element {

    return (
        <Card className="team-card">
        <CardActionArea>
        <img className="image"
        src={props.team.logoUri}
        alt={props.team.locationName}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.team.teamName}
        </Typography>
        <Typography component={'span'} variant="body2" color="text.secondary">
        <h5>Model Odds</h5>
            Percent: {convertDecimalToPercentString(props.team.modelOdds)}
            <br></br>
            American: {convertDecimalToAmericanString(props.team.modelOdds)}
            <br></br>
            <h5>Vegas Odds</h5>
            Percent: {convertDecimalToPercentString(props.team.vegasOdds)}
            <br></br>
            American: {convertDecimalToAmericanString(props.team.vegasOdds)}
        </Typography>
        </CardContent>
        </CardActionArea>
        </Card>
    )};
export default TeamCard;