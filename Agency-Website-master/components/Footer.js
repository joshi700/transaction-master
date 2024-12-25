function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row gx-4 gy-5">
          <div class="col-12 col-md-10 left-section ">
            <div class="copyrights mt-4">
              <H2>Contact Us:</H2>
            <div class="badges-items me-3 d-block">
              <H3>248-716-4247</H3>
              <H3>transaction.management.one@gmail.com</H3>
            </div>
          </div>
        </div>
  `;
  Footer.appendChild(Container);
}
Footer();
