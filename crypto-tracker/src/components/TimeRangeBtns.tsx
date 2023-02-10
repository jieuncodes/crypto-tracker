import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";
import { timeRangeAtom } from "../atoms";

export const BtnsBox = tw.div`flex w-full justify-end`;
export const Btns = tw.div`-mr-3 mb-3 w-64 p-2 h-10 flex flex-row text-lg justify-around rounded-2xl border-solid border-2  border-gray-300 align-middle items-center`;
export const Time = tw.div`flex justify-center align-middle w-14 h-8 rounded-2xl hover:bg-gray-300 pt-[2px]`;

function TimeRangeBtns() {
  const timeRange = useRecoilValue(timeRangeAtom);

  return (
    <BtnsBox>
      <Btns>
        <Time>1H</Time>
        <Time>1D</Time>
        <Time>7D</Time>
        <Time>30D</Time>
      </Btns>
    </BtnsBox>
  );
}
export default TimeRangeBtns;
