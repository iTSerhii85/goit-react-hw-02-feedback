import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Statistics } from "./Statistics";

export const App = () => {
  return (
    <Layout>
      <GlobalStyle/>
      <Statistics good={0} neutral={0} bad={0}/>
    </Layout>
  );
};
