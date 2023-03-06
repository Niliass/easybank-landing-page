import { useState } from "react";
import { services } from "../Data";

const Services = () => {
  const [data, setData] = useState(services);
  return (
    <section className="services">
      <div className="container">
        <div className="services__head">
          <h2 className="services__title">Why choose Easybank?</h2>
          <p className="services__desc">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="services__content">
          {data &&
            data.map(({ title, img, content }, idx) => {
              return (
                <div className="service" key={idx}>
                  <img
                    src={img}
                    alt="services image"
                    className="service__img"
                  />
                  <h3 className="service__title">{title}</h3>
                  <p className="service__desc">{content}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Services;
