import "./App.css";
// import msg2 from "./assets/msg2.png";
import btn from "./assets/btn.png";
import text from "./assets/text.png";
import text0 from "./assets/text0.png";
// import star1 from "./assets/star1.png";
import discord from "./assets/d.png";
import twitter from "./assets/twitter.png";
import telegram from "./assets/telegram.png";
// import close from "./assets/close.png";
function App() {
  return (
    <div className="App">
      <div className="msgConatiner">
        <div className="btn">
          <div style={{ display: "flex" }}>
            <div className="innerBtn">
              <img src={btn} className="btnImg" />
              <p className="innerBtnText">CONNECT</p>
            </div>

            <div className="innerBtn">
              <img src={btn} className="btnImg" />
              <p className="innerBtnText">MINT</p>
            </div>
          </div>

          <p>
            <strong>GENIE QUEST IS THE first nft</strong>
          </p>
          <br />
          <p>
            <strong>how does genie quest work</strong>
          </p>
          <br />
          <p>
            it's always about the treasure! simple way to win the jackpot <br />{" "}
            by summoning the ulimate genie! <br /> (there are 10 legendary and 1
            ultimate genie's in the quest )
          </p>
          <br />
          <p>1. mint an nft for 0.05 eth</p>
          <p>2. wait for the genie summon </p>
          <p>
            3. if you have a legendary (1 of 10) you win a big prize directly{" "}
            <br /> from the genie quest{" "}
          </p>

          <div className="mint">
            <p>legendary #1 minted:$1500</p>
            <p>legendary #1 minted:$2000</p>
            <p>legendary #1 minted:$3000</p>
            <p>legendary #1 minted:$4000</p>
            <p>legendary #1 minted:$5000</p>
            <p>legendary #1 minted:$6000</p>
            <p>legendary #1 minted:$7000</p>
            <p>legendary #1 minted:$8000</p>
            <p>legendary #1 minted:$9000</p>
            <p>legendary #1 minted:$25,000!</p>
            <p>ultimate legendary #1 minted:$50,000!!</p>
            <div className="innerMint">
              <p>
                the more minted genines that are common, rare, or <br />{" "}
                premuium the better chance you have at a legendary nft jackpot!
              </p>
              <p>maximum 10 mint per wallet</p>
              <img src={text0} alt="text" className="emptyText" />
            </div>
          </div>
        </div>
        <div className="starList">
          <img src={telegram} alt="star" className="star" />
          <img src={twitter} alt="star" className="star" />
          <img src={discord} alt="star" className="star" />
        </div>
        {/* <img src={close} className="close" /> */}
      </div>
    </div>
  );
}

export default App;
