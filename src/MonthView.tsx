// 7 Tage
//

import {useMemo} from "react";

enum WeekDay {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}

function sundayBasedWeekdayToMondayBasedWeekday(sunWD: number): number {
    if (sunWD < 0 || sunWD > 6) {
        throw new Error("Invalid Week Day!")
    } else if (sunWD > 0) {
        return sunWD - 1;
    } else {
        return 6
    }
}

function mondayBasedWeekdayToSundayBasedWeekday(monWD: number): number {
    if (monWD < 0 || monWD > 6) {
        throw new Error("Invalid Week Day!")
    }
    else if(monWD === 6) {
        return 0;
    } else {
        return monWD  + 1
    }
}

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(year: number, monthIndex: number): number {
    if (monthIndex === 1 && isLeapYear(year)) {
        return 29;
    }
    return DAYS_IN_MONTH[monthIndex];
}

function getDayOfWeek(year: number, monthNo: number, day: number): number {
    // Adjustment: For Jan and Feb, treat them as months 13 and 14 of the PREVIOUS year
    const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];

    // Create a local copy of year to modify
    let y = year;

    if (monthNo < 3) {
        y -= 1;
    }

    return (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[monthNo - 1] + day) % 7; //dayOfWeek
}

type DayProps = {
    no: number;
    month: string;
}

function Day({}: DayProps) {
    return
    <div>

    </div>
}

function weeksInMonth(year: number, monthNo: number, weekStartsOn: WeekDay = WeekDay.Sunday): number {
    const totalDays = getDaysInMonth(year, monthNo - 1);
    const firstDayWeekday = getDayOfWeek(year, monthNo - 1, 1);
    const offset = (firstDayWeekday - weekStartsOn + 7) % 7;
    return Math.ceil((totalDays + offset) / 7);
}

type MonthViewProps = {
    monthNo: number;
    year: number;
}

export function MonthView({monthNo, year} : MonthViewProps) {
    let days = useMemo(() => getDaysInMonth(year, monthNo), [monthNo, year])


    return <div
        className="grid grid-cols-[repeat(7, 1fr)] gap-[1px] auto-rows-fr min-h-[300px] min-w-[300px]"
    >

    </div>
}