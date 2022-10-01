import http from "../http-common";
import { IDateRange } from "../types/DateRange";
import {IGameOdds} from "../types/GameOdds";

const getAllPredictedGames = () => {
  return http.get<Array<IGameOdds>>("/PredictedGame/GetAllPredictedGames/");
};
const getPredictedGamesInDateRange = (localDateRange: IDateRange) => {
  return http.get<Array<IGameOdds>>("/PredictedGame/GetPredictedGamesInDateRange", {params: localDateRange})
}
const ApiService = {
  getAllPredictedGames,
  getPredictedGamesInDateRange
};
export default ApiService;
