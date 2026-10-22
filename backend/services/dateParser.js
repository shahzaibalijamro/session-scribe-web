// export const parseDueDate = (dueDateString, meetingCreatedAt) => {
//   if (!dueDateString) return null;
  
//   const now = new Date(meetingCreatedAt);
//   const lowerDue = dueDateString.toLowerCase().trim();
  
//   if (lowerDue.includes('tomorrow')) {
//     const tomorrow = new Date(now);
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     return tomorrow;
//   }
  
//   if (lowerDue.includes('next week')) {
//     const nextWeek = new Date(now);
//     nextWeek.setDate(nextWeek.getDate() + 7);
//     return nextWeek;
//   }
  
//   if (lowerDue.includes('monday') || lowerDue.includes('tuesday') || 
//       lowerDue.includes('wednesday') || lowerDue.includes('thursday') || 
//       lowerDue.includes('friday')) {
//     const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
//     const targetDay = days.findIndex(day => lowerDue.includes(day));
//     if (targetDay !== -1) {
//       const nextDate = new Date(now);
//       const daysUntilTarget = (targetDay - nextDate.getDay() + 7) % 7;
//       nextDate.setDate(nextDate.getDate() + (daysUntilTarget === 0 ? 7 : daysUntilTarget));
//       return nextDate;
//     }
//   }
  
//   try {
//     const parsed = new Date(dueDateString);
//     if (!isNaN(parsed.getTime())) {
//       return parsed;
//     }
//   } catch (error) {
//     console.log('Could not parse date:', dueDateString);
//   }
  
//   return null;
// };


export const parseDueDate = (dueDateString, meetingCreatedAt) => {
  if (!dueDateString) return null;
  
  const now = new Date(meetingCreatedAt);
  const lowerDue = dueDateString.toLowerCase().trim();
  
  console.log(`🔍 Parsing standardized due date: "${dueDateString}"`);
  
  switch (lowerDue) {
    case 'today':
      const today = new Date(now);
      today.setHours(23, 59, 59, 999); // End of today
      console.log(`✅ Parsed "today" as ${today.toDateString()}`);
      return today;
      
    case 'tomorrow':
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(23, 59, 59, 999); // End of tomorrow
      console.log(`✅ Parsed "tomorrow" as ${tomorrow.toDateString()}`);
      return tomorrow;
      
    case 'next week':
      const nextWeek = new Date(now);
      nextWeek.setDate(nextWeek.getDate() + 7);
      nextWeek.setHours(17, 0, 0, 0); // Default to 5 PM
      console.log(`✅ Parsed "next week" as ${nextWeek.toDateString()}`);
      return nextWeek;
      
    case 'monday':
    case 'tuesday': 
    case 'wednesday':
    case 'thursday':
    case 'friday':
    case 'saturday':
    case 'sunday':
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const targetDayIndex = days.indexOf(lowerDue);
      const currentDayIndex = now.getDay();
      
      let daysUntilTarget = targetDayIndex - currentDayIndex;
      if (daysUntilTarget <= 0) {
        daysUntilTarget += 7; // Next occurrence
      }
      
      const targetDate = new Date(now);
      targetDate.setDate(targetDate.getDate() + daysUntilTarget);
      targetDate.setHours(17, 0, 0, 0); // Default to 5 PM
      
      console.log(`✅ Parsed "${lowerDue}" as ${targetDate.toDateString()}`);
      return targetDate;
      
    default:
      // Try to parse as ISO date (YYYY-MM-DD)
      const isoDateMatch = dueDateString.match(/^\d{4}-\d{2}-\d{2}$/);
      if (isoDateMatch) {
        const parsed = new Date(dueDateString + 'T17:00:00'); // Default to 5 PM
        console.log(`✅ Parsed ISO date "${dueDateString}" as ${parsed.toDateString()}`);
        return parsed;
      }
      
      console.log(`❌ Unrecognized date format: "${dueDateString}"`);
      return null;
  }
};