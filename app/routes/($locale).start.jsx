import styles from '../styles/start.css'

export function links() { return [{ rel: 'stylesheet', href: styles }] }

/** @type {MetaFunction} */
export const meta = () => { return [{ title: 'Hydrogen | Start' }] }

/** @param {LoaderFunctionArgs} */
export async function loader() { return null }

export default function Start() {
  /** @type {LoaderReturnData} */
  return (
    <div className="start">
      <div>
        <h1>Hello, World!</h1>
        <p>This is a basic HTML page for testing purposes.</p>

        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>

        <a href="https://example.com">Visit Example.com</a>

        <img src="https://cdn.shopify.com/s/files/1/0264/7297/2346/products/unisex-jersey-t-shirt-navy-front-628a172fdbb74.jpg?v=1653217091" alt="Placeholder Image" />
      </div>
    </div>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */