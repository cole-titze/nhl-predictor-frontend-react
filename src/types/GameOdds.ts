export interface ITeam{
  id: number,
  locationName: string,
  teamName: string,
  logoUri: string,
  vegasOdds: number,
  modelOdds: number
}

export interface IGameOdds {
    id: number,
    gameDate: Date,
    homeTeam: ITeam
    awayTeam: ITeam
  }