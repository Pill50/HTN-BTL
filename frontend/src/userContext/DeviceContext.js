import React, { useState, createContext, useCallback } from "react";
import AuthenticationAPI from "./AuthenticationContext";
const DeviceListAPI = createContext();
export function DeviceContext({ children }) {
  const [deviceList, setDeviceList] = useState([]);
  const { userDbId } = React.useContext(AuthenticationAPI);
  const getDevices = () => {
    if (userDbId != "") {
      fetch("http://192.168.1.12:3333/getdevices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userDbId: userDbId,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) setDeviceList(data);
        });
    }
  };

  React.useEffect(() => {
    getDevices();
  }, [userDbId]);

  return (
    <DeviceListAPI.Provider
      value={{
        deviceList,
        setDeviceList,
      }}
    >
      {children}
    </DeviceListAPI.Provider>
  );
}

export default DeviceListAPI;
