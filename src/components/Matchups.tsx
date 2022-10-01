import { IGameOdds } from '../types/GameOdds'
import { Grid } from '@mui/material';
import TeamCard from './TeamCard';
import AtCard from './AtCard';
import ScoreCard from './ScoreCard';

interface IProps{
    matchups: IGameOdds[]
}
function Matchups(props: IProps): JSX.Element {
    return (
        <Grid container sx={{ direction:"column", alignItems:"center", justify:"center" }}>
        {props.matchups.map(( {id, gameDate, winner, hasBeenPlayed, homeTeam, awayTeam }) => {
        return (
        <Grid container key={id} className="matchup-row">        
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
            <TeamCard team={awayTeam} winner={winner} hasBeenPlayed={hasBeenPlayed}/>
            </Grid>
            <Grid item xs={2}>
                <ScoreCard homeGoals={homeTeam.goals} awayGoals={awayTeam.goals} hasBeenPlayed={hasBeenPlayed}/>
                <AtCard gameDate={gameDate}/>
            </Grid>
            <Grid item xs={3}>
            <TeamCard team={homeTeam} winner={winner} hasBeenPlayed={hasBeenPlayed}/>
            </Grid>
            <Grid item xs={2}></Grid>
            </Grid>
            )
        }
    )}
        </Grid>
    )
};
export default Matchups;