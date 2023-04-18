import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyACFdJ95aNNqMcKet0GNnMwSCgva2Y-8Ds",
  version: "weekly",
  libraries: ["places"],
});
export default loader;
