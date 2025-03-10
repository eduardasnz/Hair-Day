import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours")

export function hoursLoad( { date, dailySchedules }){ 

  // limpar a lista de horarios
  hours.innerHTML = ""

  // obtem a lista de todos horarios ocupados
  const unavailableHours = dailySchedules.map((schedule) => 
    dayjs(schedule.when).format("HH:mm"))


  // percorrendo todos os horarios
  const opening = openingHours.map((hour) => {

    // pegar somente a hora
    const [scheduleHour] = hour.split(":");
    
    // verificar se a hora esta no passado 
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
    
    const avaliable = !unavailableHours.includes(hour) && !isHourPast
    
    return {
      hour,
      avaliable
    } 
  })

  // renderizar os horarios
  opening.forEach(({hour, avaliable}) => {
    const li = document.createElement("li")
    
    li.classList.add("hour")
    li.classList.add(avaliable ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if (hour === "9:00") {
      HourHeaderAdd("Manhã")
    } else if (hour === "13:00") {
      HourHeaderAdd("Tarde")
    } else if (hour === "18:00"){
      HourHeaderAdd("Noite")
    }


    hours.append(li)

  })

  // chamar hoursclick
  hoursClick()
}

function HourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)

}