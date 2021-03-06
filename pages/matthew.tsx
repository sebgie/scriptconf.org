import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';
import Speaker from '../content/2019/matthew.mdx';
import Head from "next/head";

export default function() {
  return <SpeakerDetail first="matthew" last="sweeney">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-matthew.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-matthew.jpg" />    
      <title>Matthew Sweeney | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Speaker />
  </SpeakerDetail>
}
