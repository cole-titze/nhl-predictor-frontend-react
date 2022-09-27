import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { convertToLocalTime } from '../helpers/utils'
interface IProps{
    gameDate: Date
}
function AtCard(props: IProps): JSX.Element {

    return (
        <Card className="team-date">
        <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
            @
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
            {convertToLocalTime(props.gameDate)}
        </Typography>
        </CardContent>
        </CardActionArea>
        </Card>
    )};
export default AtCard;
