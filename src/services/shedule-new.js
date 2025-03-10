import { apiConfig } from "./api-config.js";

export async function sheduleNew({ id, name, when }) {
  try {
    //requisição
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        when,
      }),
    });
    alert("agendamento enviado!");
  } catch (error) {
    alert("nao foi possivel agendar");
    console.log("Error:", error);
  }
}
