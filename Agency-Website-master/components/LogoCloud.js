function LogoCloud() {
  const LogoCloud1 = document.getElementById("LogoCloud1");
  const LogoCloud2 = document.getElementById("LogoCloud2");
  const Container1 = document.createElement("div");
  const Container2 = document.createElement("div");
  Container1.classList.add("container", "border-top", "border-bottom", "py-4");
  Container2.classList.add("container");
  Container1.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class=" fw-bold">
               Transaction Masters
              </h1>
              <p class="mt-3">
                We manage all the paperwork and deadlines involved with selling/buying a home. We understand the flow of forms and time sensitive documents. We monitor the entire process and handle all conflict resolutions from the time the seller accepts the offer until both parties have signed the closing paperwork and the buyer walks away with the keys.
              </p>
            </div>
            <div class="btns-group mt-3">
              
              <a class="button btn-theme-2" href="#"
                ><i class="bi bi-play-circle me-2"></i> Watch Video</a
              >
            </div>
          </div>
          <div
            class="mockup-img col-12 col-lg-5 overflow-hidden d-flex justify-content-center"
          >
            <img class="" src="./Images/mockup-mobile1.png" alt="" id="" />
          </div>
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
