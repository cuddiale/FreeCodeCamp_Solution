# parses and returns the hours from any time string in the format "HH:MM..."
def getHours(timeString):
    return int(timeString[:timeString.index(':')])

# parses and returns the minutes from any time string in the format "HH:MM..."
def getMinutes(timeString):
    return int(timeString[timeString.index(':')+1:timeString.index(':')+3])

# returns a formatted string of width 2 adding extra "0"s on the left side if needed
def padTime(time):
    return str(time).rjust(2,'0')

# sums up any two time strings in format "HH:MM..." returning a the summed hours and summed minutes in a tuple (HH, MM)
def calculateTime(start, duration):
    start_hours=getHours(start)
    start_minutes=getMinutes(start)
    duration_hours=getHours(duration)
    duration_minutes= getMinutes(duration)

    # Convert start time to 24-hour military time format
    if 'pm' in start.lower() and start_hours != 12:
        start_hours += 12
    elif start_hours == 12:
        start_hours -= 12 # 0

    hours = start_hours + duration_hours
    minutes = start_minutes+ duration_minutes
        
    hours += minutes // 60
    minutes %= 60

    return hours, minutes


def add_time(start="12:00 AM", duration='00:30', day=''):
    
    WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if len(day)>2:
        day = day.capitalize()
        # day = day[0].upper() + (day.lower())[1:]
    
    new_day = ''
    numberOfDaysLater=0

    # pm = ('pm' in start.lower())

    hours_sum, minutes_sum = calculateTime(start, duration)

    numberOfDaysLater += hours_sum // 24
    hours_sum %= 24

    pm_new = hours_sum >=12
    if pm_new and hours_sum>12:
        hours_sum -= 12
    elif hours_sum == 0:
        hours_sum += 12 # 12

    if(day in WEEKDAYS):
        new_day = WEEKDAYS[(WEEKDAYS.index(day) + numberOfDaysLater) % len(WEEKDAYS)]
    
    new_time = f"{hours_sum}:{padTime(minutes_sum)}"
    
    output = f"{new_time} {'PM' if pm_new else 'AM'}{', '+new_day if day!='' else ''}{'' if numberOfDaysLater==0 else ' (next day)' if numberOfDaysLater == 1 else ' ('+str(numberOfDaysLater)+' days later)'}"
    #print('-',start,',', duration,',', day, ':\n', output)

    return output


# Tests
if __name__ == '__main__':
    print(add_time('3:30 PM', '2:12'),'\n'+ add_time('2:59 AM', '24:00', 'saturDay'),'\n'+ add_time('11:59 PM', '24:05', 'Wednesday'),'\n'+ add_time('8:16 PM', '466:02', 'tuesday'))
    # outputs:
    # 5:42 PM
    # 2:59 AM, Sunday (next day)
    # 12:04 AM, Friday (2 days later)
    # 6:18 AM, Monday (20 days later)

# My Python solution to the fCC Scientific Computing with Python (Beta) Build a Time Calculator project challenge, 
# Written by me Rami Al-Saadi in the 13th and 14th of June 2024
