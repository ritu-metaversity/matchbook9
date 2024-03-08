import { Col, Row } from "antd";
import "./AnalysisRunningMarket.scss";
import MatchOdss from "./MatchOdss/MatchOdss";
import TopHeader from "./TopHeader/TopHeader";
import Bookamker from "./Bookamker/Bookamker";
import Fancy from "./Fancy/Fancy";
import { useOddsDataQuery } from "../../store/service/betfairApiServices";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Rightside from "./Right/Rightside";
import {
  useFancyPnlQuery,
  useOddsPnlQuery,
} from "../../store/service/gameListService";

const AnalysisRunningMarket = () => {
  const [state, setState] = useState({
    activeFancySlower: {},
    preFancyOdds: undefined,
    bookmakerOdd: [],
    bookmakerToss: [],
    originBookMaker: [],
    prvbookmakerOdd: undefined,
    preBookmakerToss: [],
    preMatchOdds: [],
    matchOdd: [],
    activeFancy: [],
  });

  const { matchId } = useParams();

  // Api Calling
  const { data } = useOddsDataQuery(matchId, { pollingInterval: 1000 });
  const { data: oddPnl } = useOddsPnlQuery(
    { matchId },
    { pollingInterval: 5000 }
  );
  const { data: fancyPnl } = useFancyPnlQuery(
    { matchId },
    { pollingInterval: 5000 }
  );

  useEffect(() => {
    if (data) {
      const newBookmakerOdd =
        data?.Bookmaker?.map((item, index) => ({
          ...(state.activeFancySlower?.Bookmaker
            ? state.activeFancySlower?.Bookmaker[index] || {}
            : {}),
          ...item,
        })) || [];

      setState((prevState) => ({
        ...prevState,
        bookmakerOdd: data?.Bookmaker || [],
        bookmakerToss: newBookmakerOdd.filter((item) => item.t === "TOSS"),
        originBookMaker: newBookmakerOdd.filter((item) => item.t !== "TOSS"),
        prvbookmakerOdd: prevState.originBookMaker.length
          ? [...prevState.originBookMaker]
          : prevState.bookmakerOdd.filter((item) => item.t !== "TOSS"),
        preBookmakerToss: prevState.bookmakerToss.length
          ? [...prevState.bookmakerToss]
          : prevState.bookmakerOdd.filter((item) => item.t === "TOSS"),
        matchOdd:
          data?.Odds.map((item, index) => ({
            ...(state.activeFancySlower?.Odds
              ? state.activeFancySlower?.Odds[index] || {}
              : {}),
            ...item,
          })) || [],
        preMatchOdds: prevState.matchOdd.length
          ? [...prevState.matchOdd]
          : data?.Odds || [],
        preFancyOdds: prevState.activeFancy.length
          ? [...prevState.activeFancy]
          : { ...data, Odds: undefined },
      }));
      const newResponse = { ...data };
      for (let i in data) {
        if (!["Odds"].includes(i)) {
          newResponse[i] = data[i].map((single, index) => ({
            ...(state.activeFancySlower[i]
              ? state.activeFancySlower[i].find(
                  (odd) => odd.sid === single.sid
                ) || {}
              : {}),
            ...single,
          }));
        }
      }
      setState((prevState) => ({
        ...prevState,
        activeFancy: newResponse,
      }));
    }
  }, [data]);

  console.log(state?.originBookMaker, "sdfghj");

  return (
    <div className="listing-grid">
      <TopHeader />
      <Row>
        <Col className="main-content" xs={16} lg={16}>
          {state?.matchOdd?.map((match, index) => (
            <MatchOdss
              key={index}
              currentOdd={match}
              prevOdds={state?.preMatchOdds[index]}
              oddsPnl={oddPnl?.data}
            />
          ))}

          {state?.originBookMaker?.length != 0 && (
            <Bookamker
              currentOdd={state?.originBookMaker}
              prevOdds={state?.prvbookmakerOdd}
              oddsPnl={oddPnl?.data}
            />
          )}

          <Row style={{ gap: "0px 34px" }}>
            {Object.keys(state?.activeFancy)?.length > 0 &&
              state?.activeFancy &&
              Object.keys(state?.activeFancy).map((keys) => {
                if (
                  ["BallByBall", "Fancy2", "Fancy3", "OddEven"].includes(
                    keys
                  ) &&
                  state?.activeFancy[keys]?.length
                ) {
                  return (
                    <>
                      <Fancy
                        currentOdd={state?.activeFancy[keys]}
                        prevOdds={state?.preFancyOdds[keys]}
                        title={keys}
                        fancyPnl={fancyPnl?.data}
                      />
                    </>
                  );
                } else return "";
              })}
          </Row>
        </Col>
        <Col className="sidebar-right" xs={8} lg={8}>
          <Rightside matchId={matchId} />
        </Col>
      </Row>
    </div>
  );
};

export default AnalysisRunningMarket;
