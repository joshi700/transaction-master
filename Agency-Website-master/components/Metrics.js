function Metrics() {
  const Metrics = document.getElementById("Metric");
  const Container = document.createElement("div");
  Container.classList.add("container", "mt-5");

  Container.innerHTML = `
    <h1 class="text-center mb-5">Meet the Team</h1>
    <div class="row justify-content-center gx-5">
      <!-- Team Member 1 -->
      <div class="col-12 col-md-4 text-center">
        <div class="team-member">
          <img src="/Images/Saylee.jpeg" alt="Member 1" class="team-image">
          <h3>Saylee Mokashi</h3>
          <p>CEO</p>
          <p>Saylee Mokashi is the go-to expert in guiding clients through the often-emotional journey of selling their home or the exciting process of buying their dream home. With a background in hospitality, she excels in providing exceptional customer service. Having lived in four countries, Saylee and her family have made South East Michigan their forever home. Outside of work, she enjoys volunteering as an English language tutor and spending quality time with her husband and young daughter.</p>
        </div>
      </div>

      <!-- Team Member 2 -->
      <div class="col-12 col-md-4 text-center">
        <div class="team-member">
          <img src="/Images/Shraddha.jpg" alt="Member 2" class="team-image">
          <h3>Shraddha Kharsikar</h3>
          <p>Transaction Manager</p>
          <p>Shraddha leverages her Human Resources background to bring exceptional organizational skills, time management, and communication to every real estate transaction. She understands the emotional complexities of buying and selling homes and ensures each process is handled with care and attention. Committed to delivering the best for clients, Shraddha’s approach is rooted in building strong, lasting relationships. Outside of work, she enjoys socializing, cooking, and Bollywood dancing, and has lived in Canton with her family for seven years.</p>
        </div>
      </div>


    </div>
  `;
  Metrics.appendChild(Container);
}
Metrics();
