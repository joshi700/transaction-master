function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body d-flex flex-column align-items-center">
          <h2 class="text-center fw-bold">Pricing Packages</h2>
          <p class="text-center">
            Connect Landify with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>
        <div class="row mt-5">
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">Listing Coordinator</div>
              <div class="price">
                $200 <span class="duration"></span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>Prepare property for listing in MLS using Transaction Master’s listing input sheet</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Schedule photos - sorting and uploading (using Transaction Master’s preferred photographer)</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Disclosure preparation & uploads, check compliance</span
                    >
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Live listing to MLS - check accuracy of listing on third party websites
                    </span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="profile1.html" class="button btn-theme-1">View Details</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="pricing-table position-relative tagged col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <span class="tag bg-primary-300">Recommended</span>
              <div class="title">Standard</div>
              <div class="price">
                $499 <span class="duration">/ monthly</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>1 job posting</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>0 featured job</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Job displayed for 20
                      days</span
                    >
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Premium Support 24/7
                    </span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">Extended</div>
              <div class="price">
                $799 <span class="duration">/ monthly</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>1 job posting</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>0 featured job</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Job displayed for 20
                      days</span
                    >
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Premium Support 24/7
                    </span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
        </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();
