// import React from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./pages/login/Login";
import MainLayout from "./comp/MainLayout";
import Userlist from "./pages/Userlist/Userlist";
import MarketAnalysis from "./pages/MarketAnalysis/MarketAnalysis";
import ActiveUserList from "./pages/ActiveUserList/ActiveUserList";
import AccountStatement from "./pages/AccountStatement/AccountStatement";
import CurrentBet from "./pages/CurrentBet/CurrentBet";
import ProfitAndLoss from "./pages/ProfitAndLoss/ProfitAndLoss";
import GeneralReport from "./pages/GeneralReport/GeneralReport";
import AnalysisRunningMarket from "./pages/MarketAnalysis/AnalysisRunningMarket";
import AddAccount from "./pages/AddAccount/AddAccount";
import GameReport from "./pages/GameReport/GameReport";
import CasinoReport from "./pages/CasinoReport/CasinoReport";
import CasinoResult from "./pages/CasinoResult/CasinoResult";
import ChangePassword from "./pages/changePassword/ChangePassword";
import BallByBall from "./Casino_New/BallByBall/BallByBall";
import BinaryMarketListMain from "./Casino_New/BinaryMarketList/BinaryMarketListMain";
import BinaryMarketList from "./Casino_New/BinaryMarketList/BinaryMarketList";
import Race20 from "./Casino_New/Race20/Race20";
import Queen from "./Casino_New/Queen/Queen";
import Baccarat from "./Casino_New/Baccarat/Baccarat";
import Baccarat2 from "./Casino_New/Baccarat/Baccarat2";
import Baccarat1 from "./Casino_New/Baccarat/Baccarat1";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/list-clients" element={<Userlist />} />
            <Route path="/active-users" element={<ActiveUserList />} />
            <Route path="/market-analysis" element={<MarketAnalysis />} />
            <Route path="/account-statement" element={<AccountStatement />} />
            <Route path="/current-bet" element={<CurrentBet />} />
            <Route path="/profit-loss" element={<ProfitAndLoss />} />
            <Route path="/general-report" element={<GeneralReport />} />
            <Route path="/analysis-running-market/:id/:matchId" element={<AnalysisRunningMarket />} />
            <Route path="/add-account" element={<AddAccount />} />
            <Route path="/game-report" element={<GameReport />} />
            <Route path="/casino-report" element={<CasinoReport />} />
            <Route path="/casinoresult" element={<CasinoResult />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/casino/ballbyball" element={<BallByBall />} />
            <Route path="/casino/binary" element={<BinaryMarketListMain />} />
            <Route path="/binary/show" element={<BinaryMarketList />} />
            <Route path="/casino/race20" element={<Race20 />} />
            <Route path="/casino/queen" element={<Queen />} />
            <Route path="/casino/baccaratlist" element={<Baccarat />} />
            <Route path="/casino/baccarat2" element={<Baccarat2 />} />
            <Route path="/casino/baccarat" element={<Baccarat1 />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
