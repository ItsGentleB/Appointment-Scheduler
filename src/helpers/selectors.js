//Gets all appointments for the chosen day
export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.filter(days => days.name === day);

  if (filteredDay.length === 0) {
    return filteredDay;
  }

  const filteredAppointments = filteredDay[0].appointments;

  const daysAppointments = filteredAppointments.map(appointment => {
    return state.appointments[appointment];
  });

  return daysAppointments;
}

//Gets data for a specific interview
export function getInterview(state, interview) {
  
  if(!interview) {
    return null
  }

  const interviewer = state.interviewers[interview.interviewer];

  return {...interview, interviewer}
}

//Get all interviewers for the chosen day
export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.filter(days => days.name === day);

  if (filteredDay.length === 0) {
    return filteredDay;
  }

  const filteredInterviewers = filteredDay[0].interviewers;

  const interviewers = filteredInterviewers.map(id => {
    return state.interviewers[id];
  });

  return interviewers;
  
}
