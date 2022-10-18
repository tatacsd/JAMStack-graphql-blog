import { usePageQuery } from '../generated/graphql';

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: 'home',
    },
  });
  return <h1>{data?.page?.title}</h1>;
}
// yarn add @graphql-codegen/cli @graphql-codegen/import-types-preset @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-urql -D
