import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { createPropery } from "../../Slices/PropertySlice";
import { fetchCountries } from "../../Slices/CountrySlice";
import { fetchPropertyFeature } from "../../Slices/PropertFeatureSlice";
import { fetchCities } from "../../Slices/CitySlice";
import { fetchDistricts } from "../../Slices/DistrictSlice";
import { fetchRooms } from "../../Slices/RoomSlice";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Create() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countryReducer);
  const { cities } = useSelector((state) => state.cityReducer);
  const { districts } = useSelector((state) => state.districtReducer);
  const { rooms } = useSelector((state) => state.roomReducer);
  const { propertyFeatures } = useSelector(
    (state) => state.propertyFeatureReducer
  );

  const propertyType = {
    Sale: 0,
    Rent: 1,
  };

  const [formData, setFormData] = useState({
    county: null,
    city: null,
    district: null,
    propertyType: propertyType.Sale,
    propertyFeatures: [],
    price: null,
    room: null,
    title: "",
  });

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchPropertyFeature());
    dispatch(fetchRooms());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //   useEffect(() => {
  //     console.log("Atii", formData);
  //   }, [formData]);

  const handleCreate = () => {
    var payload = {
      propertyType: formData.propertyType,
      price: formData.price,
      propertyFeatures: formData.propertyFeatures,
      districtId: formData.district?.key,
      roomId: formData.room?.id,
      title: formData.title,
    };

    dispatch(createPropery(payload));
  };

  const handleCountryChange = (event, value) => {
    setFormData({ ...formData, county: value, city: null, district: null });
    if (value?.key) dispatch(fetchCities(value.key));
  };

  const handleCityChange = (event, value) => {
    setFormData({ ...formData, city: value, district: null });
    if (value?.key) dispatch(fetchDistricts(value.key));
  };

  const handleDistrictChange = (event, value) => {
    setFormData({ ...formData, district: value });
  };

  const handlePropertyTypeChange = (event, value) => {
    setFormData({ ...formData, propertyType: Number(value) });
  };

  const handlePropertyFeatureChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      propertyFeatures: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handlePriceChange = (event) => {
    const {
      target: { value },
    } = event;
    if (value === "") setFormData({ ...formData, price: null });
    else setFormData({ ...formData, price: value });
  };

  const handleTitleChange = (event) => {
    const {
      target: { value },
    } = event;
    if (value === "") setFormData({ ...formData, title: null });
    else setFormData({ ...formData, title: value });
  };

  const handleRoomChange = (event, value) => {
    setFormData({ ...formData, room: value });
  };

  return (
    <Card variant="outlined">
      <CardHeader title={"Create Property"} />
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item>
            <FormControl>
              <FormLabel>Property Type</FormLabel>
              <RadioGroup
                row
                name="property-type-buttons-group"
                value={formData.propertyType}
                onChange={handlePropertyTypeChange}
              >
                <FormControlLabel value={0} control={<Radio />} label="Sale" />
                <FormControlLabel value={1} control={<Radio />} label="Rent" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item width={500}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              value={formData.title}
              onChange={handleTitleChange}
            />
          </Grid>
          <Grid item width={500}>
            <Autocomplete
              value={formData.county}
              fullWidth
              disablePortal
              options={countries}
              getOptionLabel={(option) => option.value}
              renderInput={(params) => (
                <TextField {...params} label="Country" />
              )}
              onChange={handleCountryChange}
            />
          </Grid>
          <Grid item width={500}>
            <Autocomplete
              value={formData.city}
              fullWidth
              disablePortal
              options={cities}
              getOptionLabel={(option) => option.value}
              renderInput={(params) => <TextField {...params} label="City" />}
              onChange={handleCityChange}
            />
          </Grid>
          <Grid item width={500}>
            <Autocomplete
              value={formData.district}
              fullWidth
              disablePortal
              options={districts}
              getOptionLabel={(option) => option.value}
              renderInput={(params) => (
                <TextField {...params} label="District" />
              )}
              onChange={handleDistrictChange}
            />
          </Grid>
          <Grid item width={500}>
            <FormControl fullWidth>
              <InputLabel id="property-features-checkbox-label">
                Property Feature
              </InputLabel>
              <Select
                labelId="property-features-checkbox-label"
                multiple
                value={formData.propertyFeatures}
                onChange={handlePropertyFeatureChange}
                input={<OutlinedInput label="Property Feature" />}
                renderValue={(selected) =>
                  selected.map((s) => s.value).join(", ")
                }
                MenuProps={MenuProps}
              >
                {propertyFeatures.map((feature) => (
                  <MenuItem key={feature.id} value={feature}>
                    <Checkbox
                      checked={formData.propertyFeatures.indexOf(feature) > -1}
                    />
                    <ListItemText primary={feature.value} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item width={500}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
              <OutlinedInput
                value={formData.price}
                type="number"
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">₺</InputAdornment>
                }
                label="Amount Min"
                onChange={handlePriceChange}
              />
            </FormControl>
          </Grid>

          <Grid item width={500}>
            <Autocomplete
              value={formData.room}
              fullWidth
              disablePortal
              options={rooms}
              getOptionLabel={(option) => option.value}
              renderInput={(params) => <TextField {...params} label="Room" />}
              onChange={handleRoomChange}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Button onClick={handleCreate} variant="outlined">
              Create
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
