import http from "../http-common";
import {IGameOdds} from "../types/GameOdds";

const getAllPredictedGames = () => {
  return http.get<Array<IGameOdds>>("/PredictedGame/GetAllPredictedGames/");
};
const ApiService = {
  getAllPredictedGames,
};
export default ApiService;
