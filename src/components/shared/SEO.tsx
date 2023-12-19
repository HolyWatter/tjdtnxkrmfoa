import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
  image: string;
}

function SEO({ title, description, image }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="HolyTrip" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width:" content="260" />
      <meta property="og:image:height" content="260" />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="ko_KR" />
    </Helmet>
  );
}

export default SEO;
