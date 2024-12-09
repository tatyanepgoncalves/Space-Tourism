import "../../styles/HomePage.scss";

export default function HomePage() {
  return (
    <main className="page home">
      <div className="container">
        <section className="home-text">
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>

        <section className="circle-box">
          <div className="bottom">
            <div className="top">
              <h2>Explore</h2>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
