import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tooltip from "./Tooltip";
import luksword from "../../imges/luksword.png";
import nine from "../../imges/nine.png";
import stonesw from "../../imges/stonesw.png";

function TabPanel(props) {
  const { children, value, index, equipment,...other } = props;
  // handleoutfit = () => {

  // }
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="武器" {...a11yProps(0)} />
          <Tab label="鎧甲" {...a11yProps(1)} />
          <Tab label="頭飾" {...a11yProps(2)} />
          <Tab label="鞋子" {...a11yProps(3)} />
          <Tab label="披肩" {...a11yProps(4)} />
          <Tab label="裝飾品" {...a11yProps(5)} />
          <Tab label="卡片" {...a11yProps(6)} />
          <Tab label="寵物" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="flex">
          <Tooltip
            text="幸運短劍 LUK:5  完迴:20"
            className="p-2 w-16 h-16 border-2 rounded-md m-2"
          >
            <img className="w-full h-full" src={luksword} alt="" />
          </Tooltip>
          <Tooltip
            text="太九連[2] 完迴:10"
            className="p-2 w-16 h-16 border-2 rounded-md m-2"
          >
            <img className="w-full h-full" src={nine} alt="" />
          </Tooltip>
          <Tooltip
            text="石中劍 LUK:5"
            className="p-2 w-16 h-16 border-2 rounded-md m-2"
          >
            <img className="w-full h-full" src={stonesw} alt="" />
          </Tooltip>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        鎧甲
      </TabPanel>
      <TabPanel value={value} index={2}>
        頭飾
      </TabPanel>
      <TabPanel value={value} index={3}>
        鞋子
      </TabPanel>
      <TabPanel value={value} index={4}>
        披肩
      </TabPanel>
      <TabPanel value={value} index={5}>
        裝飾品
      </TabPanel>
      <TabPanel value={value} index={6}>
        卡片
      </TabPanel>
      <TabPanel value={value} index={7}>
        寵物
      </TabPanel>
    </Box>
  );
}
