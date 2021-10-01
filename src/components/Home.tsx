import "./home.css";
import btn from "../assets/btn.png";
import discord from "../assets/d.png";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";
import useAuth from "hooks/useAuth";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { truncateWalletString } from "utils";
import toast from "react-hot-toast";
import { purchase } from "utils/contracts";

interface Props {}

const Home: React.SFC<Props> = (props) => {
  const { login } = useAuth();
  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();
  useEffect(() => {
    const isLoggedin =
      account &&
      active &&
      chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
    if (isLoggedin) {
    }
    setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);

  const loginMetaMask = () => {
    login(1);
  };

  const mintTokens = async () => {
    if (!loginStatus) {
      toast.error(
        "Unsupported Network. This platform is working on Ethereum Network"
      );
      return;
    }
    const load_toast_id = toast.loading("Please wait for Mint...");
    try {
      const bSuccess = await purchase(chainId, library.getSigner(), account, 1);
      if (bSuccess) {
        toast.success("Mint Success!");

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        toast.error("Mint Failed!");
      }
    } catch (error) {
      toast.error("Mint Failed!");
    }
    toast.dismiss(load_toast_id);
  };

  return (
    <div className="home">
      <div className="home_body">
        <div className="mintBtns">
          <div className="innerBtn" onClick={loginMetaMask}>
            <img src={btn} className="btnImg" />
            <p
              className={
                loginStatus
                  ? "innerBtnTextL_auth innerBtnTextL"
                  : "innerBtnTextL "
              }
            >
              {loginStatus ? truncateWalletString(account) : "CONNECT"}
            </p>
          </div>

          <div className="innerBtn" onClick={mintTokens}>
            <img src={btn} className="btnImg" />
            <p className="innerBtnTextR">MINT</p>
          </div>
        </div>
        {/* <br /> */}
        <p>
          <strong>
            Genie Quest is the first NFT of its kind. <br /> A lottery NFT with
            an opportunity to win the jackpot!{" "}
          </strong>
        </p>
        <br />
        <p>
          <strong>how does genie quest work?</strong>
        </p>

        <p>
          It’s always about the treasure! Simple way to win the jackpot is by
          summoning the legendary genie s which will grant your wish of riches!
          The legendary Genie is summoned on gold and appears with an iridescent
          background. (There are 10 Legendary Genies)
        </p>
        <br />
        <p>
          1. Connect your wallet to Metamask make sure you are on Ethereum
          network.
        </p>
        <p>2. Press Mint to begin minting a Genie Quest NFT</p>
        <p>
          3.3. Rub the lamp and wait for the NFT minting and transaction to
          process.
        </p>
        <p>
          4. If you mint any legendary (any of the 10) you win a big prize
          directly from the Genie Quest according to the payment schedule.{" "}
        </p>
        <p>5. Join our social communities and share your victorious summon.</p>
        <br />
        <p>
          The more minted Genies that are common, <br /> rare or premium the
          better chance you have at a legendary NFT jackpot! <br /> Maximum 10
          Mint per wallet!
        </p>
      </div>
      <div className="legendary_list">
        <p>legendary #1 minted:$2000</p>
        <p>legendary #2 minted:$3000</p>
        <p>legendary #3 minted:$4000</p>
        <p>legendary #4 minted:$5000</p>
        <p>legendary #5 minted:$6000</p>
        <p>legendary #6 minted:$7000</p>
        <p>legendary #7 minted:$8000</p>
        <p>legendary #8 minted:$9000</p>
        <p>legendary #9 minted:$10000</p>
        <p>legendary #10 minted:$25,000!</p>
      </div>
      <div className="home_text"></div>
      <div className="starList">
        <img src={telegram} alt="star" className="star" />
        <img src={twitter} alt="star" className="star" />
        <img src={discord} alt="star" className="star" />
      </div>
    </div>
  );
};
export default Home;
