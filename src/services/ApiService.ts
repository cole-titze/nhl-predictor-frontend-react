import http from "../http-common";
import { IDateRange } from "../types/DateRange";
import {IGameOdds, ITeam} from "../types/GameOdds";

const getPredictedGamesInDateRange = (localDateRange: IDateRange) => {
  return http.get<Array<IGameOdds>>("/PredictedGame/GetPredictedGamesInDateRange", {params: localDateRange})
}
const getAllTeams = (year: number) => {
  return http.get<Array<ITeam>>("/Team/GetAllTeams", {params: {seasonStartYear: year}})
}

const ApiService = {
  getPredictedGamesInDateRange,
  getAllTeams
};
export default ApiService;
