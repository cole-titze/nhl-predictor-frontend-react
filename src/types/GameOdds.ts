export enum TEAM {
  home = 0,
  away = 1
}

export interface ITeam{
  id: number,
  locationName: string,
  teamName: string,
  logoUri: string,
  vegasOdds: number,
  modelOdds: number,
  goals: number
  team: TEAM
}

export interface IGameOdds {
    id: number,
    gameDate: Date,
    homeTeam: ITeam,
    awayTeam: ITeam,
    winner: TEAM,
    hasBeenPlayed: boolean
  }