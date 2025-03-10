import { apiConfig } from "./api-config.js"

export async function sheduleCancel({ id }) {
  try {
    
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE"
    })

    alert("Cancelado com sucesso!")
  } catch (error) {
    console.log("erro:" + error)
    alert("Não foi possível cancelar o agendamento")
  }
}