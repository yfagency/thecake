import styles from '../styles/start.css'
import logo from '../assets/cts_logo.svg'
import bg1 from '../assets/section-1-bg.jpg'
import bg2 from '../assets/section-2-bg.jpg'

export function links() { return [{ rel: 'stylesheet', href: styles }] }

/** @type {MetaFunction} */
export const meta = () => { return [{ title: 'Hydrogen | Start' }] }

/** @param {LoaderFunctionArgs} */
export async function loader() { return null }

export default function Start() {

  if (typeof window !== 'undefined') {
    const sections = document.querySelectorAll(".home__section");
  const navLi = document.querySelectorAll(".home__sideNav ul li");
  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };
  }

  /** @type {LoaderReturnData} */
  return (
    <>
      <div className="home__nav">
        <img src={logo} />
        <div className="home__toggle">
          <div>Make</div>
          <div>Shop</div>
        </div>
        <div className="home__navButtons">
          <div>Sign in</div>
          <div>Sign in</div>
          <div>Cart</div>
        </div>
      </div>
      <div className="home__sideNav">
        <ul>
          <li className="cake active"><a href="#cake">Cake</a></li>
          <li className="make"><a href="#make">Make</a></li>
          <li>Shop</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div id="cake" className="home__section">
        <div className="home__sectionInner">
          <div>
            <h1>the Cake teamspirit</h1>
            <p>Team jerseys are more than attire—they're your team's rallying cry. Celebrate unity, embody spirit, and amplify joy with every pedal. This is why the Cake exist. Belong & have fun. </p>
          </div>
          <div className="home__sectionInnerBtn">
            <div>
              <span>Cake make</span>
              <span>Design & Produce<br />Your Team</span>
            </div>
            <div>
              <span>Cake shop</span>
              <span>Buy & Join<br />Our Team</span>
            </div>
          </div>
        </div>
        <img className="home__bg1" src={bg1} alt="background" />
      </div>
      <div id="make" className="home__section">
        <div className="home__sectionInner">
          <div>
            <h1>the Cake teamspirit</h1>
            <p>Team jerseys are more than attire—they're your team's rallying cry. Celebrate unity, embody spirit, and amplify joy with every pedal. This is why the Cake exist. Belong & have fun. </p>
          </div>
          <div className="home__sectionInnerBtn">
            <div>
              <span>Cake make</span>
              <span>Design & Produce<br />Your Team</span>
            </div>
            <div>
              <span>Cake shop</span>
              <span>Buy & Join<br />Our Team</span>
            </div>
          </div>
        </div>
        <img className="home__bg2" src={bg2} alt="background" />
      </div>
    </>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */