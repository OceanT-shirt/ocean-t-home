import { db } from '@/lib/firestore';
import { Link, MediaUrl, Product } from 'models/product';

export const revalidate = 3600; // Management cache. See: https://beta.nextjs.org/docs/data-fetching/fetching#segment-cache-configuration

const productsConverter = {
  // TODO: test toFirestore
  toFirestore: (data: Product): FirebaseFirestore.DocumentData => {
    return {
      TechTags: data.techTags,
      Title: data.title,
      Text: data.text,
      Links: data.links,
      Area: data.area,
      MediaUrls: data.mediaUrls,
    };
  },
  fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot): Product => {
    const id = snap.id;
    const data = snap.data();
    // TODO: add validator
    return {
      id: id,
      title: data.Title,
      area: data.Area,
      text: data.Text,
      techTags: data.TechTags,
      mediaUrls: data.MediaUrls.map(
        (mu: any) =>
          ({
            alt: mu.alt,
            type: mu.type,
            url: mu.url,
          } as MediaUrl),
      ),
      links: data.Links.map(
        (l: any) =>
          ({
            title: l.title,
            url: l.url,
          } as Link),
      ),
    };
  },
};

async function getProducts(): Promise<Product[]> {
  const snapshot = await db
    .collection('products')
    .withConverter(productsConverter)
    .get();
  // let products: Product[];
  // snapshot.forEach((doc) => {
  //   console.log(doc.id, '=>', doc.data());
  //   // TODO: add validation
  //   const product: Product = {
  //     id: doc.id,
  //     title: {},
  //   };
  // });
  let products: Product[] = [];
  snapshot.forEach((doc) => products.push(doc.data()));
  return products;
}

export { getProducts };
