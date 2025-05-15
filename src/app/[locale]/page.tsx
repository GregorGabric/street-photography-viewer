// import { OrderBy } from "unsplash-js";

// Since we're using query parameters that are only
// known at request time, make sure we're using
// dynamic rendering (i.e. no SSG).
// export const dynamic = "force-dynamic";

// type Props = {
//   searchParams?: {
//     orderBy?: OrderBy;
//     page?: string;
//   };
// };

export default async function Index() {
  // const topicSlug = "street-photography";
  // const orderBy = searchParams.orderBy || OrderBy.POPULAR;
  // const page = parseInt(searchParams.page || "1");
  // const size = 4;

  // const [topicRequest, photosRequest] = await Promise.all([
  //   UnsplashApiClient.topics.get({ topicIdOrSlug: topicSlug }),
  //   UnsplashApiClient.topics.getPhotos({
  //     topicIdOrSlug: topicSlug,
  //     perPage: size,
  //     orderBy,
  //     page,
  //   }),
  // ]);

  return <div>Hello 1</div>;

  // return (
  //   <PhotoViewer
  //     orderBy={orderBy}
  //     photos={photosRequest?.response?.results}
  //     coverPhoto={topicRequest?.response?.cover_photo}
  //     pageInfo={{ page, size, totalElements: photosRequest?.response?.total }}
  //   />
  // );
}
