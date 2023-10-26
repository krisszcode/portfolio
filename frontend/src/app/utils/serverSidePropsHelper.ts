export async function centralizedGetServerSideProps(context, fetchDataFunction) {
    // Központi logika, például hitelesítés, stb.
    
    // Adatok lekérése a kapott fetchDataFunction segítségével
    const data = await fetchDataFunction(context);
  
    return {
      props: { data }
    };
  }
  