import { useRecoilValue } from "recoil";
import { lightAtom } from "../atoms";
import { ITickers } from "../interfaces";

function ChangeDataOfTime(timeRange: String, coin: ITickers, isLight: Boolean ) {
    let themeTextColor = isLight ? "black" : "white";
    let value;
    switch (timeRange) {
      
      case "1d":
        value = coin.quotes.USD.percent_change_24h;
        break;
      case "7d":
        value = coin.quotes.USD.percent_change_7d;
        break;
      case "30d":
        value = coin.quotes.USD.percent_change_30d;
        break;
      default:
        value = coin.quotes.USD.percent_change_1h;
        break;
    }
  
    let color = value > 0 ? "green" : value < 0 ? "red" : themeTextColor;
    let style = { color: color };

    return <div style={style}>{value > 0 ? "+" : null}{value} %</div>;

  };  

  export default ChangeDataOfTime;