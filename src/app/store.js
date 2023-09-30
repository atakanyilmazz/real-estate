import { configureStore } from "@reduxjs/toolkit";
import PropertySlice from "../Slices/PropertySlice";
import CountrySlice from "../Slices/CountrySlice";
import DistrictSlice from "../Slices/DistrictSlice";
import CitySlice from "../Slices/CitySlice";
import PropertFeatureSlice from "../Slices/PropertFeatureSlice";
import RoomSlice from "../Slices/RoomSlice";

export const store = configureStore({
  reducer: {
    propertyReducer: PropertySlice,
    countryReducer: CountrySlice,
    cityReducer: CitySlice,
    districtReducer: DistrictSlice,
    propertyFeatureReducer: PropertFeatureSlice,
    roomReducer: RoomSlice,
  },
});
