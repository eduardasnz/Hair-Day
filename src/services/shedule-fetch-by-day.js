import dayjs from "dayjs";
import { apiConfig } from "./api-config";
export async function scheduleFetchByDay({ date }){
  try {
    // fazendo requisição
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)

    // converter para json
    const data = await response.json()

    // filtrar agendamento por dia
    const dailyschedule = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    )

    return dailyschedule;

  } catch (error) {
  console.log(error);
   alert("nao foi possivel ver os agendamentos") 
  }
}