import {NavLink} from '@remix-run/react'
import styles from '../styles/start.css'
import logo from '../assets/cts_logo.svg'
import bg1 from '../assets/section-1-bg.jpg'
import bg2 from '../assets/section-2-bg.jpg'
import bg3 from '../assets/section-3-bg.jpg'
import bg4 from '../assets/section-4-bg.jpg'
import bg5 from '../assets/section-5-bg.jpg'
import Button from '../components/Button'

export function links() { return [{ rel: 'stylesheet', href: styles }] }

/** @type {MetaFunction} */
export const meta = () => { return [{ title: 'Hydrogen | Start' }] }

/** @param {LoaderFunctionArgs} */
export async function loader() { return null }

export default function Start() {

  if (typeof window !== 'undefined') {
    const sections = document.querySelectorAll(".home__heroSection");
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
          <div><NavLink to="#make">Make</NavLink></div>
          <div><NavLink to="/">Shop</NavLink></div>
        </div>
        <div className="home__navButtons">
          <div>Sign in</div>
          <div>Sign in</div>
          <div>Cart</div>
        </div>
      </div>
      <div className="home__sideNav">
        <ul>
          <li className="cake active"><NavLink to="#cake">Cake</NavLink></li>
          <li className="make"><NavLink to="#make">Make</NavLink></li>
          <li className="shop"><NavLink to="#shop">Shop</NavLink></li>
          <li className="faq"><NavLink to="#faq">FAQ</NavLink></li>
          <li className="contact"><NavLink to="#contact">Contact</NavLink></li>
        </ul>
      </div>
      <div id="cake" className="home__heroSection">
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
      <div id="make" className="home__heroSection">
        <div className="home__sectionInner">
          <div>
            <h1>Make your team</h1>
            <p>Manger, Club owner, Team player ~ design your new team look starting by Jersey and Bib. The accessories follow. What is your team all about.</p>
          </div>
          <div className="home__sectionInnerBtn2">
            <div>
              <Button>Tell us all about your team</Button>
              <span>Step by step form to decipher your ne look.</span>
            </div>
          </div>
        </div>
        <img className="home__bg2" src={bg2} alt="background" />
      </div>
      <div id="shop" className="home__heroSection">
        <div className="home__sectionInner">
          <div>
            <h1>Shop Our Teams</h1>
            <p>We love Jerseys, what they represents. Effort, belonging, team spirit. We designed our own jerseys as the representation of the teams. Check the Cake teams, and buy into the team. Ride the flag with Cake.</p>
          </div>
          <div className="home__sectionInnerBtn2">
            <div>
              <Button>The Cake Jersey Shop</Button>
              <span>Ready Made Cake Team Jerseys.</span>
            </div>
          </div>
        </div>
        <img className="home__bg2" src={bg3} alt="background" />
      </div>
      <div id="faq" className="home__heroSection">
        <div className="home__sectionInner">
          <div>
            <h1>What is it All about</h1>
            <p>Many questions, want to nwo about process, rules, what not? Want to know more, check the FAQ and discover.</p>
          </div>
          <div className="home__sectionInnerBtn2">
            <div>
              <Button>Check the FAQ page</Button>
              <span>Teh collection of answers.</span>
            </div>
          </div>
        </div>
        <img className="home__bg2" src={bg4} alt="background" />
      </div>
      <div id="contact" className="home__heroSection">
        <div className="home__sectionInner">
          <div>
            <h1>Reach out to cake</h1>
            <p>Want to reach out, check on something, ask question? We have your back.</p>
          </div>
          <div className="home__sectionInnerBtn2">
            <div>
              <Button>Drop us a message</Button>
              <span>We will come back to you.</span>
            </div>
          </div>
        </div>
        <img className="home__bg2" src={bg5} alt="background" />
      </div>
    </>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */