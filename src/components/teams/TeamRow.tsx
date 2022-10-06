import { ITeam } from '../../types/GameOdds'
import { Stack, Typography } from '@mui/material';

interface IProps{
    team: ITeam
}
function TeamRow(props: IProps): JSX.Element {
    return (
        <Stack spacing={5} direction="row">
            <Typography variant="body1" component="span">
                {props.team.id}
            </Typography>
            <img className="team-image"
            src={props.team.logoUri}
            alt={props.team.locationName}
            />
            <Typography variant="body1" component="span">
                {props.team.teamName}
            </Typography>
            <Typography variant="body1" component="span">
                {props.team.vegasLogLoss.toFixed(3)}
            </Typography>
            <Typography variant="body1" component="span">
                {props.team.modelLogLoss.toFixed(3)}
            </Typography>
        </Stack>
    );
};
export default TeamRow;