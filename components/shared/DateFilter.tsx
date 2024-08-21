// components/shared/DateFilter.tsx

"use client"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { format, addDays } from "date-fns";

const DateFilter = () => {
  const [dates, setDates] = useState<string[]>([]); 
  const [selectedDate, setSelectedDate] = useState<string | null>(null); 
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const daysToShow = 30; // Number of days to show in the filter
      const dateList = [];

      for (let i = 0; i < daysToShow; i++) {
        const nextDate = addDays(today, i);
        dateList.push(format(nextDate, "yyyy-MM-dd"));
      }

      setDates(dateList);
    };

    generateDates();
  }, []);

  const onSelectDate = (date: string | null) => {
    setSelectedDate(date);

    let newUrl = "";

    if (date) {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "date",
        value: date,
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["date"],
      });
    }

    router.push(newUrl, { scroll: false });
  };

  const onSelectAllDates = () => {
    setSelectedDate(null);
    const newUrl = removeKeysFromQuery({
      params: searchParams.toString(),
      keysToRemove: ["date"],
    });
    router.push(newUrl, { scroll: false });
  };

  return (
    <Select onValueChange={(value) => onSelectDate(value === "all-dates" ? null : value)}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Select Date">{selectedDate ? selectedDate : "Select Date"}</SelectValue>
      </SelectTrigger>
      <SelectContent className="p-regular-14">
        <SelectItem value="all-dates" className="select-item p-regular-14">
          All Dates
        </SelectItem>
        {dates.map((date) => (
          <SelectItem key={date} value={date} className="select-item p-regular-14">
            {date}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DateFilter;
