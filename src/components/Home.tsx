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
      toast.error("Unsupported Network. This platform is working on Ethereum Network");
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
        <br />
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
          by summoning the ulimate genie! <br /> (there are 10 legendary)
        </p>
        <br />
        <p>1. mint an nft for 0.05 eth</p>
        <p>2. wait for the genie summon </p>
        <p>
          3. if you have a legendary (1 of 10) you win a big prize directly{" "}
          <br /> from the genie quest{" "}
        </p>
      </div>
      <div className="legendary_list">
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
      </div>
      <div className="home_text">
        <p>
          the more minted genines that are common, rare, or <br /> premuium the
          better chance you have at a legendary nft jackpot!
        </p>
        <p>maximum 10 mint per wallet</p>
      </div>
      <div className="starList">
        <img src={telegram} alt="star" className="star" />
        <img src={twitter} alt="star" className="star" />
        <img src={discord} alt="star" className="star" />
      </div>
    </div>
  );
};
export default Home;
