// Customized schedule data based on your requirements
const scheduleData = {
  Monday: [
    "Morning: Daily Full-Stack Development Practice and GitHub Commit (1 hour)",
    "Afternoon: University Discussion Forum for English (1 hour)",
  ],
  Tuesday: [
    "Morning: Daily Full-Stack Development Practice and GitHub Commit (1 hour)",
    "Afternoon: University Discussion Forum for Databases (2 hours)",
  ],
  Wednesday: [
    "Morning: Daily Full-Stack Development Practice and GitHub Commit (1 hour)",
    "Afternoon: University Databases Programming Assignment (2-3 hours)",
  ],
  Thursday: [
    "Morning: Daily Full-Stack Development Practice and GitHub Commit (1 hour)",
    "Afternoon: University English Writing Assignment (1 hour)",
  ],
  Friday: [
    "Morning: Daily Full-Stack Development Practice and GitHub Commit (1 hour)",
    "Afternoon: University Learning Journals for Both Courses (2-3 hours)",
  ],
  Saturday: [
    "Morning: Daily Full-Stack Development Practice and GitHub Commit (1 hour)",
    "Afternoon: Python Course 1, Module 1 (1 hour)",
  ],
  Sunday: [
    "Morning: Daily Full-Stack Development Practice and GitHub Commit (1 hour)",
    "Afternoon: Python Course 1, Module 2 (1 hour)",
  ],
  // Continue adding activities for the remaining days...
};

// Function to display the schedule
function displaySchedule() {
  const main = document.querySelector("main");
  let scheduleHTML = "";

  for (const day in scheduleData) {
    scheduleHTML += `
            <div class="day">
                <h2>${day}</h2>
                <ul>
                    ${scheduleData[day]
                      .map((activity) => `<li>${activity}</li>`)
                      .join("")}
                </ul>
            </div>
        `;
  }

  main.innerHTML = scheduleHTML;
}

// Call the displaySchedule function when the page loads
window.addEventListener("load", displaySchedule);
