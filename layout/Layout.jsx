import Head from "next/head";

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title || "Naga Class for Software Development"}</title>
      </Head>
      <div className="container ">{children}</div>
    </>
  );
};

export default Layout;
