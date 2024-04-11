import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import ButtonGroup from "@mui/material/ButtonGroup";
import RadioGroup from "@mui/material/RadioGroup";

/**
 * In taking the comments inside the const, must use the comment format
 */
// This Comment -> {/* */}

//Main Page
const HW = ({ name, num1, num2 }) => {
  return (
    <div style={StylesSet.divMainCenter}>
      <View style={StylesSet.testView}>
        <Text>Using React Native with MUI{'\n'}This is Text : Hello, {name}</Text>
        <Text>
          Elementary Math {num1} - {num2} = {num1 - num2}
        </Text>
        <Text>Im Backend but Noob at Frontend, <i style={{ color: 'red', fontWeight : 'bold'}} >Help</i></Text>
      </View>

      {/*Button*/}
      <Button variant="contained">This is Button</Button>

      {/*Button But Disabled*/}
      <Button variant="contained" disabled>
        Disabled Button
      </Button>

      {/*Radio Group*/}
      <FormControl>
        <FormLabel id="radio-button-butOn-Row">Gender</FormLabel>
        <RadioGroup
        row
        aria-labelledby="radio-button-butOn-Row"
        name="row-radio-buttons-group"
        >
            <FormControlLabel value="Male" control={<Radio />} label="Male"/>
            <FormControlLabel value="Female" control={<Radio />} label="Female"/>
            <FormControlLabel value="someAlienBinaries" disabled control={<Radio />} label="LGTV🏳️‍⚧️"/>
        </RadioGroup>
      </FormControl>

      {/*Button Group*/}
      <ButtonGroup size="small" aria-label="Small button Group">
        <Button variant="contained" key="1">1 is Contained</Button>
        <Button key="2">2 isnt</Button>
        <Button key="3" disabled>and 3 is Disabled</Button>
      </ButtonGroup>

      {/*CheckBox Group*/}
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="DefaultChecked"
        />
        <FormControlLabel
          required
          control={<Checkbox />}
          label="RequiredChecked"
        />
        <FormControlLabel
          disabled
          control={<Checkbox />}
          label="DisabledCheck"
        />
      </FormGroup>
    </div>
  );
};

//CSS View
const StylesSet = StyleSheet.create({
  testView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  centerButton: {
    alignItems: "center",
  },

  navbarMain: {
    margin: 0,
    padding: 0,
  },

  divMainCenter: {
    margin: "auto",
    width: "50%",
    border: "3px solid green",
    padding: "10px",
  },
});

export default HW;
