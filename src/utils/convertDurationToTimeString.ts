export function convertDurationToTimeString(duration: number){ //duration recebida em segundos
    const hours = Math.floor(duration/(60 * 60))
    const minutes = Math.floor(duration % 3600 / 60)
    const seconds = duration % 60

    const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0')) //caso o valor tenha apenas um caracter, ele adiciona um 0 na frente
    .join(':') 

    return timeString;
}