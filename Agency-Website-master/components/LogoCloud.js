function LogoCloud() {
  const LogoCloud1 = document.getElementById("LogoCloud1");
  const LogoCloud2 = document.getElementById("LogoCloud2");
  const Container1 = document.createElement("div");
  const Container2 = document.createElement("div");
  Container1.classList.add("container", "border-top", "border-bottom", "py-4");
  Container2.classList.add("container");
  Container1.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
>
  <h2 class="title fw-bold">About Us</h2>
  <p class="">
    We are a Southeast Michigan based women owned company specializing in real estate transaction management.
    We have more than 8 years of collective industry experience in handling real estate transactions from contract to close.
    We have successfully closed transactions worth more than $20.M
  </p>
</div>
 
        
  `;
  Container2.innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 gy-5 gx-5">
          <div class="text-body col">
            <h2 class="title fw-bold">Easy integrations with 170+ tools</h2>
            <p class="Description mt-2">
              Connect Landify with your favourite tools that you use daily and
              keep things on track.
            </p>
          </div>
          <div class="content col">
            <img class='img-fluid' src="./Images/mockup-metric06.png" alt="" srcset="" />
          </div>
        </div>
  `;
  LogoCloud1.appendChild(Container1);
  LogoCloud2.appendChild(Container2);
}
LogoCloud();
