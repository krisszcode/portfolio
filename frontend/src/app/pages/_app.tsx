import DefaultLayout from '@components/DefaultLayout';

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
