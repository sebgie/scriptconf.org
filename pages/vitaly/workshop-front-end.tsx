import Vitaly from '../../content/2019/workshop-vitaly.mdx'
import { SpeakerDetail } from '../../components/2019-bold/SpeakerDetail';
import Head from "next/head";

export default function() {
  return <SpeakerDetail first="vitaly" last="friedman">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-harry.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-harry.jpg" />    
    </Head>
    <Vitaly />
  </SpeakerDetail>
}
