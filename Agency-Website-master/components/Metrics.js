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
          <img src="/Images/john-doe-circle.webp" alt="Member 1" class="team-image">
          <h3>Saylee Mokashi</h3>
          <p>CEO & Transaction Manager</p>
          <p>Saylee is the go-to person who helps the clients to guide them through the often-emotional process of selling their beloved home and/or the exciting process of buying their dream home. With a background in hospitality, Saylee truly understands the importance of providing outstanding customer service.

After having lived in four countries over the past several years, Saylee and her family have chosen beautiful South East Michigan to be their forever home. When she is not working, Saylee volunteers as an English language tutor and loves to spend quality time with her husband and young daughter.</p>
        </div>
      </div>

      <!-- Team Member 2 -->
      <div class="col-12 col-md-4 text-center">
        <div class="team-member">
          <img src="/Images/john-doe-circle.webp" alt="Member 2" class="team-image">
          <h3>Shraddha Kharsikar</h3>
          <p>Transaction Coordinator</p>
          <p>Coming from a Human Resources background, Shraddha brings in her experience of excellent organisation skills, time management and multitasking skills. She deeply understands that strong and incessant communication is the key to any successful relationship.Buying and Selling home is an extremely emotional experience for every person which needs to be handled with personal touch. Shraddha firmly believes in "what goes around, comes around" and hence she gives the best to our clients. 
Shraddha is gregarious and loves to socialize. In her spare time, she likes to try out new recipes and enjoys bollywood dancing. From last seven years, she lives in Canton with her loving husband and young son. </p>
        </div>
      </div>


    </div>
  `;
  Metrics.appendChild(Container);
}
Metrics();
