function LogoCloud() {
  const LogoCloud1 = document.getElementById("LogoCloud1");
  const LogoCloud2 = document.getElementById("LogoCloud2");

  const Container1 = document.createElement("div");
  const Container2 = document.createElement("div");

  // Styling for the first container
  Container1.classList.add("container", "border-top", "border-bottom", "py-5");
  Container2.classList.add("container", "py-5");

  Container1.innerHTML = `
    <div class="text-body text-center">
      <!-- About Us Section -->
      <h2 class="title fw-bold mb-4">About Us</h2>
      <p>
        We are a Southeast Michigan-based women-owned company specializing in real estate transaction management.
        With over 8 years of collective industry experience, we have handled real estate transactions from contract to close.
        We have successfully closed transactions worth more than $20 million.
      </p>

      <!-- Why Hire Transaction Masters Section -->
      <h2 class="title fw-bold mb-4">Why Hire Transaction Masters?</h2>
      <p class="lead mb-4">
        Hiring and training an employee to handle transaction management is expensive (between $30,000 to $50,000 in salary) and time-consuming.
        Employees must be trained and paid regardless of business conditions, and payroll and taxes can be complex, especially for small businesses.
      </p>

      <!-- Benefits List -->
      <div class="why-hire-list">
        <h3 class="fw-bold mb-3">Hiring Transaction Masters will:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Save you time & money.</li>
          <li class="list-group-item">Allow you to focus on clients, lead generation, contract negotiation, and showing properties.</li>
          <li class="list-group-item">Help you maintain your work-life balance while building your business.</li>
        </ul>
      </div>
    </div>
  `;

  // Styling for the second container
  Container2.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 gx-5">
      <!-- Text and Description Section -->
      <div class="col text-center text-md-start">
        <h2 class="title fw-bold mb-4">Easy integrations with 170+ tools</h2>
        <p class="Description">
          Connect Landify with your favorite tools that you use daily and keep things on track.
        </p>
      </div>
      
      <!-- Image Section -->
      <div class="col text-center">
        <img class="img-fluid" src="./Images/mockup-metric06.png" alt="Mockup of tools integration" />
      </div>
    </div>
  `;

  LogoCloud1.appendChild(Container1);
  LogoCloud2.appendChild(Container2);
}

LogoCloud();
