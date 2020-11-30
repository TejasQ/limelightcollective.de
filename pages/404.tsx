import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
    redirect: {
      destination: `https://limelightcollective.vercel.app/${ctx.req.url}`,
      permanent: false,
    },
  };
};

export default () => null;
