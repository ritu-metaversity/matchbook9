import CardComp from "../CardComp/CardComp";
const CardOnVideo= ({ t1 }) => {
  return (
    <div className="card_shown_on_top">
      <div className="text-white player_name">Player A</div>
      <div className="cards_container">
        <CardComp shown={t1.C1 != "1"} card={t1.C1 || "1"} />
        <CardComp shown={t1.C2 != "1"} card={t1.C2 || "1"} />
        <CardComp shown={t1.C3 != "1"} card={t1.C3 || "1"} />
      </div>
      <div className="text-white player_name">Player B</div>
      <div className="cards_container">
        <CardComp shown={t1.C4 != "1"} card={t1.C4 || "1"} />
        <CardComp shown={t1.C5 != "1"} card={t1.C5 || "1"} />
        <CardComp shown={t1.C6 != "1"} card={t1.C6 || "1"} />
      </div>
    </div>
  );
};

export default CardOnVideo;
