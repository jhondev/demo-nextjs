const Page = () => {
  //   const url = `${process.env.HELP_APP_URL}`;
  return (
    <div>
      Index Page for
      {/* <span>{process.env.HELP_APP_URL}</span> */}
      <br />
      <a href={process.env.HELP_APP_URL}>Link with env</a>
    </div>
  );
};

export default Page;
