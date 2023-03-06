const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__img">
          <img src="./images/image-mockups.png" alt="intro image" />
        </div>
        <div className="intro__info">
          <h1 className="intro__title">Next generation digital banking</h1>
          <p className="intro__desc">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="invite__btn">Request Invite</button>
        </div>
      </div>
      <div className="intro__bg">
        <img
          src="./images/bg-intro-desktop.svg"
          alt="intro background"
          className="intro__bg--desk"
        />
        <img
          src="./images/bg-intro-mobile.svg"
          alt="intro background"
          className="intro__bg--mob"
        />
      </div>
    </section>
  );
};

export default Intro;
