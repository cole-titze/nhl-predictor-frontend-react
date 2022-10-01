import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";
import { IGameOdds } from "../types/GameOdds";
import { IDateRange } from "../types/DateRange";
import Matchups from "./Matchups";
import DateRangePicker from "./DateRangePicker";
import { getDefaultDateRange } from "../helpers/dateUtils";

const Tutorial: React.FC = () => {
  const [matchupList, setMatchups] = useState<Array<IGameOdds>>([]);
  const [dateRange, setDateRange] = useState<IDateRange>(getDefaultDateRange());

  const updateGameOdds = (newDateRange: IDateRange): void => {
    setDateRange(newDateRange);
  }
  const getGameOdds = (dateRange: IDateRange) => {
      ApiService.getPredictedGamesInDateRange(dateRange)
      .then((response: any) => {
        setMatchups(response.data.value);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  // Get games with different dateRanges
  useEffect(() => {
    getGameOdds(dateRange);
  }, [dateRange]);

  return ( 
  <div>
    <h1>Matchups</h1>
    <DateRangePicker dateRange={dateRange} onChange={updateGameOdds}/>
    <Matchups matchups={matchupList}/>
  </div>
);
};
export default Tutorial;
