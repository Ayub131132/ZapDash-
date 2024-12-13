let points = 0;
let userId = localStorage.getItem("userId") || `user_${Date.now()}`;
let checkinDone = localStorage.getItem(`checkin_${userId}`) === "true";

// Initialize the referral link
const referralLink = `${window.location.origin}?referral=${userId}`;
document.getElementById("referralLink").textContent = referralLink;

// Function to switch tabs
function switchTab(tab) {
  document.querySelectorAll(".tab-content").forEach((tabContent) => {
    tabContent.style.display = "none";
  });
  document.getElementById(`${tab}Tab`).style.display = "block";
}

// Increment points and show animation
function incrementPoints() {
  points++;
  document.getElementById("points").textContent = `${points} points`;

  const animation = document.createElement("div");
  animation.className = "floating-animation";
  animation.textContent = "+1";
  document.getElementById("animations").appendChild(animation);

  setTimeout(() => {
    animation.remove();
  }, 1000);
}

// Copy referral link
function copyReferralLink() {
  navigator.clipboard.writeText(referralLink).then(() => {
    const notification = document.getElementById("notificationBanner");
    notification.style.display = "block";
    setTimeout(() => (notification.style.display = "none"), 1500);
  });
}

// Complete a task and earn points
function completeTask(taskName) {
  points += 100000;
  alert(`Task "${taskName}" completed! You earned 100,000 points.`);
  document.getElementById("points").textContent = `${points} points`;
}

// Default Tab
switchTab("home");