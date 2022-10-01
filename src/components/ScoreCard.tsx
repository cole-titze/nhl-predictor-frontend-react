import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
interface IProps{
    homeGoals: number,
    awayGoals: number,
    hasBeenPlayed: boolean
}
function ScoreCard(props: IProps): JSX.Element {
    function getScoreCardText(hasBeenPlayed: boolean){
        if(hasBeenPlayed)
            return (<>{props.awayGoals} - {props.homeGoals}</>);
        return (<>TBD</>);
    }
    return (
        <Card className="team-score">
        <CardContent>
        <Typography variant="h6" component="div" align="center">
            Score
        </Typography>
        <Typography variant="body1" color="text.primary" align="center">
            {getScoreCardText(props.hasBeenPlayed)}
        </Typography>
        </CardContent>
        </Card>
    )};
export default ScoreCard;
