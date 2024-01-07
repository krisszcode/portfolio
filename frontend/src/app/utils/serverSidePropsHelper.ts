export async function centralizedGetServerSideProps(context, fetchDataFunction) {
    const data = await fetchDataFunction(context);
  
    return {
      props: { data }
    };
  }
  