import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { convertToLocalTime } from '../../helpers/timeUtils'
interface IProps{
    gameDate: Date
}
function AtCard(props: IProps): JSX.Element {

    return (
        <Card className="team-at">
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
            @
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
            {convertToLocalTime(props.gameDate)}
        </Typography>
        </CardContent>
        </Card>
    )};
export default AtCard;
