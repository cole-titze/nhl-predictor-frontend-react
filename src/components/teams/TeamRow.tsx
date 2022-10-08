import { ITeam } from '../../types/GameOdds'
import { Stack, Typography, Container } from '@mui/material';

interface IProps{
    team: ITeam
}
function TeamRow(props: IProps): JSX.Element {
    return (
        <Stack spacing={5} direction="row">
            <Typography className="center-content" sx={{width: 10}} variant="body1" component="div">
                {props.team.id}
            </Typography>
            <Container sx={{width: 50}} component="div">
                <img className="team-image center-content"
                src={props.team.logoUri}
                alt={props.team.locationName}
                />
            </Container>
            <Typography sx={{width: 125}} variant="body1" component="div">
                {props.team.teamName}
            </Typography>
            <Typography className="center-content" sx={{width: 150}} variant="body1" component="div">
                {props.team.modelLogLoss.toFixed(4)}
            </Typography>
            <Typography className="center-content"  sx={{width: 150}} variant="body1" component="div">
                {props.team.vegasLogLoss.toFixed(4)}
            </Typography>
            <Typography className="center-content" sx={{width: 100}} variant="body1" component="div">
                {(props.team.modelLogLoss - props.team.vegasLogLoss).toFixed(4)}
            </Typography>
        </Stack>
    );
};
export default TeamRow;