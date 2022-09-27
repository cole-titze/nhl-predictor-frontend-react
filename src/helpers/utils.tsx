export function convertToLocalTime(gameDate: Date): string{
    let utcDateString = gameDate.toString()+"Z";
    let utcDate = new Date(utcDateString);
    let timeZone = utcDate.toLocaleDateString('en-US', {
        day: '2-digit',
        timeZoneName: 'short',
      }).slice(4);
    let date = utcDate.toLocaleDateString("en-US")
    let time = utcDate.toLocaleTimeString();
    console.log(timeZone);

    return date + " " + time + " " + timeZone;
}
export function convertDecimalToPercentString(decimal: number): string{
    return (decimal*100).toFixed(2) + "%";
}

export function convertDecimalToAmericanString(decimal: number): string{
    let percent = decimal * 100;
    let americanOdds = 0;
    if( percent < 50 )
        americanOdds = (10000/percent) - 100;
    else if(percent >= 50)
        americanOdds = (100*percent)/(percent-100)

    return americanOdds.toFixed(2);
}