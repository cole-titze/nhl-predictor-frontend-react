import { ITeam } from '../../types/GameOdds'
import { Stack, Typography, Container, Chip, getInitColorSchemeScript } from '@mui/material';
import { GetBackgroundColor, GetFontColor } from '../../helpers/logLossColorUtils';

interface IProps{
    team: ITeam
}
function TeamRow(props: IProps): JSX.Element {
    let logLossDif = (props.team.modelLogLoss - props.team.vegasLogLoss);
    let logLossDifFormatted = logLossDif.toFixed(4);
    let vegasLogLoss = props.team.vegasLogLoss.toFixed(4);
    let modelLogLoss = props.team.modelLogLoss.toFixed(4);
    let fontColor = GetFontColor(logLossDif);
    let backgroundColor = GetBackgroundColor(logLossDif);

    return (
        <Stack spacing={5} direction="row">
            <Typography className="center-content" sx={{width: 10}} variant="body1" component="div">
                {props.team.id}
            </Typography>
            <Container sx={{width: 50}} component="div">
                <img className="team-image"
                src={props.team.logoUri}
                alt={props.team.locationName}
                />
            </Container>
            <Typography sx={{width: 125}} component="div" variant="body1">
                {props.team.teamName}
            </Typography>
            <Typography className="center-content" sx={{width: 150}} component="div" variant="body1">
                {modelLogLoss}
            </Typography>
            <Typography className="center-content"  sx={{width: 150}} component="div" variant="body1">
                {vegasLogLoss}
            </Typography>
            <Container className="center-content" sx={{width: 150}} component="div">
                <Chip style={{color:fontColor, backgroundColor:backgroundColor}} label={logLossDifFormatted} />
            </Container>
        </Stack>
    );
};
export default TeamRow;