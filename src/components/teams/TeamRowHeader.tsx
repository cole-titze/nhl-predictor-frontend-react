import { Stack, Typography } from '@mui/material';

function TeamRowHeader(): JSX.Element {
    return (
        <Stack spacing={5} direction="row">
            <Typography variant="body1" component="span">
                Id
            </Typography>
            <Typography variant="body1" component="span">
                Logo
            </Typography>
            <Typography variant="body1" component="span">
                Team Name
            </Typography>
            <Typography variant="body1" component="span">
                Vegas Log Loss
            </Typography>
            <Typography variant="body1" component="span">
                Model Log Loss
            </Typography>
        </Stack>
    );
};
export default TeamRowHeader;