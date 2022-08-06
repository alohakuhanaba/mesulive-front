import React from "react";
import classNames from "classnames/bind";
import Box from "~/components/module/Box";
import styles from './EquipSetting.module.scss';
import EquipLevel from './EquipLevel';
import SpareCost from './SpareCost';
import CurrentStar from './CurrentStar';
import TargetStar from './TargetStar';

const cx = classNames.bind(styles);

const EquipSetting = () => {
  return (
    <Box title="장비 정보" id="sim/starforce/EquipSetting">
      <div className={cx("flex-container")}>
        <EquipLevel />
        <SpareCost />
        <CurrentStar />
        <TargetStar />
      </div>
    </Box>
  );
};

export default EquipSetting;
