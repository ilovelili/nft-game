import { useEffect, useState } from "react";
import "./App.css";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataAction";
import * as s from "./styles/globalStyles";
import RobRenderer from "./components/robRenderer";
import _color from "./assets/images/bg/_color.png";
import { useAppSelector } from "./redux/hooks";
import { useDispatch } from "react-redux";
import config from "./config.json";

function App(): JSX.Element {
  const dispatch = useDispatch();
  const blockchain = useAppSelector((state) => state.blockchain);
  const data = useAppSelector((state) => state.data);
  const [loading, setLoading] = useState(false);

  const mintNFT = (_account: any, _name: any) => {
    setLoading(true);
    blockchain.robToken?.methods
      .createRandomRob(_name)
      .send({
        from: _account,
        value: blockchain.web3?.utils.toWei(config.eth_for_mint, "ether"),
        gasLimit: 300000,
      })
      .once("error", (err) => {
        setLoading(false);
        console.log(err);
      })
      .then((receipt) => {
        setLoading(false);
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
      });
  };

  const levelUpRob = (_account: any, _id: any) => {
    setLoading(true);
    blockchain.robToken?.methods
      .levelUp(_id)
      .send({
        from: _account,
      })
      .once("error", (err) => {
        setLoading(false);
        console.log(err);
      })
      .then((receipt) => {
        setLoading(false);
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
      });
  };

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.robToken !== null) {
      dispatch(fetchData(blockchain.account));
    }
  }, [blockchain.robToken]);

  return (
    <s.Screen image={_color}>
      {blockchain.account === "" || blockchain.robToken === null ? (
        <s.Container flex={1} ai={"center"} jc={"center"}>
          <s.TextTitle>Connect to the game</s.TextTitle>
          <s.SpacerSmall />
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
            }}
          >
            CONNECT
          </button>
          <s.SpacerXSmall />
          {blockchain.errorMsg !== "" ? (
            <s.TextDescription>{blockchain.errorMsg}</s.TextDescription>
          ) : null}
        </s.Container>
      ) : (
        <s.Container ai={"center"} style={{ padding: "24px" }}>
          <s.TextTitle>Welcome to the game</s.TextTitle>
          <s.SpacerSmall />
          <button
            disabled={loading ? true : false}
            onClick={(e) => {
              e.preventDefault();
              mintNFT(blockchain.account, "Unknown");
            }}
          >
            CREATE ROB
          </button>
          <s.SpacerMedium />
          <s.Container jc={"center"} fd={"row"} style={{ flexWrap: "wrap" }}>
            {data.allRobs.map((item, index) => {
              return (
                <s.Container key={index} style={{ padding: "15px" }}>
                  <RobRenderer rob={item} />
                  <s.SpacerXSmall />
                  <s.Container>
                    <s.TextDescription>ID: {item.id}</s.TextDescription>
                    <s.TextDescription>DNA: {item.dna}</s.TextDescription>
                    <s.TextDescription>LEVEL: {item.level}</s.TextDescription>
                    <s.TextDescription>NAME: {item.name}</s.TextDescription>
                    <s.TextDescription>RARITY: {item.rarity}</s.TextDescription>
                    <s.SpacerXSmall />
                    <button
                      disabled={loading ? true : false}
                      onClick={(e) => {
                        e.preventDefault();
                        levelUpRob(blockchain.account, item.id);
                      }}
                    >
                      Level Up
                    </button>
                  </s.Container>
                </s.Container>
              );
            })}
          </s.Container>
        </s.Container>
      )}
    </s.Screen>
  );
}

export default App;
