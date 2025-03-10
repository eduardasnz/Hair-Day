import { hoursLoad } from "../form/hours-loud.js";
import { scheduleFetchByDay } from "../../services/shedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";

// seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay(){
  // obter a data
  const date = selectedDate.value
  
  // buscar agendamentos na API
  const dailySchedules = await scheduleFetchByDay({ date })

  // exibir (no site) os agendamentos
  schedulesShow({ dailySchedules })

  // Renderizar horas disponiveis
  hoursLoad({ date, dailySchedules })
}