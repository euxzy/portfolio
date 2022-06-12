import Head from 'next/head';

export default function Layouts(props) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>My Portfolio{pageTitle}</title>
      </Head>

      <>{children}</>
    </>
  );
}
