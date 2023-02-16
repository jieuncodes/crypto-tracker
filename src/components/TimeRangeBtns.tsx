import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { timeRangeAtom } from "../atoms";
import { Btns, BtnsBox, Time } from "../styles/Coins";


function TimeRangeBtns() {
  const [timeRange, setTimeRange] = useRecoilState(timeRangeAtom);
  const onClick = (event:React.MouseEvent) => {
    setTimeRange(event.currentTarget.id);
    console.log('timeRange', timeRange);
  }

  return (
    <BtnsBox>
      <Btns>
        <Time id="1h" onClick={onClick}>1H</Time>
        <Time id="1d" onClick={onClick}>1D</Time>
        <Time id="7d" onClick={onClick}>7D</Time>
        <Time id="30d" onClick={onClick}>30D</Time>
      </Btns>
    </BtnsBox>
  );
}
export default TimeRangeBtns;
