import axios, { AxiosError } from "axios";
import GQLAPI, { FetchingFunction } from "./testOutput/GQLAPI";
import { Country } from "./testOutput/types";

const fetchingFunction: FetchingFunction = async (query) => {
  try {
    const { data } = await axios.post("http://localhost:3001/graphql", {
      query,
    });
    if (data.errors && data.errors.length > 0) {
      throw new Error(data.errors[0].message);
    }
    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        if (error.response.data.errors && error.response.data.errors.length > 0)
          throw new Error(error.response.data.errors[0].message);
        else if (error.response.data) throw new Error(error.response.data);
        else throw new Error(error.message);
      } else {
        throw new Error(error.message);
      }
    } else if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

const gqlApi = new GQLAPI(fetchingFunction);

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
    sar: {}, // This is not part of Queries but no error is being shown
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
    review: {
      args: { reviewId: "" },
      returns: {
        _id: true,
        buyer: {
          _id: true,
        },
      },
    },
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
