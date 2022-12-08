import { useState, useEffect } from "react";
import axios from "axios"

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  //Sets the day
  const setDay = day => setState({...state, day});

  //Gets and sets the number of interview spots remaining for the day
  const updateSpots = function(state, appointments){

    const currentDay = state.days.find(day => day.name === state.day);

    const emptyAppointmentsForDay = currentDay.appointments.filter((id) => !appointments[id].interview);

    const emptySpots = emptyAppointmentsForDay.length;

    const updatedDay = {...currentDay, spots: emptySpots};

    const updatedDays = state.days.map(day => day.name === state.day ? updatedDay : day)

    return updatedDays

}
//Makes a request to the server for the day, appointment, and interview data
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, []);

//Updates database when user books interview
  const bookInterview = function(id, interview) {
      
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(state, appointments)

    return axios.put(`/api/appointments/${id}`, {interview})
      .then(() => {
        setState(prev => ({...prev, appointments, days}))
      })
  };
//Updates database when user cancels interview
  const deleteInterview = function(id) {
      
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(state, appointments)

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setState(prev => ({...prev, appointments, days}))
      })
  };

  return {
    state,
    setDay,
    bookInterview,
    deleteInterview
  }
};