import GQLAPI from "./testOutput/GQLAPI";
import { Country } from "./testOutput/types";

const gqlApi = new GQLAPI({ gqlEndpoint: "http://localhost:3001/graphql" });

async function test() {
  const res = await gqlApi.query({
    products: {
      args: {
        country: Country.BB,
      },
      returns: {
        name: true,
        _id: true,
      },
    },
    product: {
      args: {
        productId: "635823fbee29d503a6065220",
      },
      returns: {
        name: true,
        _id: true,
        images: true,
        seller: { _id: true, firstName: true },
      },
    },
    // review: {
    //   args: { reviewId: "" },
    //   returns: {
    //     _id: true,
    //     buyer: {
    //       _id: true,
    //     },
    //   },
    // },
  });
  console.log(res);
  // const res2 = await gqlApi.mutation({
  //   updateProduct: {
  //     input: {
  //       updateProductDto: { productId: "" },
  //     },
  //     returns: {
  //       _id: true,
  //       brand: true,
  //     },
  //   },
  // });

  // console.log(res);
}

test();
