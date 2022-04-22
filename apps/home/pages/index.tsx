import { findPageAtPath, StackbitApi } from '@watheia/api.stackbit';
import Layout from '@watheia/waweb.layout';
import { HomeView } from '@watheia/waweb.ui';
import { GetStaticProps } from 'next';

export function IndexPage(props) {
  // console.log('IndexPage(props)', props);
  return (
    <Layout>
      <HomeView />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const api = await StackbitApi.get();
  const page = findPageAtPath(api, '/');
  const props = { ...api.props, page };
  return { props };
};

export default IndexPage;
