function Metrics() {
  const Metrics = document.getElementById("Metric");
  const Container = document.createElement("div");
  Container.classList.add("container", "mt-5");

  Container.innerHTML = `
    <h2 class="text-center mb-5">Meet the Team</h2>
    <div class="row gx-5">
      <!-- Team Member 1 -->
      <div class="col-12 col-md-4 text-center">
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Member 1" class="team-image">
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisi sit amet urna iaculis mollis.</p>
        </div>
      </div>

      <!-- Team Member 2 -->
      <div class="col-12 col-md-4 text-center">
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Member 2" class="team-image">
          <h3>Jane Smith</h3>
          <p>Chief Marketing Officer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisi sit amet urna iaculis mollis.</p>
        </div>
      </div>

      <!-- Team Member 3 -->
      <div class="col-12 col-md-4 text-center">
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Member 3" class="team-image">
          <h3>James Johnson</h3>
          <p>Lead Developer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nisi sit amet urna iaculis mollis.</p>
        </div>
      </div>
    </div>
  `;
  Metrics.appendChild(Container);
}
Metrics();
