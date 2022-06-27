import Head from 'next/head';

const Layouts = (props) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Hansalrl Portofolio{pageTitle}</title>
      </Head>

      <>{children}</>
    </>
  );
};

export default Layouts;
