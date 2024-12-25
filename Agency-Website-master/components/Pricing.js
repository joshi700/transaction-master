function createPricingTable(title, price, duration, features, description, index) {
  return `
    <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
      <div class="inner-box overflow-hidden position-relative">
        <div class="title">${title}</div>
        <div class="price">
          $${price} <span class="duration">${duration}</span>
        </div>
        <div class="table-content">
          <ul>
            ${features.map(feature => `<li><span><i class="bi bi-check2"></i>${feature}</span></li>`).join('')}
          </ul>
        </div>
        <div class="table-footer">
          <button class="button btn-theme-1" onclick="openModal(${index})">View Details</button>
        </div>
      </div>
    </div>
  `;
}

function Pricing() {
  const pricingContainer = document.getElementById("Pricing");
  const container = document.createElement("div");
  container.classList.add("container");

  const pricingData = [
    {
      title: "Listing Coordinator",
      price: 200,
      duration: "",
      features: [
        "Prepare property for MLS listing",
        "Schedule and upload photos",
        "Upload photos (agent's photographer)",
        "Order sign installation"
      ],
      Description: [""]
    },
    {
      title: "Standard",
      price: 300,
      duration: "",
      features: [
        "Confirm document completion & submission", 
        "Review agreement, send docs to title", 
        "Track EMD & check overage", 
        "Coordinate with title, lender, agent, client",
      ],
      description: "",
    },
    {
      title: "Extended",
      price: 799,
      duration: "/ monthly",
      features: [
        "1 job posting",
        "0 featured job",
        "Job displayed for 20 days",
        "Premium Support 24/7"
      ],
      description: "Extended features and premium support for those who need long-term visibility and assistance.",
    }
  ];

  container.innerHTML = `
    <div class="text-body d-flex flex-column align-items-center">
      <h2 class="text-center fw-bold">Pricing Packages</h2>
      <p class="text-center">
        Connect Landify with your favourite tools that you use daily and
        keep things on track.
      </p>
    </div>
    <div class="row mt-5">
      ${pricingData.map((data, index) => createPricingTable(data.title, data.price, data.duration, data.features, data.description, index)).join('')}
    </div>
  `;
  
  pricingContainer.appendChild(container);

  // Add the modal HTML structure to the page
  document.body.innerHTML += `
    <div id="pricingModal" class="pricing-modal">
      <div class="modal-content">
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <h2 id="modalTitle"></h2>
        <p id="modalDescription"></p>
      </div>
    </div>
  `;
}

function openModal(index) {
  const pricingData = [
    {
      title: "Listing Coordinator",
      features: [
        "Prepare and upload disclosures",
        "Verify MLS listing accuracy",
        "Prepare showing instructions",
        "Create and deliver brochures",
        "Place shoe signs and boot covers"
      ],
      description: ["Prepare and upload disclosures",
        "Verify MLS listing accuracy",
        "Prepare showing instructions",
        "Create and deliver brochures",
        "Place shoe signs and boot covers"]
    },
    {
      title: "Standard",
      features: [],
      description:["Provide inspection recommendations to agents/clients", 
  "Send inspection info to client", 
  "Follow up post-inspection with client/agent", 
  "Execute inspection addendum, send to title/lender", 
  "Track loan progress with lender", 
  "Send appraisal info to client", 
  "Review title work", 
  "Follow up on appraisal results", 
  "Track loan progress - clear to close", 
  "Schedule closing, send invites", 
  "Send utility transfer info to client", 
  "Schedule final water read (sellers)", 
  "Review & email settlement statements", 
  "Review & email settlement docs", 
  "Follow up on escrow closings", 
  "Coordinate key exchange (if occupancy)", 
  "Submit final water bill & key exchange to title"
]
    },
    {
      title: "Extended",
      features: [],
      description: "Extended features and premium support for those who need long-term visibility and assistance."
    }
  ];

  const modal = document.getElementById("pricingModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  const data = pricingData[index];
  modalTitle.innerText = data.title;

  // If the description is a string (like in Standard and Extended), just display it
  if (typeof data.description === 'string') {
    modalDescription.innerHTML = `<p>${data.description}</p>`;
  } else {
    // If there are features (like in Listing Coordinator), display them in a list format
    modalDescription.innerHTML = `
      <ul>
        ${data.features.map(feature => `<li><span><i class="bi bi-check2"></i>${feature}</span></li>`).join('')}
      </ul>
    `;
  }

  modal.style.display = "block";
}


function closeModal() {
  const modal = document.getElementById("pricingModal");
  modal.style.display = "none";
}

Pricing();
