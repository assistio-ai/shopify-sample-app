import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import {
   Page
} from "@shopify/polaris";

// [START loader]
export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);

  return json({});
}


export default function Index() {
  // [START page]
  return (
    <Page>
     Hi
    </Page>
  );
  // [END page]
}
