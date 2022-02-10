// cards
import { parts } from "../parts/parts";
import _r1 from "../assets/images/rarity/_rarity_1.png";
import _r2 from "../assets/images/rarity/_rarity_2.png";
import _r3 from "../assets/images/rarity/_rarity_3.png";

export interface Robot {
  name: string;
  rarity: number;
  dna: any;
  id?: number;
  level?: number;
}

const nullRobot = {
  name: "",
  rarity: 0,
  dna: null,
};

const RobRenderer = ({
  rob = nullRobot,
  size = 200,
  style,
}: {
  rob?: Robot;
  size?: number;
  style?: any;
}): JSX.Element | null => {
  if (!rob) {
    return null;
  }

  let rarity = _r1;

  if (rob.rarity >= 80) {
    rarity = _r2;
  }

  if (rob.rarity >= 95) {
    rarity = _r3;
  }

  let dnaStr = String(rob.dna);

  while (dnaStr.length < 16) dnaStr = "0" + dnaStr;

  let robDeatils = {
    bg: parseInt(dnaStr.substring(0, 2)) % 5,
    mask: parseInt(dnaStr.substring(2, 4)) % 5,
    line: parseInt(dnaStr.substring(4, 6)) % 5,
    addon: parseInt(dnaStr.substring(6, 8)) % 5,
    addonMouth1: parseInt(dnaStr.substring(8, 10)) % 5,
    addonMouth2: parseInt(dnaStr.substring(10, 12)) % 5,
    addonMouth3: parseInt(dnaStr.substring(12, 14)) % 5,
    name: rob.name,
  };

  const robStyle = {
    width: "100%",
    height: "100%",
    position: "absolute" as "absolute",
  };

  return (
    <div
      style={{
        minWidth: size,
        minHeight: size,
        background: "blue",
        position: "relative",
        ...style,
      }}
    >
      <img alt={"bg"} src={parts.bg[robDeatils.bg]} style={robStyle} />
      <img alt={"mask"} src={parts.mask[robDeatils.mask]} style={robStyle} />
      <img alt={"line"} src={parts.line[robDeatils.line]} style={robStyle} />
      <img alt={"addon"} src={parts.addon[robDeatils.addon]} style={robStyle} />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth1[robDeatils.addonMouth1]}
        style={robStyle}
      />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth2[robDeatils.addonMouth2]}
        style={robStyle}
      />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth3[robDeatils.addonMouth3]}
        style={robStyle}
      />
      <img alt={"rarity"} src={rarity} style={robStyle} />
    </div>
  );
};

export default RobRenderer;
