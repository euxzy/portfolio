import Head from 'next/head';

export default function Layouts(props) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>My Portfolio{pageTitle}</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>

      <>{children}</>
    </>
  );
}
