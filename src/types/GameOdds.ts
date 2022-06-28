export default interface IGameOdds {
    id: number,
    gameDate: Date,
    vegasHomeOdds: number,
    vegasAwayOdds: number,
    modelHomeOdds: number,
    modelAwayOdds: number,
    homeTeam: {
      id: number,
      locationName: string,
      teamName: string,
      logoUri: string
    }
    awayTeam: {
      id: number,
      locationName: string,
      teamName: string,
      logoUri: string
    }
  }
  