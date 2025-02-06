import { Row, Col } from "antd";
import BackgroundImage from "../../assets/images/homepage/bg.png";
import cv from "../../assets/images/homepage/cv.jpg";
import nlp from "../../assets/images/homepage/nlp.jpg";
import iot from "../../assets/images/homepage/iot.jpg";

const Card = ({ image, title, description }: { image: string; title: string; description: string }) => {
  return (
    <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md overflow-hidden transition-all duration-150 ease-in-out transform hover:scale-110 will-change-transform">
      {/* Card Header Image */}
      <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager" // Lazy loading for images
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h5 className="mb-3 text-xl font-semibold text-blue-gray-900">{title}</h5>
        <p className="text-base font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Whatwedo = () => {
  const cardData = [
    {
      image: nlp,
      title: "NLP & Gen AI",
      description:
        "Explore the world of Natural Language Processing and Generative AI. Dive into how AI can understand, generate, and interact with human language in various applications, from chatbots to advanced language models.",
    },
    {
      image: cv,
      title: "Computer Vision",
      description:
        "Discover the capabilities of Computer Vision. Learn how machines can interpret and understand visual data, enabling applications like facial recognition, object detection, and autonomous vehicles.",
    },
    {
      image: iot,
      title: "Internet of Things (IoT)",
      description:
        "The Internet of Things connects devices to the internet, enabling smarter decision-making. Learn how IoT is transforming industries by enabling automation, remote monitoring, and real-time data analytics.",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat pt-16 pb-4 px-6"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-light text-white font-poppins mb-12">
          Our Capabilities
        </h2>

        {/* Ant Design Grid System with spacing */}
        <Row gutter={[32, 32]} justify="center">
          {cardData.map((card, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card image={card.image} title={card.title} description={card.description} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Whatwedo;
