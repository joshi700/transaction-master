function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row gx-4 gy-5">
          <div class="col-12 col-md-10 left-section ">
            <div class="brand-logo">
            </div>
            <div class="nav-links d-flex flex-column mt-4">
            </div>
            <div class="copyrights mt-4">
              © 2025 <a class='text-decoration-underline' href="">Transaction Master</a> Theme. All rights reserved
            </div>
          </div>
          <div class="col-12 col-md-2 badges">
            <p>Contact Details:</p>
            <div class="badges-items me-3 d-block">
            <p>Saylee Mokashi XXX-XXX-XXXX</p>
            </div>
          </div>
        </div>
  `;
  Footer.appendChild(Container);
}
Footer();
