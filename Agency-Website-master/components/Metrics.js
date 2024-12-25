function Metrics() {
  const Metrics = document.getElementById("Metric");
  const Container = document.createElement("div");
  Container.classList.add("container", "mt-5");

  Container.innerHTML = `
    <h1 class="text-center mb-5">Meet the Team</h1>
    <div class="row gx-5">
      <!-- Team Member 1 -->
      <div class="col-12 col-md-4 text-center">
        <div class="team-member">
          <img src="/Images/john-doe-circle.webp" alt="Member 1" class="team-image">
          <h3>Saylee Mokashi</h3>
          <p>CEO & Founder</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisi sit amet urna iaculis mollis.</p>
        </div>
      </div>

      <!-- Team Member 2 -->
      <div class="col-12 col-md-4 text-center">
        <div class="team-member">
          <img src="/Images/john-doe-circle.webp" alt="Member 2" class="team-image">
          <h3>Shraddha</h3>
          <p>Chief Marketing Officer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisi sit amet urna iaculis mollis.</p>
        </div>
      </div>


    </div>
  `;
  Metrics.appendChild(Container);
}
Metrics();
