export const usePostCreationTime = (param) => {
  // Get the current time
  const currentTime = new Date();

  // Parse the given timestamp
  const uploadTime = new Date(param);

  // Calculate the time difference in milliseconds
  const timeDiff = currentTime - uploadTime;

  // Convert milliseconds to minutes, hours, days, months, and years
  const minutesDiff = Math.floor(timeDiff / (1000 * 60));
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const monthsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

  // Generate the appropriate output string
  let output = "";
  if (yearsDiff > 0) {
    output = yearsDiff + " years ago";
  } else if (monthsDiff > 0) {
    output = monthsDiff + " months ago";
  } else if (daysDiff > 0) {
    output = daysDiff + " days ago";
  } else if (hoursDiff > 0) {
    output = hoursDiff + " hours ago";
  } else if (minutesDiff > 0) {
    output = minutesDiff + " minutes ago";
  } else {
    output = "Just now";
  }

  return output;
};
