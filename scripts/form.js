document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Set last modified date
  const lastMod = document.getElementById("lastModified");
  if (lastMod) {
    lastMod.textContent = `Last Modified: ${document.lastModified}`;
  }

  // Products array
  const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  const productSelect = document.querySelector('select[name="product"]');
  if (productSelect) {
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a product";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    productSelect.appendChild(defaultOption);

    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = `${product.name} (Avg Rating: ${product.averagerating})`;
      productSelect.appendChild(option);
    });
  }

  // Form validation on submit
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    const featureCheckboxes = form.querySelectorAll('input[name="features"]:checked');
    const ratingSelected = form.querySelector('input[name="rating"]:checked');
    const productSelected = form.querySelector('select[name="product"]').value;

    if (!productSelected) {
      alert("Please choose a product.");
      event.preventDefault();
      return;
    }

    if (!ratingSelected) {
      alert("Please give a rating.");
      event.preventDefault();
      return;
    }

    if (featureCheckboxes.length === 0) {
      alert("Please select at least one feature you found useful.");
      event.preventDefault();
      return;
    }

    // Optional: confirmation
    const confirmSubmit = confirm("Are you sure you want to post this review?");
    if (!confirmSubmit) {
      event.preventDefault();
    }
  });
});

