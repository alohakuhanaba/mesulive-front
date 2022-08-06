import React from "react";
import Input from "~/components/module/Input";
import { useStarforce, useStarforceAction } from "~/lib/hooks/redux/starforce";
import { filterValue, sliceString } from "~/lib/utils";

const EquipLevel = () => {
  const equipLevel = useStarforce((s) => s.equipInfo.equipLevel);
  const errorMessage = useStarforce((s) => s.errorMessage.equipLevel);
  const { setEquipLevel } = useStarforceAction();

  return (
    <Input
      id="sim/starforce/equip-level"
      label="장비 레벨"
      endAdornment="Lev"
      type="number"
      value={filterValue(equipLevel, undefined, "")}
      error={errorMessage !== ""}
      helperText={errorMessage}
      handleChange={({ target: { value } }) => {
        if (value === "") {
          setEquipLevel(undefined);
        } else {
          const level = parseInt(sliceString(value, 4), 10);
          setEquipLevel(level);
        }
      }}
    />
  );
};

export default EquipLevel;
