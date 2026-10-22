import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [recording, setRecording] = useState(null);
  const [meetings, setMeetings] = useState([]);
  const [meeting, setMeeting] = useState([]);
  const [meetingData, setMeetingData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const addMeeting = (meetingData) => {
    setMeetings((prev) => [
      ...prev,
      {
        ...meetingData,
        id: Date.now(),
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  const updateRecording = (blob) => {
    const url = URL.createObjectURL(blob);
    setRecording({
      url,
      blob,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        recording,
        updateRecording,
        meetings,
        addMeeting,
        meeting,
        setMeeting,
        loading,
        setLoading,
        fetchingData,
        setFetchingData,
        meetingData,
        setMeetingData,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
