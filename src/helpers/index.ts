export const isLoggedIn = true

export function getFutureDate (days : number, startDate? : Date | null) : Date {
    /**
     * Get the date object for a number days in the future
     * 
     * @param days : the number of days in the future
     * @param startDate?: the date to start from
     */
    const futureDay = startDate ? new Date(startDate)  : new Date();
    futureDay.setDate(futureDay.getDate() + days );
    futureDay.setSeconds(0); futureDay.setMinutes(0); futureDay.setHours(0); futureDay.setMilliseconds(0)
    return futureDay;
}

