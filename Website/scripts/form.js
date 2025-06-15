document.addEventListener("DOMContentLoaded", function () {
  // === CONTACT PAGE LOGIC ===
  const purposeSelect = document.getElementById("purpose");

  if (purposeSelect) {
    const purposes = [
      { value: "adopt", label: "Adoption Inquiry" },
      { value: "visit", label: "Schedule a Visit" },
      { value: "issue", label: "Report an Issue" },
      { value: "volunteer", label: "Volunteer" },
      { value: "donation", label: "Donation / Support" },
      { value: "other", label: "Other" }
    ];

    purposes.forEach(purpose => {
      const option = document.createElement("option");
      option.value = purpose.value;
      option.textContent = purpose.label;
      purposeSelect.appendChild(option);
    });

    const form = document.getElementById("sessionForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        if (!purposeSelect.value) {
          alert("Please select the purpose of your message.");
          e.preventDefault();
        }
      });
    }
  }

  // === SUBMITTED PAGE LOGIC ===
  const countSpan = document.getElementById("submissionCount");
  if (countSpan) {
    const key = "formSubmissions";
    let count = parseInt(localStorage.getItem(key)) || 0;
    count++;
    localStorage.setItem(key, count);
    countSpan.textContent = count;
  }
});
