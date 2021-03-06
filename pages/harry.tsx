import Harry from '../content/2019/harry.mdx'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';
import Head from "next/head";

export default function() {
  return <SpeakerDetail first="harry" last="roberts">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-harry.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-harry.jpg" />
      <title>Harry Roberts | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Harry />
  </SpeakerDetail>
}
