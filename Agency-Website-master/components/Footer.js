function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row gx-4 gy-5">
          <div class="col-12 col-md-10 left-section ">
            <div class="copyrights mt-4">
              <p>Contact Us:</p>
            <div class="badges-items me-3 d-block">
              <p>248-716-4247</p>
              <p>transaction.management.one@gmail.com</p>
            </div>
          </div>
        </div>
  `;
  Footer.appendChild(Container);
}
Footer();
