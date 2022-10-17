import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Amr.png"
          alt="An image showing Amr"
          width={300}
          height={300}
        />
      </div>
      <h1>hi, i'm Amr</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
}

export default Hero;
